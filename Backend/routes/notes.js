import express from "express";
import fetchuser from "../middleware/fetchuser.js";
import { body, validationResult } from "express-validator";
import Notes from "../models/Notes.js";
const router = express.Router();
// Route: 1 :- Get al the Notes using Get "/api/notes/getuser".login required
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.error(error);
    res.status(500).send("Interval Server Error");
  }
});
// Route: 2 :- Add a new Notes using Post "/api/notes/addnote".login required
router.post(
  "/addnote",
  fetchuser,
  [
    body("Title", "Enter a valid title").isLength({ min: 5 }),
    body("Description", "description must be atleast 5 character").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    try {
      const { Title, Description, Tag } = req.body;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const note = new Notes({
        Title,
        Description,
        Tag,
        user: req.user.id,
      });
      const saveNotes = await note.save();
      res.json(saveNotes);
    } catch (error) {
      console.error(error);
      res.status(500).send("Interval Server Error");
    }
  }
);
// Route: Update an existing note using PUT "/api/notes/updatenote/:id". Login required
router.put("/updatenote/:id", fetchuser, async (req, res) => {
  const { Title, Description, Tag } = req.body;
  const newNote = {};

  // Validate request body
  if (!Title && !Description && !Tag) {
    return res.status(400).json({ error: "At least one field is required to update." });
  }

  // Set fields to update if they are provided
  if (Title) {
    newNote.Title = Title;
  }
  if (Description) {
    newNote.Description = Description;
  }
  if (Tag) {
    newNote.Tag = Tag;
  }

  try {
    // Find the note to be updated
    let note = await Notes.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ error: "Note not found" });
    }

    // Check if the user is authorized to update the note
    if (note.user.toString() !== req.user.id) {
      return res.status(403).json({ error: "Not allowed" });
    }

    // Update the note
    note = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });
    res.json(note);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Route: 4 :- Delete an existin Notes using DELETE "/api/notes/deletenote".login required
router.delete("/deletenote/:id", fetchuser, async (req, res) => {
   
    try {
         //find the note to be deleted and delete it it
    let note = await Notes.findById(req.params.id);
    if(!note) {return res.status(400).send("Not Found")}
    // Allow deletion only if user own this Note
      if(note.user.toString() !== req.user.id) {
          return res.status(401).send("not Allowed")
      }
      note = await Notes.findByIdAndDelete(req.params.id)
      res.json({"Success": "note has been deleted :)"})
  ;
    } catch (error) {
        console.error(error);
        res.status(500).send("Interval Server Error");
    }
})
   
// Export the router using ES6 module syntax
export default router;
