import stackhandler

stack = Stack('stack.txt')

def parse(line, stack: Stack):
    tokens = line.split()
    if not tokens:
        return
    
    op = tokens[0].upper()

    args = tokens[1:]

    if op == 'PUSH':
        if not args:
            raise ValueERror("you need to push something")
        
        stack.