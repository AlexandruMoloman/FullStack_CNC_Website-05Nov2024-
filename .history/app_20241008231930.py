from flask import Flask, render_template
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Для поддержки CORS, если понадобится


@app.route('/')
def index():
    return render_template('index.html')  # Здесь рендерится React-приложение

@app.route('/<path:path>')
def catch_all(path):
    return render_template('index.html')  # Все другие пути обрабатываются React


@app.route('/technologia')
def technologia():
    return {"title":"technologia", "description": "Technologia"}

@app.route('/prodotti')
def prodotti():
    return {"title":"prodotti", "description": "Prodotti"}

@app.route('/contatti')
def contatti():
    return {"title":"contatti", "description": "Conntatti"}

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5001, debug=True)
