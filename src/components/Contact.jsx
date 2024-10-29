// src/components/Contact.jsx
import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
  };

  return (
    <section id="contact" className="p-12 mt-16 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-4 text-center">Contacto</h2>
      <p className="mb-6 text-center text-gray-700">Si tienes alguna pregunta o quieres ponerte en contacto, ¡no dudes en escribirme!</p>
      <form className="w-full max-w-md" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-800">Nombre</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            className="border rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400" 
            value={formData.name} 
            onChange={handleChange} 
            required 
            placeholder="Tu nombre" 
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-800">Correo Electrónico</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            className="border rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400" 
            value={formData.email} 
            onChange={handleChange} 
            required 
            placeholder="tu-email@ejemplo.com" 
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-800">Mensaje</label>
          <textarea 
            id="message" 
            name="message" 
            rows="4" 
            className="border rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400" 
            value={formData.message} 
            onChange={handleChange} 
            required 
            placeholder="Escribe tu mensaje aquí..." 
          ></textarea>
        </div>
        <button 
          type="submit" 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out"
        >
          Enviar
        </button>
      </form>
    </section>
  );
}

export default Contact;
