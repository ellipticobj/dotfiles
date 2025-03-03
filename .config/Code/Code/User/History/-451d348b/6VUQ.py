import requests
from typing import List

url = "https://api.random.org/json-rpc/4/invoke"

class GeneralError(Exception):
    def __init__(self, message):
        super().__init__(message)

class RangeTooNarrowError(Exception):
    def __init__(self, message):
        super().__init__(message)
    

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
            "method": "generateIntegers",
            "params": {
                "apiKey": self.apikey,
                "n": numofints,
                "min": min,
                "max": max,
                "replacement": allowduplicates
            },
        }

        print(payload)

        response = requests.post(url, json=payload)

        if response.status_code == 200:
            raise GeneralError(f"{response.json()['error']['message']}")
        
        return response.json()['result']['random']['data']
    
from dotenv import load_dotenv
import os

load_dotenv()

randgen = Generator(os.getenv("RANDOM_ORG_API_KEY"))

print(randgen.randint(1, 1, 2))