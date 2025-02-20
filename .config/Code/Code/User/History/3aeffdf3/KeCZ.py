from typing import Dict, List
import requests
from bs4 import BeautifulSoup

url = ""
params = {
    "": ""
}

def requestQuetions(url: str = url, params: Dict = params) -> List:
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
    
import requests
from bs4 import BeautifulSoup

def scrape_programming_questions(url: str = url):
    try:
        response = requests.get(url)
        response.raise_for_status()

        soup = BeautifulSoup(response.content, 'html.parser')

        # Find elements containing questions (update selector based on the website structure)
        question_elements = soup.find_all('h2', class_='question-title')  # Example selector

        # Extract text from the elements
        questions = [q.text.strip() for q in question_elements]

        return questions
    except Exception as e:
        print(f"An error occurred: {e}")
        return []