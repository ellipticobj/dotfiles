import const
import globals


def printhandler(tokens: list) -> None:
    # print line
    if tokens[1] == const.OUTPUT_NEWLINE:
        printline(tokens)

    # print
    else:
        printnoline(tokens)


def printnoline(tokens: list) -> None:
    if tokens[1] in globals.variables:
        print(f"{globals.variables[tokens[1]][2]}{tokens[2:]}", end="")
    else:
        print(f"{' '.join(tokens[1:])}", end="")


def printline(tokens: list) -> None:
    if tokens[2] in globals.variables:
        print(f"{globals.variables[tokens[2]][2]}{tokens[3:]}")
    else:
        print(f"{' '.join(tokens[2:])}")


def recvlineshandler(tokens: list) -> str:
    # input to variable
    if len(tokens) == 3 and tokens[1] == const.INPUT_TO:
        usrinput = input()
        globals.variables[tokens[2]] = [const.VAR_TYPES[0], const.STRING, usrinput]
        return usrinput
    return ""
