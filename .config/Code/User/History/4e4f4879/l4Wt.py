import socket, threading
from typing import Dict, Tuple
from utils import *

HOST = '0.0.0.0'
PORT = 7171

clients: Dict[socket.socket, str] = {}
serverrunning = True

def broadcast(message: bytes, sender: socket.socket = "") -> None:
    for client in list(clients.keys()):
        try:
            client.send(f"{message}".encode())
        except Exception as e:
            print(f"[SERVER] error sending message {e}")
            client.close()
            del clients[client]

def handleclient(client: socket.socket, addr: tuple[str, int]) -> None:
    try:
        username = client.recv(1024).decode()
        clients[client] = username
    except Exception as e:
        print(f"[SERVER] error receiving/setting username")
        client.close()
        del clients[client]

    print(f"{username} joined from {addr}")
    broadcast(f"[SERVER] {username} joined")

    while True:
        try:
            message = client.recv(1024).decode()
        except Exception as e:
            print(f"[SERVER] error receiving message")
            client.close()
            del clients[client]

        broadcast(f"{username}: {message}", sender=client)



#     # cleanup after error
#     finally:
#         if client in clients:
#             username = clients.pop(client, "unknown user")
#             broadcast(f"[SERVER] {username} disconnected", )
#             print(f"{username} disconnected from {addr}")
#     client.close()
    
# def shutdown(server: socket.socket, reason: str = None) -> None:
#     '''
#     shuts down the server
#     '''
#     global running

#     if not reason:
#         print("[SERVER] shutting down...")
#         broadcast("[SERVER] shutting down...")
#     else:
#         print(f"[SERVER] shutting down: {reason}")
#         broadcast(f"[SERVER] shutting down: {reason}")
#     broadcastpriv("quitserver")
    
#     for client in list(clients.keys()):
#         client.close()
#     server.close()

#     running = False

#     print(f"shut down complete")

# def startserver() -> None:
#     '''
#     starts the server (duh)
#     '''
    
#     with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as server:
#         server.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
#         server.bind((HOST, PORT))
#         server.listen()
#         print(f"server started on {HOST}:{PORT}")
        
#         try:
#             while running:
#                 client, addr = server.accept()
#                 print()
#                 threading.Thread(target=handleclient, args=(client,addr), daemon=True).start()
#         except KeyboardInterrupt:
#             shutdown(server)

# # TODO: add support for custom ip and port
# # TODO: add system commands, sending messages, etc
# # input("start server: ")
# print("starting server")
# print()
# startserver(