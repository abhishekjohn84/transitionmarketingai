import os
from flask import Flask, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager

# --- App Initialization ---
app = Flask(__name__)
CORS(app) 

# --- App Configuration ---
# These are loaded from the deployment environment (like Bolt) for security.
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY')
app.config["JWT_SECRET_KEY"] = os.environ.get('JWT_SECRET_KEY')
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# --- Database & JWT Initialization ---
db = SQLAlchemy(app)
jwt = JWTManager(app)

# --- Import Models (after db is defined to avoid circular imports) ---
from .models.user import User
from .models.plan import Plan
from .models.subscription import Subscription

# --- Import and Register Blueprints ---
from .routes.auth import auth_bp
# We will create the main api_bp routes later
# from .routes.api import api_bp 

app.register_blueprint(auth_bp, url_prefix='/auth')
# app.register_blueprint(api_bp, url_prefix='/api')


# --- Health Check Route ---
@app.route('/api/health')
def health_check():
    """A simple route to confirm the API is online."""
    return jsonify({"status": "healthy"}), 200

# The Gunicorn start command will run this 'app' object.
