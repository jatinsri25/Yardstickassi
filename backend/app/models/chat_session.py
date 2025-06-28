from app import db
from datetime import datetime
import uuid

class ChatSession(db.Model):
    __tablename__ = 'chat_sessions'
    
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    session_id = db.Column(db.String(36), default=lambda: str(uuid.uuid4()))
    message = db.Column(db.Text, nullable=False)
    response = db.Column(db.Text, nullable=False)
    timestamp = db.Column(db.DateTime, default=datetime.utcnow)
    
    def __init__(self, user_id, message, response, session_id=None):
        self.user_id = user_id
        self.message = message
        self.response = response
        if session_id:
            self.session_id = session_id
        else:
            self.session_id = str(uuid.uuid4())
    
    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'session_id': self.session_id,
            'message': self.message,
            'response': self.response,
            'timestamp': self.timestamp.isoformat()
        }
    
    def __repr__(self):
        return f'<ChatSession {self.session_id}>' 