import React from 'react';
import newsApp from './Images/newsApp.PNG';
import robloxClone from './Images/robloxClone.PNG';
import ageCalc from './Images/ageCalc.PNG';



const MoreProjects = () => {
  return (
    <div className="flex flex-wrap justify-center gap-5 mt-5">
      {/* First Card */}
      <div className="w-auto lg:w-[350px] p-4 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out hover:cursor-pointer">
        <img
          className="w-full h-40 object-cover rounded-t-lg"
          alt="Card Image"
          src={newsApp}
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold">News-App</h2>
          <p className="text-gray-600 mt-2">
            A React News App that utilizes the News API to showcase articles in various categories for real-time updates.
          </p>
          <div className="flex justify-between items-center mt-4">
            <div className='mt-2'>
              <a
                href="https://rohankhan5655.github.io/News-App/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
              >
                View Site
              </a>
              <a
                href="https://github.com/rohankhan5655/News-App"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
              >
                View Code
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Second Card */}
      <div className="w-auto lg:w-[350px] p-4 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out hover:cursor-pointer">
        <img
          className="w-full h-40 object-cover rounded-t-lg"
          alt="Card Image"
          src={robloxClone}
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold">Roblox-Clone</h2>
          <p className="text-gray-600 mt-2">
          I created a clown character in Roblox using HTML and CSS for a fun, interactive design experience.
          </p>
          <div className="flex justify-between items-center mt-4">
            <div className='mt-2'>
              <a
                href="https://rohankhan5655.github.io/Roblox-Clone/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
              >
                View Site
              </a>
              <a
                href="https://github.com/rohankhan5655/Roblox-Clone"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
              >
                View Code
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Third Card */}
      <div className="w-auto lg:w-[350px] p-4 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out hover:cursor-pointer">
        <img
          className="w-full h-40 object-cover rounded-t-lg"
          alt="Card Image"
          src={ageCalc}
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold">News-Calculator-App</h2>
          <p className="text-gray-600 mt-2">
          A React app that calculates age from birth date input, styled with SASS and CSS for a sleek, user-friendly interface
          </p>
          <div className="flex justify-between items-center mt-4">
            <div className='mt-2'>
              <a
                href="https://rohankhan5655.github.io/Age-Calculator-App/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
              >
                View Site
              </a>
              <a
                href="https://github.com/rohankhan5655/Age-Calculator-App"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
              >
                View Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreProjects;
