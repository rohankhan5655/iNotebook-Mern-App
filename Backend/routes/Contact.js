import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config({
    path:'.env' //give .env file location
});
const router = express.Router();

// Debugging: log email and password
console.log('Email:', process.env.EMAIL);
console.log('Password:', process.env.EMAIL_PASSWORD);
 
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
    },
    logger: true, // Enable logging
    debug: true, // Enable debug output
});

// POST route to handle contact form submission
router.post('/', async (req, res) => {
    console.log('Request received:', req.body); // Debugging line
    const { name, email, message } = req.body;

    try {
        const mailOptions = {
            from: email,
            to: process.env.EMAIL,
            subject: `New Contact Form Submission from ${name}`,
            text: message,
            replyTo: email,
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Error sending message.' });
    }
});

export default router;     