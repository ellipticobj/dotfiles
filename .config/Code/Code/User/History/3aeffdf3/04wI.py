from typing import Dict, List
import requests

url = ""
params = {
    "": ""
}

def scrapeQns(url: str = url, params: Dict = params) -> List:
    response = requests.get(url, params=params)
    response.raise_for_status()

    if response.status_code == 200:
        data = response.json()
        
        questions = data.get()
        qnsList = []

        return qnsList