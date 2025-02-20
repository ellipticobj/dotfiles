from typing import List, Any
import varhandler as var
import iohandler as io
import conditionalhandler as cond
import const
import re


def tokenize(statement: str) -> List:
    return statement.split()


def findblock(lines: list, startidx: int, endiden: str) -> List | int:
    """
    finds block between the start index and the
    """
    block = []

    for idx, line in enumerate(lines[startidx:], start=startidx):
        if line.strip() == endiden:
            return block, idx
        block.append(line)

    # raises error if there is no eding
    raise RuntimeError(f"expected {endiden} but could not find it :(")


def parseif(lines, startidx) -> int:
    """
    parses if statements and returns the index to continue at
    """
    conditions = []
    blocks = []

    idx = startidx

    while idx < len(lines):
        line = lines[idx].strip()

        # if the line is an if or elif line
        if line.startswith(const.IF_OPEN) or line.startswith(const.ELIF):
            # finds the condition
            condition = line.split(f"{const.THEN} {const.DO}")[0][3:].strip()
            block, idx = findblock(lines, idx + 1, const.IF_CLOSE)
            conditions.append(condition)
            blocks.append(block)

        # if the line is an else block
        elif line == f"{const.ELSE} {const.DO}":
            block, idx = findblock(lines, idx + 1, const.IF_CLOSE)
            conditions.append(None)
            blocks.append(block)

        # if the line is the ending of the if else
        elif line == const.IF_CLOSE:
            break
        
        # raises error if there is no if, elif, else, fi
        else:
            raise RuntimeError(f"Unexpected line in if block: {line}")

    for condition, block in zip(conditions, blocks):
        if condition is None or cond.parse(condition):
            for line in block:
                parseline(line)
            break

    return idx


def parsewhile(lines: List, idx: int) -> int:
    """
    parses while loops and returns the index to continue at
    """

    condition = lines[idx].strip()[len(const.WHILE_OPEN)+1:len(const.DO)+1].strip()

def process_while_block(lines, start_idx):
    condition = lines[start_idx].strip()[6:-3].strip()
    block, idx = parse_block(lines, start_idx + 1, "elihw")

    while evaluate_condition(condition):
        for line in block:
            parseline(line)

    return idx


def parseline(line: str) -> Any:
    # remove comments from line
    line = re.sub(f"{const.COMMENT_OPEN}.*?{const.COMMENT_CLOSE}", "", line)

    if not line:
        return None

    tokens = tokenize(line)

    if tokens[0] == const.REASSIGNMENT_IDENT:
        var.reassignhandler(tokens)
        return 0

    if tokens[0] == const.NEW_VAR_IDENT:
        var.newvarhandler(tokens)
        return 0

    if tokens[0] == const.INPUT:
        io.recvlineshandler(tokens)
        return 0

    if tokens[0] == const.OUTPUT:
        io.printhandler(tokens)
        return 0

    if tokens[0] == const.IF_OPEN:
        return const.IF_OPEN

    if tokens[0] == const.WHILE_OPEN:
        return const.WHILE_OPEN

    if tokens[0] == const.FOR_OPEN:
        return const.FOR_OPEN

    return
