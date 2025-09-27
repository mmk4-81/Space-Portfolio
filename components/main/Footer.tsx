import React from "react";
import { FaInstagram, FaTelegram } from "react-icons/fa";
import { RxLinkedinLogo, RxGithubLogo } from "react-icons/rx";

const Footer = () => {
  return (
    <footer className="relative z-50 w-full bg-[#030014] text-gray-200 shadow-lg p-6 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Contact */}
        <div className="flex flex-col items-center md:items-start min-w-[200px]">
          <div className="font-bold text-[16px] border-b-2 border-[#2A0E61] pb-2 mb-4">
            Contact
          </div>
          <p className="text-[15px] my-2">Iran / Dezful</p>
          <p className="text-[15px] my-2">+98 916 771 6820</p>
          <p className="text-[15px] my-2">mmkkarbalaei@gmail.com</p>
          <div className="mt-4 text-[15px]">&copy; MMk 2025</div>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center md:items-start min-w-[200px]">
          <div className="font-bold text-[16px] border-b-2 border-[#2A0E61] pb-2 mb-4">
            Social Media
          </div>

          <a
            href="https://instagram.com/mmk4.official"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center my-2 cursor-pointer hover:text-[#2A0E61] transition-colors"
          >
            <FaInstagram className="mr-2" />
            Instagram
          </a>

          <a
            href="https://t.me/mmk4_81"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center my-2 cursor-pointer hover:text-[#2A0E61] transition-colors"
          >
            <FaTelegram className="mr-2" />
            Telegram
          </a>

          <a
            href="https://www.linkedin.com/in/mmkarbalaei"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center my-2 cursor-pointer hover:text-[#2A0E61] transition-colors"
          >
            <RxLinkedinLogo className="mr-2" />
            LinkedIn
          </a>

          <a
            href="https://github.com/mmk4-81"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center my-2 cursor-pointer hover:text-[#2A0E61] transition-colors"
          >
            <RxGithubLogo className="mr-2" />
            GitHub
          </a>
        </div>

        {/* About */}
        <div className="flex flex-col items-center md:items-start min-w-[200px] max-w-[300px]">
          <div className="font-bold text-[16px] border-b-2 border-[#2A0E61] pb-2 mb-4">
            About
          </div>
          <p className="text-[15px] text-justify">
            I&apos;m a Full-Stack Developer passionate about building modern web
            applications. I focus on creating user-friendly, scalable, and
            maintainable solutions, combining frontend and backend expertise.
            Let&apos;s connect and turn ideas into reality!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
