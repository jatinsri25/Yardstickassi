from app import db
from app.models.product import Product
import random

categories = ['Laptop', 'Smartphone', 'Tablet', 'Headphones', 'Camera']
brands = ['Apple', 'Samsung', 'Sony', 'Dell', 'Canon', 'HP', 'Lenovo']

def create_mock_products(n=100):
    for i in range(n):
        product = Product(
            name=f'{random.choice(brands)} {random.choice(categories)} Model {i+1}',
            description=f'Description for product {i+1}',
            price=round(random.uniform(50, 2000), 2),
            category=random.choice(categories),
            brand=random.choice(brands),
            stock_quantity=random.randint(1, 100),
            image_url='https://via.placeholder.com/150'
        )
        db.session.add(product)
    db.session.commit()
    print(f'Added {n} mock products.')

# Usage: from app.data.mock_data import create_mock_products; create_mock_products() 