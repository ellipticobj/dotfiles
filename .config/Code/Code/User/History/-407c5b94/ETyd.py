import randomorg_ellipticobj
import os
import dotenv

dotenv.loadenv()

randomgen = randomorg_ellipticobj.Generator(os.getenv("RANDOM_ORG_API_KEY"))

print(randomgen.randint())