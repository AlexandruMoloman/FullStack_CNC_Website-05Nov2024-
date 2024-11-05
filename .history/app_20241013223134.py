from flask import Flask, render_template, send_from_directory
from flask_cors import CORS

app = Flask(__name__, static_folder='static/react-app/static', static_url_path='/static')
CORS(app)

@app.route('/')
def index():
    return render_template('index.html')  # Убедитесь, что файл находится в папке templates

@app.route('/<path:path>')
def catch_all(path):
    return render_template('index.html')

# Обслуживание медиа-файлов
@app.route('/media/<path:path>')
def send_media(path):
    return send_from_directory('static/media', path)

@app.route('/home')
def home():
    return {"title": "home", "description": "Home Page"}

@app.route('/technologia')
def technologia():
    return {"title": "technologia", "description": "Technologia"}

@app.route('/prodotti')
def prodotti():
    return {"title": "prodotti", "description": "Prodotti"}

@app.route('/contatti')
def contatti():
    return {"title": "contatti", "description": "Contatti"}

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5001, debug=True)
