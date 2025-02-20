from dotenv import load_dotenv
import os
from main import Generator

load_dotenv()

randgen = Generator(os.getenv("RANDOM_ORG_API_KEY"))

