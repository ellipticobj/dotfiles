import const

def newvarhandler(tokens):
    if tokens[1] not in (const.CONST_TYPES + const.VAR_TYPES):
        raise SyntaxError("variable needs to be a constant or variable...")
    
    varconst = tokens[1]


def reassignvar(tokens):
    # TODO
    pass