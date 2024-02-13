from flask import Flask, render_template, request
from datetime import datetime

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/add/wish", methods=["POST", "GET"])
def add_wish():
    if request.method == 'POST':
        wish = request.form["wish"]
        with open(str(datetime.utcnow()), "w") as wish_:
            wish_.write(wish)
        return render_template("thanks.html")
    return "Try"
