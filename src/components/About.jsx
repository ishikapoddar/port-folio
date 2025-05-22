import React from 'react';

function About() {
  return (
    <section id="about" className="px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">

        {/* Image Section */}
        <div className="flex-shrink-0">
          <img
            src="./images/ishika_photo2.png"
            alt="Ishika About"
            className="w-85 rounded-full shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center text-orange-500 max-w-xl">
          <h2 className="text-4xl font-bold mb-6 text-white">About Me</h2>
          <p className="text-lg mb-4">
            I'm a <span className="font-semibold">Software Developer</span> with a knack for
            crafting clean interfaces, solving real-world problems, and building modern web
            applications. I have completed my Btech in Computer Science and Engineering from NIT Rourkela year 2025. I was Software
            Engineering Intern at Google from May 2024 to July 2024, where I worked on developing a service that could increase efficiency
            and save time of the testers using Java and internal tools,
            and I’m passionate about learning new technologies and taking on challenging projects.
          </p>
          <p className="text-lg pb-4">
            Outside coding, I enjoy design, reading tech blogs, sketching, and exploring creative projects.
          </p>
          
        </div>

      </div>
    </section>
  );
}

export default About;
