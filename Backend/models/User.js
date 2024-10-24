import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new Schema({
    Name: {
        type: String,
        required: true,
        unique: true,
    },
    Email: {
        type: String,
        required: true,
        unique: true,
    },
    Password: {
        type: String,
        required: true,
    },
   
});

// Create and export the User model using ES6 export syntax
const User = mongoose.model("user", UserSchema);
export default User;
