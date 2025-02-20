import const
import varhandler as vars

def evallogic(statement: str) -> bool:
    statement = statement.replace(f" {const.EQUALS} ", " == ")
    statement = statement.replace(f" {const.NOT} ", " != ")
    statement = statement.replace(f" const. ", " >= ")
    statement = statement.replace(f" is less than or equal to ", " <= ")
    statement = statement.replace(f" is greater than ", " > ")
    statement = statement.replace(f" is less than ", " < ")

    try:
        eval(statement, {}, vars.variables)

    except Exception as e:
        raise RuntimeError(f"error evaluating {statement}. do the variables exist?")