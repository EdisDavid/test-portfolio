import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
import Contact from '../components/Contact';
import About from '../components/About';
import Projects from '../components/Projects';
import myPhoto from '../assets/profile.png';

function Home() {
  return (
    <div>
      <section id="home" className="hero p-12 mt-16 flex justify-center">
        <div className="rounded-lg p-8 flex flex-col md:flex-row items-center max-w-5xl mx-auto">
          <div className="md:w-1/2 text-left">
            <h1 className="text-4xl font-bold">
              Hey, soy <span className="text-active">David</span>
            </h1>
            <h2 className="text-xl mt-2">
              <span className="text-active">+1 año de experiencia.</span> Ingeniero de Software en formación con especialización en 
              <span className="text-active"> Inteligencia Artificial</span>, apasionado por la 
              <span className="text-active"> programación</span> y el desarrollo de 
              <span className="text-active"> aplicaciones innovadoras</span>.
            </h2>
            <div className="mt-12 flex justify-center md:justify-start">
              <a 
                href="mailto:tuemail@example.com" 
                className="button inline-flex items-center rounded-full px-4 py-1 mr-4 border border-gray-300 transition duration-300"
                aria-label="Contáctame"
              >
                <FaEnvelope className="mr-2 text-icon" />
                <span>Contáctame</span>
              </a>
              <a 
                href="https://linkedin.com/in/tuperfil" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="button inline-flex items-center rounded-full px-4 py-1 border border-gray-300 transition duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="mr-2 text-icon" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img 
              src={myPhoto} 
              alt="David" 
              className="max-w-xs h-auto mx-auto" 
            />
          </div>
        </div>
      </section>
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default Home;
