from stack import Stack

stack = Stack('stack.txt')

def parseline(line, stack: Stack):
    tokens = line.split()
    if not tokens:
        return
    
    op = tokens[0].upper()

    args = tokens[1:]

    if op == 'PUSH':
        if not args:
            raise ValueError("you need to push something")
        
        return
    
    elif op == 'POP':
        if not stack.stack():
            raise ValueError('stack cannot be empty')
        
        return 
    
    elif op == 'ADD':
        if not stack.stack():
            raise ValueError('stack cannot be empty')
        
        if len(stack.stack()) < 2:
            raise ValueError('stack needs 2 elements')
        
        lhs = int(stack.pop())
        rhs = int(stack.pop())

        return stack.push(lhs + rhs)
    
    elif op == 'SUB':
        if not stack.stack():
            raise ValueError('stack cannot be empty')
        
        if len(stack.stack()) < 2:
            raise ValueError('stack needss 2 elements')
        
        lhs = int(stack.pop())
        rhs = int(stack.pop())

        return stack.push(lhs-rhs)
    
    elif op == "MUL":
        if not stack.stack():
            raise ValueError('stack cannot be empty')
        
        if len(stack.stack()) < 2:
            raise ValueError('stack needs 2 elements')
        
        lhs = int(stack.pop())
        rhs = int(stack.pop())

        return stack.push(lhs * rhs)
    
    elif op == "DIV":
        if not stack.stack():
            raise ValueError('stack cannot be empty')
        
        if len(stack.stack()) < 2:
            raise ValueError('stack needs 2 elements')
        
    elif op == "PRINT":
        return stack.print()
    
    elif op == "DUMP":
        return stack.dump()
    
    else:
        return

def interp(file, stack):
    with open(file, 'r') as file:
        lines = [line.strip() for line in file.readlines()]

    idx = 0

    while idx < len(lines):
        print(parseline(lines[idx], stack))
        idx += 1

interp('prog', stack)