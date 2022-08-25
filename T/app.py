from flask import Flask, render_template, url_for, request, jsonify, Response
import json
import glob

app = Flask(__name__)

# on default route return all html and javascript
@app.route("/")
def show():
    return render_template("index.html")

@app.route("/anfahrt")
def show_anfahrt():
    return render_template("anfahrt.html")

@app.route("/fotos")
def show_fotos():
    return render_template("fotos.html")

@app.route("/nachwuchs")
def show_nw():
    return render_template("nachwuchs.html")

@app.route("/get_json_files")
def files():
    response = {
        "files": glob.glob("static/images/*.jpg")
    }
    return response

@app.route("/get_json_nw")
def nw():
    with open("static/nachwuchs.txt","r",encoding='utf-8') as f:
        lines=f.read()
    response = {
        "nw": lines
    }
    return response

@app.route("/get_json_news")
def news():
    with open("static/infos.txt","r",encoding='utf-8') as f:
        lines=f.read()
    response = {
        "news": lines
    }
    return response

@app.route("/links")
def show_links():
    return render_template("links.html")

@app.route("/news")
def show_news():
    return render_template("news.html")

@app.route("/platzresavierung")
def show_platz():
    return render_template("platzresavierung.html")

@app.route("/get_json_platz")
def check():
    with open("static/platzresavierung.txt","r",encoding='utf-8') as f:
        lines=f.read()
    lines=lines.split("Senden")[:-1]
    #TODO Logic for Platzreasvierung
    response = {
        "platz": lines
    }
    return response


if __name__ == "__main__":
    app.run(debug=True)
