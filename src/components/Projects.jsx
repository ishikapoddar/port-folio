// import React from 'react';

// function Projects() {
//   const projects = [
//     {
//       title: "Medichain",
//       description: "MediChain provides a user-friendly interface for patients and healthcare providers to manage medical records. The system allows patients to securely store their medical records, control access permissions, and view the audit trail. Healthcare providers can request access to patient records, view authorized records, and make necessary updates.",
//       link: "https://github.com/anj20/MediChain",
//     },
//     {
//       title: "Finance Tracker",
//       description: "This is a web application designed to assist users in effectively tracking their income and expenses. The Finance Tracker website contains tools for managing financial transactions, classifying income and expenses, and generating reports.",
//       link: "https://github.com/anj20/Finance_Tracker",
//     },
//     {
//         title: "Project Phoenix",
//         description: "This is a web application designed to assist competitive programmers in effectively tracking their progress. Contains resources to refer and calender that shows details of upcoming contests. A chatroom where the users can interact with each other.",
//         link: "https://github.com/Manmohan63/Project-Phoenix",
//       },
//   ];

//   return (
//     <section className="py-20 px-6">
//       <h2 className="text-3xl text-white font-bold mb-10 text-center">Projects</h2>
//       <div className="grid text-orange-500 gap-8 md:grid-cols-2">
//         {projects.map((project, index) => (
//           <div key={index} className="p-6 border rounded-lg shadow">
//             <h3 className="text-xl text-white font-semibold mb-2">{project.title}</h3>
//             <p className="mb-4">{project.description}</p>
//             <a href={project.link} className="text-blue-500 font-medium">View Project →</a>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Projects;
import React from 'react';

function Projects() {
  const projects = [
    {
      title: "Medichain",
      description:
        "MediChain provides a user-friendly interface for patients and healthcare providers to manage medical records. The system allows patients to securely store their medical records, control access permissions, and view the audit trail. Healthcare providers can request access to patient records, view authorized records, and make necessary updates.",
      link: "https://github.com/anj20/MediChain",
      image: "/images/medichain.png",
    },
    {
      title: "Finance Tracker",
      description:
        "This is a web application designed to assist users in effectively tracking their income and expenses. The Finance Tracker website contains tools for managing financial transactions, classifying income and expenses, and generating reports.",
      link: "https://github.com/anj20/Finance_Tracker",
      image: "/images/finance.png",
    },
    {
      title: "Project Phoenix",
      description:
        "This is a web application designed to assist competitive programmers in effectively tracking their progress. Contains resources to refer and calender that shows details of upcoming contests. A chatroom where the users can interact with each other.",
      link: "https://github.com/Manmohan63/Project-Phoenix",
      image: "/images/phoenix.png",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <h2 className="text-4xl text-white font-bold mb-12 text-center">Projects</h2>
      <div className="grid gap-10 md:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden shadow-lg group"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-50 transition duration-300"
              style={{ backgroundImage: `url(${project.image})` }}
            ></div>

            {/* Overlay Content */}
            <div className="relative p-6 text-white h-64 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl text-orange-400 font-bold mb-2">{project.title}</h3>
                <p className="text-sm">{project.description}</p>
              </div>
              <a
                href={project.link} className="text-white font-medium">View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

