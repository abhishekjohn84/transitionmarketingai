from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token
from ..main import db
from ..models.user import User
from ..models.plan import Plan
from ..models.subscription import Subscription
import json

auth_bp = Blueprint('auth_bp', __name__)

@auth_bp.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    if not data or not data.get('email') or not data.get('password'):
        return jsonify({"error": "Email and password are required"}), 400

    if User.query.filter_by(email=data['email']).first():
        return jsonify({"error": "Email address already registered"}), 409

    try:
        # Find the free plan. If it doesn't exist, create it.
        free_plan = Plan.query.filter_by(price=0).first()
        if not free_plan:
            free_plan = Plan(
                name="Lead Spark", 
                price=0, 
                lead_quota=10, 
                features=json.dumps(["10 AI-Generated Leads per month", "Basic CRM Access"])
            )
            db.session.add(free_plan)
        
        # Create the new user
        new_user = User(
            email=data['email'],
            full_name=data.get('full_name')
        )
        new_user.set_password(data['password'])
        db.session.add(new_user)

        # Create a new trial subscription for the user on the free plan
        new_subscription = Subscription(
            user=new_user,
            plan=free_plan,
            status='trialing'
        )
        db.session.add(new_subscription)
        
        db.session.commit()

        access_token = create_access_token(identity=new_user.id)
        return jsonify(access_token=access_token, user=new_user.to_dict()), 201

    except Exception as e:
        db.session.rollback()
        return jsonify({"error": "Could not register user", "details": str(e)}), 500

@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    if not data or not data.get('email') or not data.get('password'):
        return jsonify({"error": "Email and password are required"}), 400

    user = User.query.filter_by(email=data['email']).first()

    if user is None or not user.check_password(data['password']):
        return jsonify({"error": "Invalid credentials"}), 401

    access_token = create_access_token(identity=user.id)
    return jsonify(access_token=access_token, user=user.to_dict()), 200
