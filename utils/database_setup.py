from app import Student, app, db

# Run inside application context
with app.app_context():
    db.create_all()

    # Sample data
    sample_students = [
        Student(student_id="S001", name="Alice", password="123", marks=85),
        Student(student_id="S002", name="Bob", password="123", marks=92),
        Student(student_id="S003", name="Charlie", password="123", marks=78),
    ]

    db.session.add_all(sample_students)
    db.session.commit()

    print("Database created with sample data.")
