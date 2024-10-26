// src/components/Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer className="bg-navbar-bg p-4 text-center mt-12">
      <p className="text-gray-600">&copy; {new Date().getFullYear()} David. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;
