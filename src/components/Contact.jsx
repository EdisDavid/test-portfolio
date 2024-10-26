// src/components/Contact.jsx
import React from 'react';

function Contact() {
  return (
    <section id="contact" className="p-12 mt-16 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-4">Contacto</h2>
      <p className="mb-6">Si tienes alguna pregunta o quieres ponerte en contacto, ¡no dudes en escribirme!</p>
      <form className="w-full max-w-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold mb-2">Nombre</label>
          <input type="text" id="name" className="border rounded w-full py-2 px-3" required />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold mb-2">Correo Electrónico</label>
          <input type="email" id="email" className="border rounded w-full py-2 px-3" required />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-semibold mb-2">Mensaje</label>
          <textarea id="message" rows="4" className="border rounded w-full py-2 px-3" required></textarea>
        </div>
        <button type="submit" className="bg-active text-white py-2 px-4 rounded-full">
          Enviar
        </button>
      </form>
    </section>
  );
}

export default Contact;
