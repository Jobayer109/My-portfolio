import React from "react";

const Banner = () => {
  return (
    <section
      className=" md:my-10 lg:mt-16 lg:mb-24 xl:mb-24 px-6 md:px-18 lg:px-36 xl:px-36"
      data-aos="fade-left"
    >
      <div className="container ">
        <div className=" py-16 rounded-md w-full  ">
          <span className="block text-2xl font-bold mb-2 dark:text-yellow-600 font-mono text-center sm:text-end md:text-end lg:text-end">
            Hi, This is
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-400 text-center md:text-end lg:text-end sm:text-end">
            Jobayer Ahmed
          </h1>
          <h3 className="text-2xl md:text-2xl lg:text-3xl font-bold text-gray-500 my-4 text-center md:text-end lg:text-end sm:text-end">
            Front-end Web Developer
          </h3>
          {/* <p className="text-md font-thin text-gray-400 text-center sm:text-end md:text-end lg:text-end ">
            I am a Front-End Developer specializing in building React js
            Applications. I have created some fancy, user friendly, productive
            and responsive websites.
          </p> */}
          <div className="text-center sm:text-end md:text-end lg:text-end">
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1nBkeTJN9EigWmvlvZkQruZLApHw4re4J/view?usp=sharing"
              rel="noreferrer"
            >
              <button
                className="border  mt-6 px-8 py-2 border-amber-400 hover:bg-yellow-700 hover:text-white  transition  duration-300 ease-in-out"
                data-aos="fade-up"
              >
                Download Resume
              </button>
            </a>
          </div>
        </div>
        {/* <div>
          <Footer />
        </div> */}
      </div>
    </section>
  );
};

export default Banner;
