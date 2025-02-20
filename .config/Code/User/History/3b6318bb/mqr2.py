import const
import sys
import shell
import varhandlers as vars

args = sys.argv[1:]

def mainloop(filename: str) -> None:
    for filename in args:
        with open(filename, "r") as file:
            # reads all lines that have content AND removes blank lines
            lines = [line.strip() for line in file if line.strip()]
        
        if filename[-6:0] != ".sigma":
            if not lines:
                continue

            if lines[0] != const.FILE_IDENT:
                raise RuntimeError("file does not have identifier !>sigma")
            else:
                raise RuntimeError("wrong file extension... rename your files to <filename>.sl then try again!")
        
        # parse the files

if len(args) == 0:
    # shell mode soon?
    raise RuntimeError("no file was provided :(")

else:
    mainloop(filename)
