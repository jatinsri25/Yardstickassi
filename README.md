# E-commerce Sales Chatbot

A comprehensive e-commerce sales chatbot that enhances the shopping experience by enabling efficient search, exploration, and purchase processes. Built with React frontend and Python Flask backend.

## 🚀 Features

- **Responsive UI**: Modern, intuitive chatbot interface compatible with desktop, tablet, and mobile devices
- **User Authentication**: Secure login system with session management
- **Product Search**: Intelligent product search and filtering capabilities
- **Conversation Management**: Session tracking with timestamps and conversation reset
- **Mock E-commerce Backend**: RESTful API with 100+ mock products
- **Real-time Chat**: Interactive chat interface with message history

## 🛠️ Technology Stack

### Frontend
- **React 18** - Modern JavaScript framework for building user interfaces
- **TypeScript** - Type-safe JavaScript development
- **Tailwind CSS** - Utility-first CSS framework for responsive design
- **React Hook Form** - Performant forms with easy validation
- **Axios** - HTTP client for API communication
- **React Router** - Client-side routing

### Backend
- **Python 3.9+** - Programming language
- **Flask** - Lightweight web framework
- **SQLAlchemy** - SQL toolkit and ORM
- **SQLite** - Lightweight database for development
- **Flask-CORS** - Cross-origin resource sharing
- **Flask-JWT-Extended** - JWT authentication

## 📁 Project Structure

```
ecommerce-chatbot/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── services/       # API services
│   │   ├── types/          # TypeScript type definitions
│   │   └── utils/          # Utility functions
│   ├── public/             # Static assets
│   └── package.json        # Frontend dependencies
├── backend/                # Python Flask backend
│   ├── app/
│   │   ├── models/         # Database models
│   │   ├── routes/         # API routes
│   │   ├── services/       # Business logic
│   │   └── utils/          # Utility functions
│   ├── data/               # Mock data and database
│   ├── requirements.txt    # Python dependencies
│   └── run.py             # Application entry point
├── docs/                   # Documentation
└── README.md              # Project documentation
```

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm
- Python 3.9+
- Git

### Backend Setup

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Create virtual environment:**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Initialize database:**
   ```bash
   python init_db.py
   ```

5. **Run the backend server:**
   ```bash
   python run.py
   ```

The backend will be available at `http://localhost:5000`

### Frontend Setup

1. **Navigate to frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

The frontend will be available at `http://localhost:3000`

## 📖 API Documentation

### Authentication Endpoints
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `POST /api/auth/logout` - User logout

### Product Endpoints
- `GET /api/products` - Get all products with pagination
- `GET /api/products/search` - Search products by query
- `GET /api/products/{id}` - Get product by ID
- `GET /api/products/categories` - Get all categories

### Chat Endpoints
- `POST /api/chat/message` - Send chat message
- `GET /api/chat/history` - Get chat history
- `DELETE /api/chat/history` - Clear chat history

## 🎯 Sample Queries

The chatbot can handle various types of queries:

- **Product Search**: "Show me laptops under $1000"
- **Category Browse**: "What electronics do you have?"
- **Product Details**: "Tell me more about the iPhone 15"
- **Price Range**: "Show me products between $50 and $200"
- **Brand Search**: "Do you have Apple products?"

## 🔧 Configuration

### Environment Variables

Create `.env` files in both frontend and backend directories:

**Backend (.env):**
```
FLASK_SECRET_KEY=your-secret-key
JWT_SECRET_KEY=your-jwt-secret
DATABASE_URL=sqlite:///ecommerce.db
```

**Frontend (.env):**
```
REACT_APP_API_URL=http://localhost:5000/api
```

## 🧪 Testing

### Backend Tests
```bash
cd backend
python -m pytest tests/
```

### Frontend Tests
```bash
cd frontend
npm test
```

## 📊 Database Schema

### Users Table
- id (Primary Key)
- username (Unique)
- email (Unique)
- password_hash
- created_at
- last_login

### Products Table
- id (Primary Key)
- name
- description
- price
- category
- brand
- stock_quantity
- image_url
- created_at

### Chat Sessions Table
- id (Primary Key)
- user_id (Foreign Key)
- message
- response
- timestamp
- session_id

## 🚀 Deployment

### Backend Deployment (Heroku)
1. Create `Procfile` in backend directory
2. Set environment variables
3. Deploy using Heroku CLI

### Frontend Deployment (Vercel/Netlify)
1. Build the project: `npm run build`
2. Deploy the `build` folder

## 📝 Project Report

### Architecture Decisions

1. **Frontend Framework**: React was chosen for its component-based architecture, large ecosystem, and excellent developer experience.

2. **Backend Framework**: Flask was selected for its simplicity, flexibility, and ease of learning, making it perfect for rapid development.

3. **Database**: SQLite for development (can be easily migrated to PostgreSQL for production).

4. **Authentication**: JWT-based authentication for stateless sessions.

5. **Styling**: Tailwind CSS for rapid UI development and responsive design.

### Challenges Faced and Solutions

1. **Real-time Chat Implementation**
   - **Challenge**: Implementing real-time chat without WebSockets
   - **Solution**: Used polling with React hooks for simplicity, can be upgraded to WebSockets

2. **Product Search Intelligence**
   - **Challenge**: Making search results relevant and contextual
   - **Solution**: Implemented fuzzy search with category filtering and price range matching

3. **Responsive Design**
   - **Challenge**: Ensuring chatbot works well on all devices
   - **Solution**: Used Tailwind CSS responsive classes and mobile-first design approach

4. **State Management**
   - **Challenge**: Managing complex chat state and user sessions
   - **Solution**: Used React Context API and localStorage for persistence

### Key Learnings

1. **User Experience**: Chatbot interfaces require careful attention to conversation flow and user feedback
2. **API Design**: RESTful APIs with proper error handling are crucial for chatbot functionality
3. **Performance**: Optimizing search queries and implementing pagination improves user experience
4. **Security**: Proper authentication and input validation are essential for production applications

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Team

- **Frontend Developer**: [Your Name]
- **Backend Developer**: [Your Name]
- **UI/UX Designer**: [Your Name]

## 📞 Contact

For questions or support, please contact [your-email@example.com] 