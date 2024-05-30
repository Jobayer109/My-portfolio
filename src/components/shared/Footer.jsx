import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer footer-center text-center p-6  md:mt-12 lg:mt-12 xl:mt-14  text-base-content">
      <div>
        <div className="flex items-center justify-around transition-all">
          <a
            href="https://www.linkedin.com/in/jobayer109/"
            target={"_blank"}
            rel="noreferrer"
          >
            <FaLinkedin className=" ml-6  text-2xl hover:fill-amber-400" />
          </a>
          <a
            href="https://github.com/Jobayer109"
            target={"_blank"}
            rel="noreferrer"
          >
            <FaGithub className=" ml-6 text-2xl hover:fill-amber-400" />
          </a>
          <a
            href="https://www.facebook.com/jobayer1995/"
            target={"_blank"}
            rel="noreferrer"
          >
            <FaFacebook className=" ml-6  text-2xl hover:fill-amber-400" />
          </a>
          <a href="/contact">
            <FaEnvelope className=" ml-6 text-2xl hover:fill-amber-400" />
          </a>
          <a href="/">
            <FaPhone className=" ml-6  text-2xl hover:fill-amber-400" />
          </a>
        </div>
        <p className="text-gray-400 text-[14px] ">
          Copyright © 2024 - All right reserved by Jobayer
        </p>
      </div>
    </footer>
  );
};

export default Footer;
