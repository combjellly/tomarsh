## VIDEO TUTORIAL STOPPED AT 32:00 (FUll-Featured forms ): https://www.youtube.com/watch?v=UIJKdCIEXUQ

from flask import Flask, render_template, url_for, flash, redirect, request




app = Flask(__name__)

@app.before_request
def before_request():
    if not request.is_secure:
        url = request.url.replace('http://', 'https://', 1)
        code = 301
        return redirect(url, code=code)

app.config["SECRET_KEY"] = '1d7a5cacc3bb3e2d94ff46191fed82fe '
@app.route("/")
def land():
    return render_template("marsh.html")

@app.route("/index")
def home():
    return render_template("index.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/marsh")
def marsh():
    return render_template("marsh.html")

@app.route("/bird")
def bird():
    return render_template("bird.html")

@app.route("/bark")
def bark():
    return render_template("bark.html")

@app.route("/cattail")
def cattail():
    return render_template("cattail.html")

@app.route("/sapling")
def sapling():
    return render_template("sapling.html")

@app.route("/acknowledgment")
def acknowledgment():
    return render_template("acknowledgment.html")

if __name__ == '__main__':
	app.run(debug=True)
