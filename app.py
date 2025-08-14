from flask import Flask, redirect, render_template, request, session
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.secret_key = "your_secret_key"
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///leaderboard.db"
db = SQLAlchemy(app)


# Database model
class Student(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    student_id = db.Column(db.String(10), unique=True, nullable=False)
    name = db.Column(db.String(50))
    password = db.Column(db.String(50))
    marks = db.Column(db.Integer)


@app.route("/", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        sid = request.form["student_id"]
        password = request.form["password"]
        student = Student.query.filter_by(student_id=sid, password=password).first()
        if student:
            session["student_id"] = sid
            return redirect("/dashboard")
    return render_template("login.html")


@app.route("/dashboard")
def dashboard():
    if "student_id" not in session:
        return redirect("/")
    students = Student.query.order_by(Student.marks.desc()).all()
    rank_list = {s.student_id: i + 1 for i, s in enumerate(students)}
    current = Student.query.filter_by(student_id=session["student_id"]).first()
    return render_template(
        "dashboard.html",
        student=current,
        rank=rank_list[current.student_id],
        leaderboard=students[:10],
    )


@app.route("/logout")
def logout():
    session.clear()
    return redirect("/")


if __name__ == "__main__":
    app.run(debug=True)
