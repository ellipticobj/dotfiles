def parse(line):
    tokens = line.split()
    if not tokens:
        return
    
    op = tokens[0].upper()

    args = tokens[1:]