import React, { useState, useEffect } from 'react';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';

function Navbar() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  });

  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    localStorage.setItem('theme', theme);
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.5 });

    sections.forEach(section => observer.observe(section));
    return () => sections.forEach(section => observer.unobserve(section));
  }, []);

  return (
    <nav className="navbar fixed top-4 left-1/2 transform -translate-x-1/2 z-10 rounded-full bg-navbar-bg shadow-md">
      <div className="flex justify-center items-center space-x-6 px-8 py-2 rounded-full backdrop-blur-md">
        {[
          { label: 'Inicio', link: 'home' },
          { label: 'Proyectos', link: 'projects' },
          { label: 'Sobre Mí', link: 'about' },
          { label: 'Contacto', link: 'contact' }
        ].map(({ label, link }) => (
          <a
            key={link}
            href={`#${link}`}
            aria-current={activeSection === link ? 'page' : undefined}
            className={`nav-link font-semibold ${activeSection === link ? 'text-active' : 'text-inactive'}`}
          >
            {label}
          </a>
        ))}
        <span onClick={toggleTheme} className="cursor-pointer text-xl text-icon">
          {theme === 'dark' ? <BsFillSunFill /> : <BsFillMoonFill />}
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
