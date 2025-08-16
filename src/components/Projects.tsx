import React from "react";

const Projects: React.FC = () => (
  <section className="py-12 bg-gray-100" id="projects">
    <h2 className="text-2xl font-semibold mb-4 text-center">Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      <div className="bg-white p-6 rounded shadow">
        <h3 className="text-xl font-bold mb-2">Project Title</h3>
        <p className="mb-2">Short project description goes here.</p>
        <a href="#" className="text-blue-600 hover:underline">View Details</a>
      </div>
      <div className="bg-white p-6 rounded shadow">
        <h3 className="text-xl font-bold mb-2">Project Title 2</h3>
        <p className="mb-2">Short project description goes here.</p>
        <a href="#" className="text-blue-600 hover:underline">View Details</a>
      </div>
    </div>
  </section>
);

export default Projects;
