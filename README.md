Welcome to **iNotebook**, my first MERN stack application! This project serves as a learning platform to understand how developers work on both the backend and frontend. 

## Features

- **User Authentication**: Securely register and log in to your account.
- **Responsive Design**: A user-friendly interface that works seamlessly on all devices, providing a consistent experience whether you're on a mobile, tablet, or desktop.
- **AI-Powered Note Writing**: Leverage AI to generate notes based on prompts, helping you articulate your thoughts more effectively.
- **Thought Storage**: Store your thoughts and ideas in one convenient location, making it easy to revisit them whenever you need.

## Tech Stack

- **Frontend**: React, Vite
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Email Service**: Nodemailer for sending emails

## Getting Started

### Prerequisites

- Node.js
- MongoDB
- A Gmail account for sending emails (if using Nodemailer)

### Installation

1. Clone the repository:

   ``` git clone ,repository-url>
   cd inotebook
   npm install

2. Install dependencies for the backend:

  ```cd ./backend
     npm install 

3. Set up your environment variables:

- Create a .env file in the inotebook root folder and add your MongoDB URI and email credentials and Gemini APi key,for more info about Environment variable go here = [Click-here](https://codesplash.medium.com/get-environment-variable-dotenv-in-both-frontend-and-backend-mern-stack-with-vite-19c061e6dc19)

4. Add this inside the package.json:

  ``` "scripts" ; {
      "both": "concurrently \"npm run dev\" \"nodemon Backend/index.js\""
  }

4. Start the frontend and backend  server:

   ```npm run both 

## Usage

- Once both servers are running, you can navigate to http://localhost:3000 to view the application.

- **Registration & Login:** Create an account or log in to access your notes.
- **Create Notes:** Use the AI feature to generate notes based on your prompts, or write them manually.
- **View & Edit Notes:** Access your stored thoughts anytime and make edits as needed.
  



   
 