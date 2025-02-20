from dotenv import load_dotenv
import os

load_dotenv()


class Generator():
    def __init__(self, RANDOM_ORG_API_KEY):
        self.apikey = RANDOM_ORG_API_KEY

    def randint(self, min=1, max=100, numofints=1, allowduplicates = True) -> (int|List):

        '''
        generates a random integer between min and max.
        default settings (no arguments) will generate one number between 1 to 100
        '''

        if numofints > (max-min) and not allowduplicates:
            raise RangeTooNarrowError("Range of numbers should be more than or equal to numofints when allowduplicates is set to true.")

        payload = {
            "jsonrpc": "2.0",
            "method": "generateIntergers",
            "params": {
                "apiKey": self.apikey,
                "n": numofints,
                "min": min,
                "max": max,
                "replacement": allowduplicates
            },
        }

        response = requests.post(url, json=payload)

        if response.status_code == 200:
            raise GeneralException(f"{response.json()['error']['message']}")
        
        return response.json()['result']['random']['data']
    



randgen = Generator(os.getenv("RANDOM_ORG_API_KEY"))

print(randgen.randint(1, 1, 2))
