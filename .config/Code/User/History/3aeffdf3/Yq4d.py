from typing import Dict, List
import requests

url = ""
params = {
    "": ""
}

def scrapeQns(url: str = url, params: Dict = params) -> List:
    response = requests.get(url, params=params)
    response.raise_for_status()

    try:
        if response.status_code == 200:
            data = response.json()

            questions = data.get()
            qnsList = []

            return qnsList
        else:
            raise RuntimeError(f"error while fetching data:\n{e}\nurl: {url}\nstatus code: (response.status_code)")
    except Exception as e:
        raise RuntimeError(f"error while fetching data:\n{e}\nurl: {url}")