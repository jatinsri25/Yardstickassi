from flask import Flask
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from app import create_app
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = create_app()

if __name__ == '__main__':
    app.run(
        host='0.0.0.0',
        port=int(os.environ.get('PORT', 5001)),
        debug=os.environ.get('FLASK_ENV') == 'development'
    ) 