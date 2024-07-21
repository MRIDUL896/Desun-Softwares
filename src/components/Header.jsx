"use client"
import { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="container flex justify-center bg-blue-50 p-5 w-full">
      <div className={`flex items-center justify-evenly fixed overflow-hidden bg-white z-10 w-[90%] rounded-xl shadow-xl md:h-20
        ${menuOpen ? "h-96" : "h-20"}`}>
      <img className="object-cover w-[9rem] md:w-[12rem] lg:w-[13rem] xl:w-[14rem]" src="https://s3-alpha-sig.figma.com/img/7fd8/7fd6/6706ff5bce5a4d719332ce26f46a5267?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QkV-t1MQXTlDwhcx~TtdKJbdB9~OgvhqlmuRc~EYq~yXVcXzufADYctJpgegTQHcmv8gkp0X7eNAIWsyq0vVe0fNrn6aA5gorl8SnZeetavNFyejtBjhT~iDe~Cc~CopF5MZdhPIEunZFgMM~0Eonc21A4j2SR3NtcgnzZ8~lrFZ3wGkNoWpKOgRTIGtItHfRjvJrIM~Yu-3LeAeWOIXvqaau0aNkcuHooc9RkTOOGgFVtETJ4x8NiSldHFYf4Oz7Ul5b-qFPF3iBqcs4fkhCibmZ~~-R9wSCnDl1qP0QhofgwrGEyiX2gUGYtRUC4-ymwvpnFY6ESBeRTpeoShZSA__" alt="" />
        <div className="hidden md:block">
          <ul className="flex space-x-6">
            <li><a href="#services" className="text-gray-700 hover:text-blue-600">Services</a></li>
            <li><a href="#projects" className="text-gray-700 hover:text-blue-600">Projects</a></li>
            <li><a href="#team" className="text-gray-700 hover:text-blue-600">Team</a></li>
            <li><a href="#faq" className="text-gray-700 hover:text-blue-600">FAQ</a></li>
            <li><a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a></li>
          </ul>
        </div>
        <div className="hidden md:block">
          <ul className="flex space-x-6 text-green-700">
            <li><a href=""></a></li>
            <li><a href="">+91 0000000</a></li>
            <li><a href="">demo@hmail.com</a></li>
          </ul>
        </div>
        <div className="md:hidden">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            aria-label="Toggle navigation"
            onClick={handleToggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          {menuOpen && (
            <div className="absolute top-0 left-0 w-full bg-white z-10">
              
              <ul className="flex flex-col space-y-6 p-4">
                <li>
                <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            aria-label="Toggle navigation"
            onClick={handleToggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
                </li>
                <li><a href="#services" className="text-gray-700 hover:text-blue-600">Services</a></li>
                <li><a href="#projects" className="text-gray-700 hover:text-blue-600">Projects</a></li>
                <li><a href="#team" className="text-gray-700 hover:text-blue-600">Team</a></li>
                <li><a href="#faq" className="text-gray-700 hover:text-blue-600">FAQ</a></li>
                <li><a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a></li>
              </ul>
              <ul className="flex flex-col space-y-6 p-4 text-green-700">
                <li><a href=""></a></li>
                <li><a href="">+91 0000000</a></li>
                <li><a href="">demo@hmail.com</a></li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;