import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

import Noteform from "./NoteForm/Noteform";
import noteContext from "../context/notes/noteContext";
import ViewNote from "./ViewNote";
import NoteContent from "./NoteContent";
import EditNote from "./EditNote/EditNote";

const PrivateHome = () => {
  const context = useContext(noteContext);
  const { notes, getNotes } = context; 
  const [isEditing, setIsEditing] = useState(false);
  const [currentNote, setCurrentNote] = useState(null); 
  const [isNoteFormVisible, setIsNoteFormVisible] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);
  const [isViewNoteVisible, setIsViewNoteVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // State for search input

  useEffect(() => {
    getNotes();
  }, []);

  const handleOpenForm = () => {
    setIsNoteFormVisible(true);
  };

  const handleViewNote = (note) => {
    setSelectedNote(note);
    setIsViewNoteVisible(true);
  };

  const handleDeleteNote = (noteId) => {
    context.deleteNote(noteId);
  };

  const handleEditClick = (note) => {
    setCurrentNote(note); 
    setIsEditing(true);
  };

  const closeEditModal = () => {
    setIsEditing(false);
    setCurrentNote(null); 
  };

  const handleCloseViewNote = () => {
    setIsViewNoteVisible(false);
    setSelectedNote(null);
  };
 useEffect(() => {
   if(localStorage.getItem('token')) {
    getNotes()
   }
   else {
    navigate('/'); // Redirect to PrivateHome after login

   }
 }, [])
 
  // Filter notes based on search term
  const filteredNotes = notes.filter(note =>
    note.Title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    note.Tag.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto mt-[60px] p-4 relative h-[600px] flex flex-col items-center">
      {/* Search Bar */}
      <div className="w-full max-w-[600px] mb-4">
        <form className="px-4 w-full animate__animated animate__fadeInDown" onSubmit={(e) => e.preventDefault()}>
          <label
            className="mb-2 text-sm font-medium text-gray-900 sr-only"
            htmlFor="default-search"
          >
            Search
          </label>
          <div className="relative">
            <input
              required
              placeholder="Search"
              value={searchTerm} // Bind search input to state
              onChange={(e) => setSearchTerm(e.target.value)} // Update state on input change
              className="block w-full p-2 pl-5 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 outline-none focus:border-blue-500"
              id="default-search"
              type="search"
            />
            <button className="absolute end-2.5 bottom-1/2 translate-y-1/2 p-2 text-sm font-medium text-white bg-blue-600 rounded-lg border border-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
              Search
            </button>
          </div>
        </form>
      </div>

      {/* Add Note Button */}
      <div className="w-full max-w-[600px] mb-4 animate__animated animate__fadeInDown">
        <div className="flex justify-end mx-5">
          <button
            className="max-w-[100px] bg-transparent items-center justify-center flex border-2 border-blue-600 shadow-lg hover:bg-blue-600 text-blue-600 hover:text-white duration-300 cursor-pointer active:scale-[0.98] rounded-md px-2 py-1"
            onClick={handleOpenForm}
          >
            Add Note
          </button>
        </div>
      </div>

      {/* Notes List */}
      <div className="w-full max-w-[600px] mb-4 h-[100vh] overflow-y-scroll custom-scrollbar">
        <div className="text-xl text-gray-600 flex justify-center">
          {filteredNotes.length === 0 && 'No notes to display'}
        </div>
        {filteredNotes.map((note) => (
          <NoteContent 
            key={note._id} 
            note={note} 
            onViewNote={handleViewNote} 
            onDelete={handleDeleteNote} 
            onEdit={() => handleEditClick(note)} 
          />
        ))}
      </div>

      {/* Note Form */}
      {isNoteFormVisible && (
        <div className="w-full max-w-[600px] mb-4 ">
          <Noteform onClose={() => setIsNoteFormVisible(false)} />
        </div>
      )}

      {/* View Note Component */}
      {isViewNoteVisible && (
        <ViewNote note={selectedNote} onClose={handleCloseViewNote} />
      )}

      {/* Edit Note Component */}
      {isEditing && (
        <EditNote onClose={closeEditModal} noteToEdit={currentNote} />
      )}
    </div>
  );
};

export default PrivateHome;
