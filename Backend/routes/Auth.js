import express from 'express';
import mongoose from 'mongoose';
import { body, validationResult } from 'express-validator';
import User from '../models/User.js';
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import fetchuser from '../middleware/fetchuser.js';
const router = express.Router();
const JWT_SECRET = 'rohanisagoodboy'

// Route:1 :- Create a User using: POST "/api/auth/"
router.post('/createuser', [
    body('Email', "Enter a valid Email").isEmail(),
    body('Name', "Enter a valid Name").isLength({ min: 5 }),
    body('Password', "Password must be at least 7 characters").isLength({ min: 7 }),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        let user = await User.findOne({ Email: req.body.Email });
        if (user) {
            return res.status(400).json({ error: "Sorry, a user with this email already exists" });
        }
        const salt = await bcrypt.genSaltSync(10);
       const  secPass = await bcrypt.hash(req.body.Password,salt)
        // create new user
        user = await User.create({
            Name: req.body.Name,
            Password: secPass,
            Email: req.body.Email,
        });
        const data = {
            user: {
                id: user.id,
            }
        }
   const authtoken =jwt.sign(data,JWT_SECRET)
   
        res.json({ success: true,authtoken });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ success: false, message: 'Error saving user', error });
    }
});


// Route:2 :- Authenticate the user using POST "/api/auth/login".no login required
router.post('/login', [
    body('Email', "Enter a valid Email").isEmail(),
    body('Password', "Password cannot be empty").notEmpty(),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
    const { Email, Password } = req.body;

    try {
        // Find user by email
        let user = await User.findOne({ Email });
        if (!user) {
            return res.status(400).json({ success: false, error: "Invalid credentials, please try again." });
        }

        // Compare password
        const passwordMatch = await bcrypt.compare(Password, user.Password);
        if (!passwordMatch) {
            return res.status(400).json({ success: false, error: "Invalid credentials, please try again." });
        }

        // Generate auth token
        const data = {
            user: {
                id: user.id,
            }
        };
        const authtoken = jwt.sign(data, JWT_SECRET);

        res.json({ success: true, authtoken });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ success: false, message: 'Error logging in', error });
    }
});

    //Route:3 :- Get Login user detail POST "/api/auth/getuser".login required
    router.post('/getuser', fetchuser, async (req, res) => {
        try {
            const userId = req.user.id; // Ensure this is correct
            console.log("User ID retrieved from token:", userId);
    
            const user = await User.findById(userId).select("-Password");
            if (!user) {
                return res.status(404).send({ error: "User not found" });
            }
    
            console.log("User details found:", user);
            res.send(user);
        } catch (error) {
            console.error("Error fetching user details:", error.message);
            res.status(500).send("Internal Server Error");
        }
    });
    
        // Export the router using ES6 module syntax
export default router;
