import const

def printhandler(tokens) -> None:
    # print line
    if tokens[1] == const.OUTPUT_NEWLINE:
        printline()

    # print
    else:
        printnoline()

    return None

def printnoline(tokens) -> None:
    print(f"{' '.join(tokens[1:])}")

def printline(tokens) -> None:
    print(f"{' '.join(tokens[2:])}")
        

def recvlineshandler(tokens) -> str:
    # input to variable
    if (
        len(tokens) == 3
        and tokens[1] == const.INPUT_TO
        and tokens[3] in set(vars.variables.keys())
    ):
        
        usrinput = input()
        vars.variables[tokens[3]] = usrinput
    else: usrinput = ""
    return usrinput

