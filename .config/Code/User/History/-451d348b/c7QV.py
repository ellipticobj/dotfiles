import requests
from typing import List

url = "https://api.random.org/json-rpc/4/invoke"

class GeneralException(Exception):
    def __init__(self, message):
        super().__init__(message)
class Generator():
    def __init__(self, RANDOM_ORG_API_KEY):
        self.apikey = RANDOM_ORG_API_KEY

    def randint(self, min, max, numofints=1, allowduplicates = True) -> (int|List):
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