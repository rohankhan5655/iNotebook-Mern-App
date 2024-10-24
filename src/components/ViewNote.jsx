import React from "react";

const ViewNote = ({ note, onClose }) => {
  // Function to count words
  const countWords = (text) => {
    return text.trim().split(/\s+/).length;
  };

  // Function to format text with paragraphs
  const formatText = (text) => {
    return text.split('\n').map((line, index) => (
      <p key={index} className="mb-2">{line}</p>
    ));
  };

  // Only proceed if note is defined
  if (!note) {
    return null; // or render a loading spinner or a message
  }

  // Determine if the description should be scrollable
  const shouldScroll = countWords(note.Description) > 30;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-30 backdrop-blur-md">
      <div className="w-full  max-w-[600px] mb-4 px-2 sm:px-0">
        <div className="bg-white h-auto p-5 shadow-md rounded-md  flex flex-col relative">
          <h3 className="text-lg font-bold font-sans mb-2">
            {note.Title || "No title available"}
          </h3>
          
          <div
            className={`text-sm py-2 font-mono mb-2 ${shouldScroll ? 'h-[100px] overflow-y-scroll custom-scrollbar' : ''}`}
          >
            {formatText(note.Description || "No description available")}
          </div>

          <div className="flex justify-start items-center mt-2">
            {/* Tag display on the left */}
            <p className="text-sm font-mono border px-2 bg-blue-600 text-white ">
              {note.Tag || "No tag available"}
            </p>

            {/* Show date with no border and smaller text */}
            <p className="text-xs font-mono px-2">
              {note.Date || "No Date available"}
            </p>
          </div>
          
          {/* Close Button */}
          <button
            className="absolute top-3 right-3"
            onClick={onClose}
            aria-label="Close"
          >
            <svg
              clipRule="evenodd"
              fillRule="evenodd"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-700 hover:text-gray-900 transition duration-300"
            >
              <path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewNote;
