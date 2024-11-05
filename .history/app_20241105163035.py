from flask import flask, render_template;
from flask_cors import CORS;

app = flask(__name__)
CORS(app)


@app.route("/")
def index():
    return render_template('index.html')
if __name__=='__main__':
    app.run(debug=True, host='127.0.0.1', port=8080)