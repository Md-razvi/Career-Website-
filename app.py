from flask import Flask, render_template

app = Flask(__name__)

JOBS = [
    {
        "title": "Senior Product Designer",
        "company": "Northstar Labs",
        "location": "Remote",
        "category": "Design",
        "salary": "$120k – $155k",
        "type": "Full-time",
    },
    {
        "title": "Frontend Engineer",
        "company": "Goodwell",
        "location": "San Francisco, CA",
        "category": "Engineering",
        "salary": "$135k – $175k",
        "type": "Full-time",
    },
    {
        "title": "Product Manager",
        "company": "Fieldnote",
        "location": "New York, NY",
        "category": "Product",
        "salary": "$125k – $160k",
        "type": "Full-time",
    },
    {
        "title": "Content Marketing Lead",
        "company": "Common Ground",
        "location": "Remote",
        "category": "Marketing",
        "salary": "$95k – $125k",
        "type": "Full-time",
    },
    {
        "title": "Backend Engineer",
        "company": "Solstice",
        "location": "Austin, TX",
        "category": "Engineering",
        "salary": "$140k – $180k",
        "type": "Full-time",
    },
    {
        "title": "Brand Designer",
        "company": "Little North",
        "location": "Remote",
        "category": "Design",
        "salary": "$90k – $118k",
        "type": "Full-time",
    },
]


@app.get("/")
def home():
    return render_template("index.html", jobs=JOBS)


@app.get("/favicon.ico")
def favicon():
    return "", 204


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=False)