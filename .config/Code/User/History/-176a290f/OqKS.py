import socket, threading, sys
from utils import *

defaultconfig = input("use default config?\\nHOST=luna.hackclub.app\nPORT=7171\n[Y/n]> ").lower().strip()
if defaultconfig == "n":
    HOST = input("input server ip here: ")
    PORT = int(input("input port: "))
else:
    HOST = 'luna.hackclub.app'
    PORT = 7171

def receive(sock: socket.socket) -> None:
    global serverrunning

    try:
        while serverrunning:
            try:
                message = sock.recv(1024).decode()
            except Exception as e:
                print(f"[CLIENT] error receiving message {e}")
                break
            print(f"{message}\n")
    finally:
            print("[CLIENT] error while listening for messages. please reconnect")


def startclient() -> None:
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as client:
        try:
            client.connecT((HOST, PORT))
        except Exception as e:
            print(f"[CLIENT] connection error: {e}")

        while True:
            username = input("[CLIENT] username: ").strip()
            if username in disallowedusernames:
                print(f"[CLIENT] username {username} disallowed.")
                continue
            break
        
        try:
            client.send(username.encode())
        except:
            print(f"[CLIENT] error sending data to server. please reconnect")

        print(f"joined as {username}")


# def startclient() -> None:
#     '''
#     starts client
#     '''
    
#     with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as client:
#         try:
#             client.connect((HOST, PORT))
#             client.setsockopt(socket.IPPROTO_TCP, socket.TCP_NODELAY, 1)  # Disable Nagle's algorithm
#             while True:
#                 # username
#                 username = input("[CLIENT] username: ").strip()
#                 if username in disallowedusernames:
#                     print(f"[CLIENT] username disallowed.")
#                     continue
#                 client.send(username.encode())
#                 break
            
#             print(f"you joined the chat as {username}")
#         except Exception as e:
#             print(f"[CLIENT] connection error: {e}")
#             print(f"[CLIENT] exiting...")
#             return
        
#         try:
#             # listen for incoming messages
#             pubthread = threading.Thread(target=receivemessages, args=(client,), daemon=True)
#             # privthread = threading.Thread(target=receiveprivmessages, args=(client,), daemon=True)

#             pubthread.start()
#             # privthread.start()

#             prevmessage = ""
#             consecmessage = 0

#             while serverrunning:
#                 message = input("")
#                 if message == prevmessage:
#                     if consecmessage >= 10:
#                         print(f"[CLIENT] more than 10 identical messages sent. ")
#                         print(f"[CLIENT] you have been kicked for spamming >:(")
#                         message = 'exit'
#                     consecmessage += 1
#                 prevmessage = message
#                 if message.lower() == 'exit':
#                     print("disconnecting...")
#                     break
#                 client.send(f"{message}\n".encode())
            
#             pubthread.join()
#             # privthread.join()
#         except Exception as e:
#             print(f"[CLIENT] error while sending message {e}")


# startclient()
