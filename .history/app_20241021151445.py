from flask import flask, render_template;
app= Flask(__name__)

@app.route("/")
def index():
    return"?"
if __name__=='__main__':
    app.run(debug=True)