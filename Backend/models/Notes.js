import mongoose from 'mongoose';

const { Schema } = mongoose;

const NotesSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    Title: {
        type: String,
        required: true,
        // Remove unique constraint if titles can be shared
        // unique: true,
    },
    Description: {
        type: String,
        required: true,
        // Remove unique constraint if descriptions can be shared
        // unique: true,
    },
    Tag: {
        type: String,
        default: "General",
    },
    Date: {
        type: Date,
        default: Date.now,
    },
});


const Notes = mongoose.model("Notes", NotesSchema);
export default Notes;
