import const
import varhandler as vars

def printhandler(tokens) -> None:
    # print line
    if tokens[1] == const.OUTPUT_NEWLINE:
        printline(tokens)

    # print
    else:
        printnoline(tokens)

    return None

def printnoline(tokens) -> None:
    print(tokens)
    if tokens[1] in set(vars.variables.keys()):
        print(f"{' '.join(vars.variables[tokens[1]][2])}")
    else:
        print(f"{' '.join(tokens[1:])}", end="")

def printline(tokens) -> None:
    if tokens[2] in set(vars.variables.keys()):
        print(f"{' '.join(vars.variables[tokens[2]][2])}")
    else:
        print(f"{' '.join(tokens[2:])}")


def recvlineshandler(tokens) -> str:
    # input to variable
    if (
        len(tokens) == 3
        and tokens[1] == const.INPUT_TO
    ):
        usrinput = input()
        vars.variables[tokens[2]] = usrinput
    else: usrinput = ""
    return usrinput

