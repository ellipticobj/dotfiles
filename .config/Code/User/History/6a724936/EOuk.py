from flask import *

app = Flask(__name__)

@app.route('/')
def homepage():
    return render_template('index.html')

