from langchain_openai import ChatOpenAI
from dotenv import load_dotenv
import os

load_dotenv()

llm = ChatOpenAI(os.getenv("OPENAI_API_KEY"))
llm.invoke("Hello, world!")