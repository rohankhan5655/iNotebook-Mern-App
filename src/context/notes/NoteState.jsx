import React, { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
  const host = `http://localhost:3000`;
  const initialNotes = [];

  const [notes, setNotes] = useState(initialNotes);

  // Function to format date
  const formatDate = (date) => {
    const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false, // Set to false for 24-hour format
    };

    return new Intl.DateTimeFormat('en-US', options).format(new Date(date));
  };

  // Get all notes
  const getNotes = async () => {
    const token = localStorage.getItem('token');
    console.log("Host:", host);
    console.log("Auth Token:", token);
    if (!token) {
      console.error("No auth token found in localStorage");
      return;
    }
    try {
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'auth-token': token,
        },
      });
      if (!response.ok) {
        throw new Error('Failed to fetch data from server');
      }
      const json = await response.json();
      setNotes(json);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };
  

  // Add a note
  const addNote = async (Title, Description, Tag) => {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token'), // Make sure this key is correct
      },
      body: JSON.stringify({ Title, Description, Tag }),
    });
    const json = await response.json();
    const note = {
      "_id": json._id,
      "user": json.user,
      "Title": Title,
      "Description": Description,
      "Tag": Tag,
      "Date": json.Date,
      "__v": json.__v,
    };
    setNotes(notes.concat(note));
  };

  // Delete a note

  const deleteNote = async(id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token'), // Make sure this key is correct
      },
    
    });
    const json = await response.json();
    const newNote = notes.filter((note) => note._id !== id);
    setNotes(newNote);
  };

  // Edit a note
  const editNote = async (id, Title, Description, Tag) => {
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token'), // Make sure this key is correct
      },
      body: JSON.stringify({ Title, Description, Tag }),
    });
    await response.json();
    // Logic to edit in client
    const updatedNotes = notes.map((note) => 
      note._id === id ? { ...note, Title, Description, Tag } : note
    );
    setNotes(updatedNotes);
  };

  return (
    <noteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
