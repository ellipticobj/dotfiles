# scraper
from typing import List
    
import requests
from bs4 import BeautifulSoup

verboseoutput = True

def scrapeQuestionsTitles(url: str = "https://github.com/csujedihy/lc-all-solutions", v: bool = False) -> List:
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
                if v: print(q.text.strip())
                questions.append(q.text.strip())

        # removes duplicates
        questions = list(set(questions))
        questions.sort()

        return questions
    except Exception as e:
        print(f"An error occurred: {e}")
        return []

def titlesToUrl(titles: List, v: bool = False) -> List:
    '''
    converts the titles of the questions to their respective urls
    '''
    urls = []
    for title in titles:
        url = f"https://raw.githubusercontent.com/csujedihy/lc-all-solutions/refs/heads/master/{title}/question.md"
        if v: print(url)
        urls.append(url)
    return urls

def scrapeQuestions(urls: List, v: bool = False) -> List:
    qnList = []
    errList = []
    '''
    scrapes the questions from https://github.com/csujedihy/lc-all-solutions
    '''
    for questionurl in urls:
        try:
            response = requests.get(questionurl)
            response.raise_for_status()
            if v: print(response.text)

            qnList.append(response.text)
        except Exception as e:
            print(f"An error occurred: {e}\nurl: {questionurl}")
            errList.append(questionurl)
        
    return qnList, errList

print("Scraping question titles...") 
questionTitles = scrapeQuestionsTitles(v = verboseoutput)
print()
print()

print("Converting titles to urls...")
urls = titlesToUrl(questionTitles, verboseoutput)
print()
print()

print("Scraping questions...")
questions, errors = scrapeQuestions(urls, verboseoutput)
print()
print()

print(f"Questions: {questions}")
with open("questions.txt", "w") as f:
    f.dump(questions)

print("done")