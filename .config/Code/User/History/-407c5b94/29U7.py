import randomorg_ellipticobj as randomorg
import os
import dotenv

dotenv.loadenv()

randomgen = randomorg.Generator(os.getenv("RANDOM_ORG_API_KEY"))

print(randomgen.randint())