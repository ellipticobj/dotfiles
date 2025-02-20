class Stack:
    def __init__(self, filepath):
        print(f"stack initialized\ncheck the stack at {filepath}")
        self.filepath = filepath

    def push(self, data):
        try:
            with open(self.filepath, 'r') as file:
                stack = file.readlines()
        
        except FileNotFoundError:
            stack = []
        
        stack.append(data + '\n')

        with open(self.filepath, 'w') as file:
            file.write(stack)

    def pop(self):
        with open(self.filepath, 'r') as file:
            lines = file.readlines()
        
        last = lines.pop().strip()
        lines = lines[:-1].strip()

        with open(self.filepath, 'w') as file:
            file.write(lines)

        return last
    
    def print(self):
        with open(self.filepath, 'r') as file:
            lines = file.readlines()

        return lines[-1].strip()
    
    def dump(self):
        with open(self.filepath, 'r') as file:
            lines = file.readlines()

        with open(self.filepath, 'w') as file:
            pass

        return [line.strip() for line in lines]