
# WhatsApp Marketing Tool

This project is a mini WhatsApp marketing campaign tool, built using the MERN (MongoDB, Express, React, Node.js) stack.
The tool allows users to create marketing campaigns, upload contacts, and simulate message sending via a mocked WhatsApp API.

## Features
- Create a campaign with a name and a message.
- Upload a list of contacts (one per line).
- Track and display the number of messages sent and pending.
- Send messages to the contacts via a mocked WhatsApp API.

## Technologies Used
- **Frontend**: React, React-Bootstrap
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Testing**: Jest, React Testing Library

## Project Structure
```
root/
├── client/               # React frontend
│   ├── public/           # Static files
│   ├── src/              # Source files
│   │   ├── components/   # React components
│   │   ├── services/     # API call services
│   │   ├── App.js        # Main App component
│   │   ├── index.js      # React entry point
│   │   └── App.test.js   # Tests for App
└── server/               # Node.js backend
    ├── controllers/      # Controller functions
    ├── models/           # Mongoose models
    ├── routes/           # API routes
    ├── server.js         # Express app setup
    └── config/           # Config files
```

## Getting Started

### Prerequisites
- Node.js and npm installed on your machine
- MongoDB server running locally or a MongoDB Atlas connection URI

### Installation

1. Clone this repository
    ```bash
    git clone https://github.com/your-username/whatsapp-marketing-tool.git
    cd whatsapp-marketing-tool
    ```

2. Install dependencies for the backend
    ```bash
    cd server
    npm install
    ```

3. Install dependencies for the frontend
    ```bash
    cd ../client
    npm install
    ```

4. Configure environment variables in `server/.env`
    ```env
    MONGO_URI=<your_mongodb_connection_string>
    PORT=5000
    ```

### Running the Project

1. Start the backend server
    ```bash
    cd server
    npm start
    ```

2. Start the frontend
    ```bash
    cd ../client
    npm start
    ```

3. Open your browser and navigate to `http://localhost:3000`

### Testing

To run tests, use:
- For the frontend:
  ```bash
  cd client
  npm test
  ```

- For the backend (if you have tests set up):
  ```bash
  cd server
  npm test
  ```

## License
This project is licensed under the MIT License.
