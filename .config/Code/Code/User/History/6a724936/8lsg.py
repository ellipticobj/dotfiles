from flask import *

app = Flask(__name__)

@app.route('/')
def homepage():
    return render_template('index.html')

@app.route('/dimini/')
@app.route('/dimini')
def diminipage():
    return render_template('dimini.html')


if __name__ == "__main__":
    app.run(host='0.0.0.0', port='7272', debug = True)