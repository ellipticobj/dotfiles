from dotenv import load_dotenv
import os
import main

load_dotenv()

randgen = Generator(os.getenv("RANDOM_ORG_API_KEY"))

