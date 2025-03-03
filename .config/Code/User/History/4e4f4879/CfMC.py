import socket
import threading
from typing import Dict, Tuple
from utils import *

HOST = '0.0.0.0'
PORT = 7171

clients: Dict[socket.socket, str] = {}
running = True

def broadcast(message: bytes, sender: socket.socket = "") -> None:
    '''
    broadcasts a message
    '''
    for client in clients:
        if client != sender:
            try:
                client.send(f"{message}")
            except Exception as e:
                print(f"[SERVER] error sending message {e}")
                client.close()
                del clients[client]
    print(f"clients[client] sent message: {message}")

def broadcastpriv(message: str) -> None:
    for client in list(clients.keys()):
        try:
            # TODO: make a random private key each time server starts and send it to the client when client connects
            client.send(f"PRIVATE:{message}".encode())
        except Exception as e:
            print(f"[SERVER] error sending private message {e}")
            client.close()
            del clients[client]

def handleclient(client: socket.socket, addr: Tuple[str, int]) -> None:
    '''
    handles communication
    '''

    # username handling
    username = client.recv(1024).strip()
    clients[client] = username
    print(f"{username} joined from {addr}")
    broadcast(f"[SERVER] {username} joined")

    # message handling
    try:
        while True:
            message = client.recv(1024)
            if not message:
                break
            broadcast(f"{username}: {message}", sender=client)
            print(f"message: {message}")
    except Exception as e:
        print(f"[SERVER] error while handling messages: {e}")

    # cleanup after error
    finally:
        username = clients.pop(client, "unknown user")
        broadcast(f"[SERVER] {username} disconnected", )
        print(f"{username} disconnected from {addr}")
    client.close()
    del clients[client]
    
def shutdown(server: socket.socket, reason: str = None) -> None:
    '''
    shuts down the server
    '''
    global running

    if not reason:
        print("[SERVER] shutting down...")
        broadcast("[SERVER] shutting down...")
    else:
        print(f"[SERVER] shutting down: {reason}")
        broadcast(f"[SERVER] shutting down: {reason}")
    broadcastpriv("quitserver")
    
    for client in list(clients.keys()):
        client.close()
    server.close()

    running = False

    print(f"shut down complete")

def startserver() -> None:
    '''
    starts the server (duh)
    '''
    
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as server:
        server.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
        server.bind((HOST, PORT))
        server.listen()
        print(f"server started on {HOST}:{PORT}")
        
        try:
            while running:
                client, addr = server.accept()
                print()
                threading.Thread(target=handleclient, args=(client,addr), daemon=True).start()
        except KeyboardInterrupt:
            shutdown(server)

# TODO: add support for custom ip and port
# TODO: add system commands, sending messages, etc
input("start server: ")
print("starting server")
print()
startserver()