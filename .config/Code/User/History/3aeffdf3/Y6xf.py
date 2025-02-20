# scraper
from typing import List
    
import requests
from bs4 import BeautifulSoup

def scrapeQuestionsTitles(url: str = "https://github.com/csujedihy/lc-all-solutions") -> List:
    '''
    scrapes the names of the questions from https://github.com/csujedihy/lc-all-solutions
    '''
    questions = []
    try:
        response = requests.get(url)
        response.raise_for_status()

        soup = BeautifulSoup(response.content, 'html.parser')

        questionelements = soup.find_all('a', class_='Link--primary')

        for q in questionelements:
            if q.text.strip()[0].isdigit():
                print(q.text.strip())
                questions.append(q.text.strip())

        # removes duplicates
        questions = list(set(questions))
        questions.sort()

        return questions
    except Exception as e:
        print(f"An error occurred: {e}")
        return []

def titlesToUrl(titles: List) -> List:
    '''
    converts the titles of the questions to their respective urls
    '''
    urls = []
    for title in titles:
        url = f"https://raw.githubusercontent.com/csujedihy/lc-all-solutions/refs/heads/master/{title}/question.md"
        print(url)
        urls.append(url)
    return urls

def scrapeQuestions(urls: List) -> List:
    '''
    scrapes the questions from https://github.com/csujedihy/lc-all-solutions
    '''
    for questionurl in urls:
        qnList = []
        errList = []
        try:
            response = requests.get(questionurl)
            response.raise_for_status()
            print(response.text)

            qnList.append(response.text)
        except Exception as e:
            print(f"An error occurred: {e}\nurl: {questionurl}")
            errList.append(questionurl)
        
    return qnList, errList

print("Scraping question titles...") 
questionTitles = scrapeQuestionsTitles()
print()
print()

print("Converting titles to urls...")
urls = titlesToUrl(questionTitles)
print()
print()

print("Scraping questions...")
questions, errors = scrapeQuestions(urls)
print()
print()

print("done")