from flask import Flask, render_template
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Для поддержки CORS, если понадобится

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/technologia')
def technologia():
    return render_template('technologia.html')

@app.route('/prodotti')
def prodotti():
    return render_template('prodotti.html')

@app.route('/contatti')
def contatti():
    return render_template('contatti.html')

if __name__ == '__main__':
    app.run(debug=True)
