       # Wander Asia - Server Side

This repository contains the server-side code for **Wander Asia**, a tourism management website focused on Southeast Asia. The backend handles user authentication, database operations, and API endpoints for managing tourist spots.

## Features

- **User Authentication**: Implements secure authentication with Firebase and JWT for protected routes.
- **Tourist Spot Management**: CRUD operations for adding, updating, and deleting tourist spots.
- **Protected Routes**: Private routes for adding and managing a user's own tourist spots.
- **Sorting & Filtering**: Sort tourist spots based on cost and filter by country.
- **Database**: MongoDB integration for securely storing user and tourist spot data.

## Technologies Used

- **Backend Framework**: Express.js (Node.js)
- **Database**: MongoDB (Mongoose for schema modeling)
- **Authentication**: Firebase Authentication & JWT
- **Environment Variables**: dotenv for secure credentials handling
- **API Testing**: Postman

## Installation & Setup

### Clone the repository:
```sh
git clone https://github.com/your-username/wander-asia-server.git
cd wander-asia-server
```

### Install dependencies:
```sh
npm install
```

### Create a `.env` file and add the following:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
FIREBASE_CONFIG=your_firebase_credentials
```

### Start the server:
```sh
npm start
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user and return JWT token

### Tourist Spots
- `GET /api/tourist-spots` - Get all tourist spots
- `POST /api/tourist-spots` - Add a new tourist spot (Protected Route)
- `GET /api/tourist-spots/:id` - Get details of a specific tourist spot
- `PUT /api/tourist-spots/:id` - Update a tourist spot (Protected Route)
- `DELETE /api/tourist-spots/:id` - Delete a tourist spot (Protected Route)

### User-Specific
- `GET /api/my-list` - Get all tourist spots added by the logged-in user (Protected Route)

## Deployment

The server is deployed on **Render/Vercel**. You can access the API at:

🔗 **API Base URL:** [https://wander-asia-server.vercel.app](https://wander-asia-server.vercel.app)

## Live Website

The client-side application is hosted at:

🌍 **Frontend URL:** [https://wander-asia.vercel.app](https://wander-asia.vercel.app)

## Contributions

Feel free to fork the repository and contribute! Open a pull request with your changes. 🚀
