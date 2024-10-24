import React from 'react';
import Me from "./Me.jpeg"
const Developer = () => {
  return (
    <>
      <section className="bg-white w-full ">
        <div className="container px-6 py-4 mx-auto">
          <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl ">
            Project<span className="text-blue-600"> Developed By</span> 💻
          </h1>
          <p className="max-w-2xl mx-auto my-6 text-center text-gray-500">
            Meet <b>Muhammad Rohan Khan</b>, a passionate web developer dedicated to crafting efficient and user-friendly applications.
          </p>
          <div className="w-full px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl bg-blue-600 mx-auto">
            <div className="flex flex-col sm:-mx-4 sm:flex-row">
              <img
                className="flex-shrink-0 object-cover w-24 h-24 rounded-full  sm:mx-4 ring-4 ring-gray-300"
                src={Me}
                alt="Muhammad Rohan Khan"
              />
              <div className="mt-4 sm:mx-4 sm:mt-0">
                <h1 className="text-xl font-semibold text-white capitalize md:text-2xl">
                  Muhammad Rohan Khan
                </h1>
                <p className="mt-2 text-white capitalize ">
                Frontend Web Developer
                </p>
              </div>
            </div>
            <p className="mt-4 text-white capitalize ">
              A creative and dedicated developer focused on delivering high-quality web applications with seamless user experiences, currently learning ( MERN Stack Development ). 🚀
            </p>
            <span className="inline-flex mt-6 justify-center sm:justify-start">
              {/* LinkedIn Icon */}
              <a
                className="text-gray-500 "
                target="_blank"
                href="https://www.linkedin.com/in/muhammad-rohan-khan-505467284/"
                rel="noopener noreferrer"
              >
                { /* LinkedIn SVG */ }
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fill="white"/>
</svg>

              </a>
              {/* GitHub Icon */}
              <a
                className="ml-3 text-gray-500 "
                href="https://github.com/rohankhan5655"
                target="_blank"
                rel="noopener noreferrer"
              >
                { /* GitHub SVG */ }
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" fill="white"/>
</svg>

              </a>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Developer;
