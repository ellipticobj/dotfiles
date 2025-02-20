from dotenv import load_dotenv
import os
import sys

projectdir = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
sys.path.insert(0, projectdir)

from main import Generator

load_dotenv()



randgen = Generator(os.getenv("RANDOM_ORG_API_KEY"))

print(randgen.randint(1, 1, 2))
