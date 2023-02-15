from flask import flask, render template, request
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI']='postgresq1://postgres:07152016@localhost/demoDB'
"""
db = SQLAlchemy(app)
#define db model table in our database
class Data(db.Model):
    _tablename_ = 'customer_email'
    id = db.column(db.Integer, primary_key = True)
    email = db.Columb(db.String(120), unique = True)
    height = db.Column(db.Integer)
    weight = db.Column(db.Integer)

    def _init_(seld, email_, height_, weight_):
        self.email = email_
        self.height = height_
        self.weight_
        
        """_


@app.route("/")
def index():
    return render_template("activity19.html")

    @app.route("/", methods=[post])
    def thankyou():
        if request.method=='post':
            email = request.form["email_address"]
            height = request.form["height_name"]
            weight = request.form["weight_name"]
            print(request.form)
            return render_template('thankyou.html')

            if __name__ == "_main_":
                app.debug + True
                app.run()