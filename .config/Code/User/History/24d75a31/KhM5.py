import const

variables = {}


def newvarhandler(tokens):
    if len(tokens) < 6:
        raise SyntaxError("not enough arguments to make a new variable...")

    if tokens[1] not in (const.CONST_TYPES + const.VAR_TYPES):
        raise SyntaxError("variable needs to be a constant or variable...")
    
    if tokens[2] not in (const.INTEGER + const.BOOL + const.FLOAT + const.NONETYPE):
        raise SyntaxError("variable needs a type")
    
    if tokens[4] != const.ASSIGNMENT_OPERATOR:
        raise SyntaxError("no 'is' found :(")

    varconst = tokens[1]
    vartype = tokens[2]
    varname = tokens[3]
    varval = tokens[5:]

    if varname in set(variables.keys()):
        raise KeyError("this variable already exists... use `<variablename> change to <value>` to change the variable")
    
    variables[varname] = [varconst, vartype, varval]


def reassignhandler(tokens):
    if len(tokens) < 3:
        raise SyntaxError("not enough arguments...")
    
    if not (tokens[1] == const.REASSIGNMENT_OPERATOR[0] and tokens[2] == const.REASSIGNMENT_OPERATOR[1]):
        raise SyntaxError("")