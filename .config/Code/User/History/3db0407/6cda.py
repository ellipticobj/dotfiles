from error import *
from expression import *
from condition import *
import const
import comp_stat as cs


class IfElse(object):

    def __init__(self, statement):
        self.statement = statement
        self.condition = None
        self.then = None
        self.else_body = None

        self.parse()

    def parse(self):

        then_index = self.statement.find(const.THEN)

        if then_index == -1:
            raise IfElseError(self.statement, "'then' statement not found.")
        else:
            try:
                self.condition = ConditionalStatement(self.statement[2:then_index])

                if_count = 0
                fi_count = 0
                else_pos = None

                for i in range(2, len(self.statement) - 4):
                    if self.statement[i : i + 2] == const.IF_OPEN:
                        if_count += 1
                    elif self.statement[i : i + 2] == const.IF_CLOSE:
                        fi_count += 1

                    if self.statement[i : i + 4] == const.ELSE and if_count == fi_count:
                        else_pos = i
                        break

                if else_pos != None:
                    self.then = cs.CompoundStatement(
                        self.statement[then_index + 4 : else_pos]
                    )
                    self.else_body = cs.CompoundStatement(
                        self.statement[else_pos + 4 : -2]
                    )
                else:
                    self.then = cs.CompoundStatement(
                        self.statement[then_index + 4 : -2]
                    )
            except IfElseError:
                print(self.statement, "Unknown Error")

    def eval(self, state):
        try:
            if self.condition.eval(state):
                self.then.eval(state)
            elif self.else_body != None:
                self.else_body.eval(state)
        except IfElseError:
            print(self.statement, "Error in Evaluation")
