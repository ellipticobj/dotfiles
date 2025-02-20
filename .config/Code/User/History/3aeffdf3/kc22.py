# scraper
from typing import List
    
import requests
from bs4 import BeautifulSoup

def scrapeQuestionsTitles(url: str = "https://github.com/csujedihy/lc-all-solutions") -> List:
    '''
    scrapes the names of the questions from https://github.com/csujedihy/lc-all-solutions
    '''
    try:
        response = requests.get(url)
        response.raise_for_status()

        soup = BeautifulSoup(response.content, 'html.parser')

        question_elements = soup.find_all('a', class_='Link--primary')
        
        questions = [q.text.strip() for q in question_elements if q.text.strip()[0].isdigit()]

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
        urls.append(url)
    return urls

def scrapeQuestionsTitles(urls: List) -> List:
    '''
    scrapes the names of the questions from https://github.com/csujedihy/lc-all-solutions
    '''
    for questionurl in urls:
        qnList = []
        errList = []
        try:
            response = requests.get(questionurl)
            response.raise_for_status()

            soup = BeautifulSoup(response.content, 'html.parser')

            question_elements = soup.find_all('pre')
            print(question_elements)
            
            question = [q.text for q in question_elements]

            question = list(set(question))
            question.sort()

            qnList.append(question)
        except Exception as e:
            print(f"An error occurred: {e}\nurl: {questionurl}")
            errList.append(questionurl)
        
    return qnList, errList

print("Scraping question titles...") 
questionTitles = scrapeQuestionsTitles()
print(f"titles: {questionTitles}")

print("Converting titles to urls...")
urls = titlesToUrl(questionTitles)
print(f"urls: {urls}")

print("Scraping questions...")
questions, errors = scrapeQuestionsTitles(urls)
print(f"questions: {questions}")
print(f"errors: {errors}")

print("done")