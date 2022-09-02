from flask import Flask, render_template, url_for, request, jsonify, Response
import json
import glob
from datetime import datetime, timedelta

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
    with open("static/nachwuchs.txt", "r", encoding='utf-8') as f:
        lines = f.read()
    response = {
        "nw": lines
    }
    return response


@app.route("/get_json_news")
def news():
    with open("static/infos.txt", "r", encoding='utf-8') as f:
        lines = f.read()
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


@app.route("/get_json_platz", methods=['POST'])
def check():
    entries = []
    sent = request.get_json() + "\n"

    with open("static/platzresavierung.txt", "r", encoding='utf-8') as f:
        lines = f.read()
    lines = lines.split("Senden\n")
    sent = sent.split("Senden\n")[0]
    for line in lines[:-1] + [sent]:
        data = line.split("\n\n")[2:7]
        start = datetime.strptime(data[1].split(": ")[1], "%Y-%m-%d %H:%M")
        end = datetime.strptime(data[2].split(": ")[1], "%Y-%m-%d %H:%M")
        if start > end:
            response = {
                "platz": False
            }
            return response

        platz = data[0].split("\n")[1]
        name = data[3].split(": ")[1]
        email = data[4].split(": ")[1]
        entries.append((start, end, platz, name, email))

    entries.sort(key=lambda x: x[0])

    rep = True
    i = 1
    for entry in entries[:-1]:
        if entry[0] < entries[i][1] and entries[i][0] < entry[1]:
            rep = False
            break
        i += 1
    #test psuh
    if rep:
        last_week = datetime.now() - timedelta(days=30)
        entries = list(filter(lambda x: x[0] >= last_week, entries))
        with open("static/platzresavierung.txt", "w", encoding='utf-8') as f:
            for entry in entries:
                f.write(
                    f"Auswahl:\n\n\n\n\n{entry[2]}\n\nVon: {entry[0].year}-{str(entry[0].month).zfill(2)}-{str(entry[0].day).zfill(2)} {str(entry[0].hour).zfill(2)}:{str(entry[0].minute).zfill(2)}\n\n"
                    f"Bis: {entry[1].year}-{str(entry[1].month).zfill(2)}-{str(entry[1].day).zfill(2)} {str(entry[1].hour).zfill(2)}:{str(entry[1].minute).zfill(2)}"
                    f"\n\nName: {entry[3]}\n\nEmail: {entry[4]}\n\n\n\n")
    response = {
        "platz": rep
    }
    return response


if __name__ == "__main__":
    app.run(debug=True)
