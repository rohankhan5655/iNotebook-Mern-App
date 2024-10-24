// Notes.js
import React,{useContext} from "react";
import noteContext from "../context/notes/noteContext"
import NoteContent from './NoteContent';import NoteContent from "./NoteContent";
import NoteForm from "./NoteForm/Noteform";

const Notes = ({ onViewNote }) => {
  const context = useContext(noteContext);
  const { notes, addNote } = context;
  

  return (
    <>
    <NoteForm/>
    <div>
      {notes.map((note) => (
        <NoteContent key={note.id} note={note} onViewNote={onViewNote} />
      ))}
    </div>
      </>
  );
};

export default Notes;
