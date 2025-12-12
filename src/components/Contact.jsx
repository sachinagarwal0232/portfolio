import React from 'react'
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-slate-900 py-16 px-6 sm:px-10 md:px-20 text-gray-100 text-center"
    >
      <h2 className="text-4xl font-bold text-cyan-400 mb-6">Contact Me</h2>
      <p className="text-gray-400 mb-8">
        Interested in working together? Let’s connect!
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-6">

        {/* Email */}
        <a
          href="mailto:sachinmittal0232@gmail.com"
          className="flex items-center gap-3 px-6 py-3 bg-cyan-500 text-black rounded-full 
                     hover:bg-cyan-400 shadow-[0_0_10px_#00f5d4] transition-all"
        >
          <FaEnvelope size={20} /> Email
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/sachin-mittal-b3367a269"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-6 py-3 bg-blue-500 text-white rounded-full 
                     hover:bg-blue-400 shadow-[0_0_10px_#00aaff] transition-all"
        >
          <FaLinkedin size={20} /> LinkedIn
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/sachinagarwal0232"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-6 py-3 bg-gray-800 text-white rounded-full 
                     hover:bg-gray-700 shadow-[0_0_10px_#ffffff55] transition-all"
        >
          <FaGithub size={20} /> GitHub
        </a>

      </div>
    </section>
  );
};

export default Contact;
