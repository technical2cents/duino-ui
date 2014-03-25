from flask import Flask
from flask.ext.sqlalchemy import SQLAlchemy

app = Flask(__name__, static_url_path='')
app.config.from_object('config')
db = SQLAlchemy(app)


from app.models import pinsetting
from app.models import pinmodel

from app.routes import index

from app.routes import pinsettings
from app.routes import pins
from app.gpio import duino