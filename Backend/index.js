import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectToMongo } from './db.js';
import authRouter from './routes/Auth.js'; 
import notesRouter from './routes/Notes.js'; 
import contactRouter from './routes/Contact.js';
  
dotenv.config({
  path:'.env' //give .env file location
});
connectToMongo();

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', authRouter);
app.use('/api/notes', notesRouter);
app.use('/api/contact', contactRouter); // Ensure this matches your request

app.get('/', (req, res) => {
    res.send('Hello World!');
});
 
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
