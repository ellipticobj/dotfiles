import const
import varhandler as vars

def evallogic(statement: str) -> bool:
    condition = condition.replace(" is equal to ", " == ")
    condition = condition.replace(" is not ", " != ")
    condition = condition.replace(" is greater than or equal to ", " >= ")
    condition = condition.replace(" is less than or equal to ", " <= ")
    condition = condition.replace(" is greater than ", " > ")
    condition = condition.replace(" is less than ", " < ")

    try:
        eval(condition, {}, vars.variables)