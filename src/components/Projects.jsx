import React from 'react';
import { FaPython, FaJsSquare, FaNodeJs } from 'react-icons/fa';
import { SiFlask, SiTensorflow, SiKeras, SiOpencv, SiDialogflow } from 'react-icons/si';

// Datos de ejemplo para los proyectos relacionados con IA y Software
const projectsData = [
  {
    id: 1,
    title: 'Sistema de Recomendación de Películas',
    description: 'Desarrollé un sistema de recomendación utilizando técnicas de filtrado colaborativo y aprendizaje automático para sugerir películas a los usuarios basadas en sus preferencias.',
    image: './src/assets/sistema.jpg', // Cambia esto a la ruta correcta
    technologies: [<FaPython />, <SiFlask />, <SiTensorflow />],
    liveLink: 'https://ejemplo.com/recomendacion-peliculas',
    repoLink: 'https://github.com/usuario/sistema-recomendacion',
  },
  {
    id: 2,
    title: 'Chatbot Inteligente',
    description: 'Implementé un chatbot que utiliza procesamiento de lenguaje natural (NLP) para interactuar con los usuarios y responder preguntas comunes sobre servicios.',
    image: './src/assets/chatbot.jpg', // Cambia esto a la ruta correcta
    technologies: [<FaJsSquare />, <FaNodeJs />, <SiDialogflow />],
    liveLink: 'https://ejemplo.com/chatbot',
    repoLink: 'https://github.com/usuario/chatbot-inteligente',
  },
  {
    id: 3,
    title: 'Clasificador de Imágenes con Deep Learning',
    description: 'Creé un clasificador de imágenes que utiliza redes neuronales convolucionales (CNN) para identificar y clasificar imágenes en diferentes categorías.',
    image: './src/assets/deep.jpg', // Cambia esto a la ruta correcta
    technologies: [<FaPython />, <SiKeras />, <SiOpencv />],
    liveLink: 'https://ejemplo.com/clasificador-imagenes',
    repoLink: 'https://github.com/usuario/clasificador-imagenes',
  },
];

function Projects() {
  return (
    <section id="projects" className="py-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Mis Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map(project => (
            <div key={project.id} className="rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4 bg-white">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap mb-4">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="text-gray-700 mr-2 flex items-center">
                      {tech} {/* Aquí se mostrarán los iconos */}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                  >
                    Ver en Vivo
                  </a>
                  <a 
                    href={project.repoLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300"
                  >
                    Ver Repositorio
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
