import React from 'react';

const About = () => {
  return (
    <div className="sm:flex items-center max-w-screen-xl mx-auto p-4 animate__animated animate__zoomIn mt-[35px]">
      {/* Left Section - Image */}
      <div className="sm:w-1/2 p-10 flex justify-center">
        <img
          src="https://i.imgur.com/WbQnbas.png"
          alt="About iNotebook"
          className="object-contain max-w-full h-auto" // Added responsive image classes
        />
      </div>

      {/* Right Section - Text Content */}
      <div className="sm:w-1/2 p-5">
        <div className="text">
          <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">
            About project
          </span>
          <h2 className="my-4 font-bold text-3xl sm:text-4xl">
            About <span className="text-blue-600">This Project</span>
          </h2>
          <p className="text-gray-700 mb-4">
            iNotebook is a modern note-taking application built on the MERN (MongoDB, Express, React, Node.js) stack. 
            It aims to provide users with a seamless and intuitive platform for organizing their thoughts, ideas, and daily tasks. 
            The application offers a user-friendly interface that simplifies the process of creating, editing, and managing notes, 
            making it an essential tool for students, professionals, and anyone looking to enhance their productivity.
          </p>
          <h2 className="text-xl font-semibold mt-4 text-gray-700 ">Key Features:</h2>
          <br/>
          <ul className="list-disc list-inside mb-4 text-gray-700 ">
            <li><strong className='font-bold'>User Authentication:</strong> Secure user login and registration, allowing users to create personalized accounts.</li>
            <li><strong className='font-bold'>Note Management:</strong> Users can create, edit, delete, and organize notes using tags for better categorization.</li>
            <li><strong className='font-bold'>Responsive Design:</strong> A mobile-friendly interface ensures users can access their notes on any device.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
