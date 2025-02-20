class Stack:
    def __init__(self, filepath):
        print(f"stack initialized\ncheck the stack at {filepath}")
        self.filepath = filepath

    def appendto(self, data):
        with open(self.filepath, 'w') as file:
            stack = readlines(file)
        
        stack.append(data)

        with open(self.filepath, 'r') as file:
            file.write(stack)