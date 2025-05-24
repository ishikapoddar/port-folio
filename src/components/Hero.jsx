import React from 'react';
import {ReactTyped} from 'react-typed';

function Hero() {
  return (
    <section
      className="relative flex flex-col md:flex-row h-screen items-center justify-center bg-cover bg-center"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left text-orange-500 p-6">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
          Hi, I'm <span className="text-white">Ishika Poddar</span>
        </h1>
        <p className="text-xl text-orange-300 mb-4">
          <ReactTyped
            strings={[
              'A passionate Software Developer who loves building cool stuff.',
              'BTech Graduate.',
              'Competitive Programmer.',
              'Blockchain Enthusiast.',
            ]}
            typeSpeed={50}
            backSpeed={40}
            loop
          />
        </p>

        {/* Call to Action */}
        <a
          href="/resume.pdf"
          download
          className="mt-6 inline-block bg-orange-600 text-white px-6 py-3 rounded-lg shadow hover:bg-white transition"
        >
          📄 Download Resume
        </a>
      </div>

      {/* Profile Image */}
      

      {/* Decorative Wave */}
      <div className="absolute bottom-0 w-full">
        <svg viewBox="0 0 1440 320">
        <defs>
      <linearGradient id="waveGradient" x1="1" y1="0" x2="0" y2="0">
        <stop offset="0%" stopColor="rgb(27,20,41)" />
        <stop offset="100%" stopColor="rgb(20,15,35)" />
      </linearGradient>
    </defs>
          <path
            fill="url(#waveGradient)"
            fillOpacity="1"
            d="M0,96L60,112C120,128,240,160,360,176C480,192,600,192,720,170.7C840,149,960,107,1080,90.7C1200,75,1320,85,1380,90.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}

export default Hero;
