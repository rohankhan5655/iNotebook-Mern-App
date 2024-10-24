import React, { useEffect, useRef } from 'react';
import image from "./Man thinking.jpg";
import { useSpring, animated } from '@react-spring/web';
import Developer from './Developer';
import { Link } from 'react-router-dom';
import MoreProjects from './MoreProjects';

const Home = () => {
  const featureSectionRef = useRef(null);
  const developerSectionRef = useRef(null);
  const [featureStyles, featureApi] = useSpring(() => ({ opacity: 0, transform: 'translateY(20px)' }));
  const [developerStyles, developerApi] = useSpring(() => ({ opacity: 0, transform: 'translateY(20px)' }));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          featureApi.start({ opacity: 1, transform: 'translateY(0px)' });
        }
      },
      { threshold: 0.1 }
    );

    const developerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          developerApi.start({ opacity: 1, transform: 'translateY(0px)' });
        }
      },
      { threshold: 0.1 }
    );

    if (featureSectionRef.current) {
      observer.observe(featureSectionRef.current);
    }

    if (developerSectionRef.current) {
      developerObserver.observe(developerSectionRef.current);
    }

    return () => {
      if (featureSectionRef.current) {
        observer.unobserve(featureSectionRef.current);
      }
      if (developerSectionRef.current) {
        developerObserver.unobserve(developerSectionRef.current);
      }
    };
  }, [featureApi, developerApi]);

  return (
    <>
      <main>
        <section className="sm:mt-20 lg:mt-8 mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate__animated animate__slideInDown">
          <div className="my-10 mx-auto max-w-7xl px-4 sm:mt-25 sm:px-6 md:mt-22 lg:mt-20 lg:px-8 xl:mt-28 flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl">
                <p className="block xl:inline">Welcome to<br /><span className="block text-blue-600 xl:inline">iNotebook</span></p>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Your ultimate note-taking app that keeps your thoughts organized and accessible anywhere, anytime.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    to="/sign-up"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-700 hover:bg-blue-600 md:py-4 md:text-lg md:px-10"
                  >
                    Get started
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link
                    to="/sign-in"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-800 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                  >
                    Sign In
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4">
              <img
                className="h-56 w-full object-cover sm:h-[200px] md:h-[50vh] lg:w-full lg:h-[320px]"
                src={image}
                alt="A man is thinking"
              />
            </div>
          </div>
        </section>
        <hr />
        <animated.section
          className="py-20"
          ref={featureSectionRef}
          style={featureStyles}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Key Features of <span className='text-blue-600'>iNotebook</span> ✨</h2>
              <p className="text-gray-600 mb-12">
                iNotebook offers the tools you need to manage your notes effectively. Below are some of the key features that make iNotebook an essential application for all your note-taking needs:
              </p>
            </div>
            <div className="flex flex-wrap -mx-4 mt-12">
              <div className="w-full md:w-1/3 px-4 mb-8">
                <div className="rounded-md bg-white shadow-md p-8 transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer">
                  <div className="text-4xl font-bold text-blue-600 mb-4">01</div>
                  <h3 className="text-2xl font-bold mb-4">User Authentication</h3>
                  <p className="text-gray-600 mb-4">
                    Secure user login and registration process using JSON Web Tokens (JWT), allowing users to create personalized accounts and maintain their privacy.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-4 mb-8">
                <div className="rounded-md bg-white shadow-md p-8 transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer">
                  <div className="text-4xl font-bold text-blue-600 mb-4">02</div>
                  <h3 className="text-2xl font-bold mb-4">Note Tagging</h3>
                  <p className="text-gray-600 mb-4">
                    iNotebook provides customizable tags and categories, enabling users to efficiently organize their notes for quick access and improved productivity.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-4 mb-8">
                <div className="rounded-md bg-white shadow-md p-8 transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer">
                  <div className="text-4xl font-bold text-blue-600 mb-4">03</div>
                  <h3 className="text-2xl font-bold mb-4">Responsive Design</h3>
                  <p className="text-gray-600 mb-4">
                    A mobile-friendly interface ensures that users can access and manage their notes seamlessly across various devices, including smartphones etc.
                  </p>
                </div>
              </div>
            </div>
            <hr />
            <animated.div
              ref={developerSectionRef}
              style={developerStyles}
            >
              <Developer />
              <hr />
              <h1 className="text-2xl mt-6 font-semibold text-center text-gray-800 capitalize lg:text-3xl ">
                See My<span className="text-blue-600"> Projects</span> 💻
              </h1>
              {/* Wrap MoreProjects in a container for consistency */}
              <div className="max-w-7xl mx-auto px-4">
                <MoreProjects />
              </div>
            </animated.div>
          </div>
        </animated.section>
      </main>
    </>
  );
};

export default Home;
