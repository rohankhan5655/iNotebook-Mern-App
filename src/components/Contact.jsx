import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    const contactData = {
      name,
      email,
      message,
    };

    try {
      const response = await fetch('http://localhost:3000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        
        },
        body: JSON.stringify(contactData),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        // Reset the form fields
        setName('');
        setEmail('');
        setMessage('');
      } else {
        const errorData = await response.json();
        console.error('Error data:', errorData); // Log error response for debugging
        alert('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <section className="text-gray-600 body-font animate__animated animate__slideInUp mt-[35px]">
      <div className="container flex flex-col md:flex-row lg:max-w-5xl w-full px-5 py-12 md:py-24 mx-auto section" id="contact-form">
        <div className="md:w-1/3 w-full">
          <h1 className="text-4xl text-blue-600 sm:text-4xl font-bold title-font mb-4">Contact Me</h1>
          <p className="leading-relaxed text-xl text-gray-600">
            If you like my project or notice any bugs and want to suggest more features, please contact me.
          </p>
          <p className="leading-relaxed text-xl text-blue-600 mt-8 font-bold">Connect with me on social media:</p>
          <span className="inline-flex mt-6 justify-center sm:justify-start">
            {/* LinkedIn Icon */}
            <a className="text-gray-500 hover:text-gray-900" target="_blank" href="https://www.linkedin.com/in/muhammad-rohan-khan-505467284/" rel="noopener noreferrer">
              {/* LinkedIn SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            {/* GitHub Icon */}
            <a className="ml-3 text-gray-500 hover:text-gray-900" href="https://github.com/rohankhan5655" target="_blank" rel="noopener noreferrer">
              {/* GitHub SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
              </svg>
            </a>
          </span>
        </div>
        <div className="md:w-2/3 w-full mt-10 md:mt-0 md:pl-28">
          <h1 className="text-4xl text-blue-600 sm:text-4xl font-bold title-font mb-4">Contact Form</h1>
          <form onSubmit={handleSubmit} method="post" id="submit-contact-form">
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="name" className="leading-7 py-4 text-lg text-gray-900">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={name}
                  placeholder='Enter your name here'
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="email" className="leading-7 py-4 text-lg text-gray-900">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={email}
                  placeholder='example@gmail.com'
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="message" className="leading-7 py-4 text-lg text-gray-900">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={message}
                  placeholder='Your Message'
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-900 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <button
                type="submit"
                className="flex text-white hover:bg-gray-900 border-0 py-4 px-6 focus:outline-none bg-blue-900 rounded text-xl font-bold shadow-lg mx-0 flex-col text-center g-recaptcha"
              >
                Send Message ✉
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
