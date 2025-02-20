class Stack:
    def __init__(self, filepath):
        print(f"stack initialized\ncheck the stack at {filepath}")
        self.filepath = filepath

    def append(self, data):
        try:
            with open(self.filepath, 'w') as file:
                stack = file.readlines()
        
        except FileNotFoundError:
            stack = []
        
        stack.append(data + '\n')

        with open(self.filepath, 'r') as file:
            file.write(stack)

    def pop(self):
        with open(self.filepath, 'r') as file:
            lines = file.readlines()
        
        last = lines.pop().strip()

        with open(self.filepath, 'w') as file:
            lines = lines[:-1]
            file.write(lines)

        return last
    
    def dump(self):
        with open(self.filepath, 'r') as file:
            lines = file.readlines()

        with open(self.filepath, 'w') as file:
            file.write("")

        return lines