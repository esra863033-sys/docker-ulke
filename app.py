from flask import Flask, jsonify
import requests

app = Flask(__name__)

@app.route("/country/<name>")
def country(name):
    url = f"https://restcountries.com/v3.1/name/{name}"
    data = requests.get(url).json()
    return jsonify(data)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
