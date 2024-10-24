import React, { useContext, useState, useEffect } from 'react';
import noteContext from '../../context/notes/noteContext';
import Generatebutton from '../Generatebutton';
import './EditNote.css';

const EditNote = ({ onClose, noteToEdit }) => {
    const context = useContext(noteContext);
    const { editNote } = context;
    const [note, setNote] = useState({ Title: "", Description: "", Tag: "" });
    const [promptText, setPromptText] = useState("");
    const [isActive, setIsActive] = useState(false);
    const [isInputVisible, setInputVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const apiKey = import.meta.env.VITE_GEMINI_API;

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;

    useEffect(() => {
        if (noteToEdit) {
            setNote({
                Title: noteToEdit.Title,
                Description: noteToEdit.Description,
                Tag: noteToEdit.Tag,
            });
        }
    }, [noteToEdit]);

    const handleClick = async (e) => {
        e.preventDefault();
        setIsLoading(true);
    
        // Validate Title, Description, and Tag before updating the note
        if (noteToEdit?._id) {
            if (note.Title.length < 5 || note.Description.length < 5 || note.Tag.length < 5) {
                alert("Title, Description, and Tag must each have at least 5 characters.");
                setIsLoading(false); // Reset loading state
                return; // Exit early if validation fails
            }
            
            await editNote(noteToEdit._id, note.Title, note.Description, note.Tag);
        }
        onClose();
        setNote({ Title: "", Description: "", Tag: "" });
        setPromptText("");
        setIsLoading(false);
    };
    
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    };

    const toggleGenerateButton = () => {
        setIsActive((prev) => !prev);
        setInputVisible((prev) => !prev);
    };
    const animateTextInput = (text) => {
        let index = 0;
        setNote((prev) => ({ ...prev, Description: text[0] || "" })); // Set first character
    
        const interval = setInterval(() => {
            index++;
            if (index < text.length) {
                setNote((prev) => ({ ...prev, Description: prev.Description + (text[index] || "") }));
            } else {
                clearInterval(interval);
            }
        }, 50); // Adjust speed by changing the delay
    };
    

    const handlePromptSubmit = async () => {
        if (!isInputVisible) {
            return; 
        }
    
        const apiKey = import.meta.env.VITE_GEMINI_API;

        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;
    
        const requestData = {
            contents: [
                {
                    parts: [
                        {
                            text: promptText,
                        },
                    ],
                },
            ],
        };
    
        console.log(JSON.stringify(requestData, null, 2)); // Log request data
    
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestData),
            });
    
            if (!response.ok) {
                const errorData = await response.json(); // Get detailed error
                throw new Error(`Error: ${response.status} ${response.statusText} - ${JSON.stringify(errorData)}`);
            }
    
            const data = await response.json();
    
            if (data.candidates && data.candidates.length > 0) {
                const generatedText = data.candidates[0].content.parts[0].text;
    
                // Generate Title and truncate if necessary
                const title = `${promptText}`; // Generate title based on the prompt
                const truncatedTitle = title.length > 35 ? title.substring(0, 35) + '...' : title;
    
                setNote((prev) => ({
                    ...prev,
                    Title: truncatedTitle, // Set the truncated title
                    Description: generatedText.replace(/[*_`~]/g, ''), // Set the description
                    Tag: "AI Generated"
                }));
                animateTextInput(generatedText.replace(/[*_`~]/g, '')); // Animate the generated description
    
            } else {
                throw new Error('No candidates returned from the API.');
            }
    
            setPromptText("");
    
        } catch (error) {
            console.error(error);
            alert('An error occurred while generating the content: ' + error.message);
        }
    };
    
    

      
    

    const handleKeyDown = async (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            await handlePromptSubmit();
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-30 backdrop-blur-md">
            <div className="relative max-w-md w-full p-6 bg-white border rounded-lg shadow-lg">
                <button
                    className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
                    onClick={onClose}
                    aria-label="Close"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <h2 className="text-2xl font-bold mb-2 font-mono">Edit Note 🗒️</h2>
                <p className='mb-2 text-red-700 font-bold'>Note: Each input must have at least 5 characters</p>

                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="editTitle">Title:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="Title"
                        type="text"
                        name="Title"
                        placeholder="Enter your title"
                        value={note.Title}
                        onChange={onChange}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="editDescription">Description:</label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="Description"
                        name="Description"
                        rows={5}
                        value={note.Description}
                        onChange={onChange}
                        placeholder="Enter your description here"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="editTag">Tag:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="Tag"
                        name="Tag"
                        type="text"
                        value={note.Tag}
                        onChange={onChange}
                        placeholder="Enter tag"
                    />
                </div>

                <div className="flex justify-between items-center">
                    <div>
                        <button
                            className={`bg-blue-500 ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'} text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
                            type="submit"
                            onClick={handleClick}
                            disabled={isLoading || note.Title.length < 5 || note.Description.length < 5 || note.Tag.length < 5}
                        >
                            {isLoading ? 'Updating...' : 'Update Note'}
                        </button>
                    </div>
                    <div className="flex gap-2 items-center">
                        {isInputVisible && (
                            <input
                                className="bg-[#222630] w-before-450 w-before-340 w-after-450 px-2 py-2 outline-none text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
                                name="promptText"
                                placeholder="Enter your prompt"
                                type="text"
                                value={promptText}
                                onChange={(e) => setPromptText(e.target.value)}
                                onKeyDown={handleKeyDown}
                            />
                        )}
                        <Generatebutton isActive={isActive} onClick={toggleGenerateButton} isInputVisible={isInputVisible} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditNote;
