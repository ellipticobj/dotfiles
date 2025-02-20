import const
import varhandler as vars

def evallogic(statement: str) -> bool:
    statement = statement.replace(" is equal to ", " == ")
    statement = statement.replace(" is not ", " != ")
    statement = statement.replace(" is greater than or equal to ", " >= ")
    statement = statement.replace(" is less than or equal to ", " <= ")
    statement = statement.replace(" is greater than ", " > ")
    statement = statement.replace(" is less than ", " < ")

    try:
        eval(statement, {}, vars.variables)

    except Exception as e:
        raise RuntimeError(f"error evaluating {statement}. do the variables exist?")