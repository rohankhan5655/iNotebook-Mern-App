import React, { useState } from "react";
import EditNote from "./EditNote/EditNote";

const NoteContent = ({ note, onViewNote, onDelete, onUpdateNote, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);

  if (!note) {
    return <p>Note not found</p>;
  }

  // Function to truncate text
  const truncateText = (text, limit) => {
    return text.length > limit ? `${text.substring(0, limit)}...` : text;
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  return (
    <div className="w-full max-w-[600px] mb-4 px-2 sm:px-0 animate__animated animate__fadeInUp rounded-lg border-2">
      {isEditing ? (
        <EditNote note={note} onUpdateNote={onUpdateNote} onCancel={handleCancelEdit} />
      ) : (
        <div className="bg-white p-5 shadow-md rounded-md h-auto flex flex-col">
          <h3 className="text-lg font-bold font-sans">
            {note.Title || "No title available"}
          </h3>
          <p className="text-sm py-2 font-mono">
            {truncateText(note.Description || "No description available", 30)}
          </p>
          {/* Flex container for tag and buttons */}
          <div className="flex justify-between items-center mt-2">
            {/* Tag display on the left (hidden on small devices) */}
            <p className="text-sm font-mono border px-2 bg-blue-600 text-white hidden sm:block">
              {note.Tag || "No tag available"}
            </p>

            {/* Show date with no border and smaller text */}
            <p className="text-xs font-mono px-2 hidden sm:block">
              {note.Date || "No Date available"}
            </p>

            {/* Action Buttons */}
            <div className="flex space-x-2 justify-end flex-grow">
              {/* View Button */}
              <button 
                onClick={() => onViewNote(note)} 
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white px-2 py-1 border border-blue-500 hover:border-transparent rounded text-xs sm:text-sm"
              >
                View
              </button>

              {/* Edit Button */}
              <button 
                           onClick={() => onEdit(note.id)}

                className="bg-transparent hover:bg-yellow-500 text-yellow-700 font-semibold hover:text-white px-2 py-1 border border-yellow-500 hover:border-transparent rounded text-xs sm:text-sm"
              >
                Edit
              </button>

              {/* Delete Button */}
              <button 
                onClick={() => onDelete(note._id)}
                className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white px-2 py-1 border border-red-500 hover:border-transparent rounded text-xs sm:text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NoteContent;
