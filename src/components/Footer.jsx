import React from 'react';
import { Twitter, Instagram, Facebook, Github } from 'lucide-react';

const Footer = ({ isDarkMode }) => {
  return (
    <footer className="w-full py-4 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:justify-between mb-4">
        <div className="social-login-icons flex justify-center items-center gap-3">
          <a href="https://twitter.com/David" target="_blank" rel="noopener noreferrer" className="socialcontainer h-16 overflow-hidden">
            <div className="social-icon-1-1 w-[40px] h-[40px] flex items-center justify-center rounded-full mt-4">
              <Twitter className={`w-5 h-5 ${isDarkMode ? 'text-white' : 'text-color-light'}`} />
            </div>
            <div className="social-icon-1 w-[40px] h-[40px] flex items-center justify-center rounded-full mt-4 bg-cyan-500">
              <Twitter className={`w-5 h-5 ${isDarkMode ? 'text-white opacity-0' : 'text-color-light opacity-0'}`} />
            </div>
          </a>

          <a href="https://instagram.com/David" target="_blank" rel="noopener noreferrer" className="socialcontainer h-16 overflow-hidden">
            <div className="social-icon-2-2 w-[40px] h-[40px] flex items-center justify-center rounded-full mt-4">
              <Instagram className={`w-5 h-5 ${isDarkMode ? 'text-white' : 'text-color-light'}`} />
            </div>
            <div className="social-icon-2 w-[40px] h-[40px] flex items-center justify-center rounded-full mt-4">
              <Instagram className={`w-5 h-5 ${isDarkMode ? 'text-white opacity-0' : 'text-color-light opacity-0'}`} />
            </div>
          </a>

          <a href="https://facebook.com/David" target="_blank" rel="noopener noreferrer" className="socialcontainer h-16 overflow-hidden">
            <div className="social-icon-3-3 w-[40px] h-[40px] flex items-center justify-center rounded-full mt-4">
              <Facebook className={`w-5 h-5 ${isDarkMode ? 'text-white' : 'text-color-light'}`} />
            </div>
            <div className="social-icon-3 w-[40px] h-[40px] flex items-center justify-center rounded-full mt-4">
              <Facebook className={`w-5 h-5 ${isDarkMode ? 'text-white opacity-0' : 'text-color-light opacity-0'}`} />
            </div>
          </a>

          <a href="https://github.com/David" target="_blank" rel="noopener noreferrer" className="socialcontainer h-16 overflow-hidden">
            <div className="social-icon-4-4 w-[40px] h-[40px] flex items-center justify-center rounded-full mt-4">
              <Github className={`w-5 h-5 ${isDarkMode ? 'text-white' : 'text-color-light'}`} />
            </div>
            <div className="social-icon-4 w-[40px] h-[40px] flex items-center justify-center rounded-full mt-4">
              <Github className={`w-5 h-5 ${isDarkMode ? 'text-white opacity-0' : 'text-color-light opacity-0'}`} />
            </div>
          </a>
        </div>

        <div className="text-gray-600 mt-4 md:mt-0 text-center">
          © {new Date().getFullYear()} Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
