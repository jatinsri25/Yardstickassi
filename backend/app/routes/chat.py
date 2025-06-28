from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from app import db
from app.models.chat_session import ChatSession
from app.models.product import Product
from fuzzywuzzy import process

chat_bp = Blueprint('chat', __name__)

@chat_bp.route('/message', methods=['POST'])
@jwt_required()
def chat_message():
    """Process a chat message and return a response (product search)."""
    user_id = get_jwt_identity()
    data = request.get_json()
    message = data.get('message', '')

    # Simple keyword search for demo
    products = Product.query.filter(Product.name.ilike(f'%{message}%')).all()
    if not products:
        # Fuzzy search fallback
        all_names = [p.name for p in Product.query.all()]
        matches = process.extract(message, all_names, limit=3)
        products = [Product.query.filter_by(name=m[0]).first() for m in matches if m[1] > 60]

    response = {
        'products': [p.to_dict() for p in products] if products else [],
        'text': f"Found {len(products)} product(s) for '{message}'." if products else "No products found."
    }

    # Store chat session
    chat = ChatSession(user_id=user_id, message=message, response=str(response))
    db.session.add(chat)
    db.session.commit()

    return jsonify(response), 200

@chat_bp.route('/history', methods=['GET'])
@jwt_required()
def chat_history():
    user_id = get_jwt_identity()
    sessions = ChatSession.query.filter_by(user_id=user_id).order_by(ChatSession.timestamp).all()
    return jsonify([s.to_dict() for s in sessions]), 200

@chat_bp.route('/history', methods=['DELETE'])
@jwt_required()
def clear_history():
    user_id = get_jwt_identity()
    ChatSession.query.filter_by(user_id=user_id).delete()
    db.session.commit()
    return jsonify({'message': 'Chat history cleared.'}), 200 