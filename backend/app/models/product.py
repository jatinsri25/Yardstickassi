from app import db
from datetime import datetime

class Product(db.Model):
    __tablename__ = 'products'
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(200), nullable=False)
    description = db.Column(db.Text, nullable=False)
    price = db.Column(db.Float, nullable=False)
    category = db.Column(db.String(100), nullable=False)
    brand = db.Column(db.String(100), nullable=False)
    stock_quantity = db.Column(db.Integer, default=0)
    image_url = db.Column(db.String(500))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    def __init__(self, name, description, price, category, brand, stock_quantity=0, image_url=None):
        self.name = name
        self.description = description
        self.price = price
        self.category = category
        self.brand = brand
        self.stock_quantity = stock_quantity
        self.image_url = image_url
    
    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'price': self.price,
            'category': self.category,
            'brand': self.brand,
            'stock_quantity': self.stock_quantity,
            'image_url': self.image_url,
            'created_at': self.created_at.isoformat()
        }
    
    def is_in_stock(self):
        return self.stock_quantity > 0
    
    def __repr__(self):
        return f'<Product {self.name}>' 