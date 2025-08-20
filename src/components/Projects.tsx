import React from "react";

const Projects: React.FC = () => (
  <section className="py-12 max-w-2xl mx-auto" id="projects">
    <h2 className="text-2xl font-semibold mb-4">Projects</h2>
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-md shadow border border-gray-200">
        <h3 className="text-xl font-bold mb-2">Podcast streaming App</h3>
        <p className="mb-2">This Web application allows users add, delete and stream podcasts. To make it scalable logically partitioned the database and stored media data in the cloud storage while metadata for podcasts is stored NoSQL database. Used React-Redux, Node.js, Express and MongoDB.</p>
        <div className="flex space-x-4">
              <a href="https://github.com/hardeepr1/podcast-streaming-app" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black underline font-medium">Source Code</a>
        </div>
      </div>
      <div className="bg-white p-6 rounded-md shadow border border-gray-200">
        <h3 className="text-xl font-bold mb-2">URL Shortener service</h3>
        <p className="mb-2">A URL shortener service built with Java Spring Boot and Spring Data JPA. It generates short, shareable links for long URLs, supports custom aliases, and ensures fast redirection. The API features distributed caching, rate limiting, and efficient data management for scalability and reliability.</p>
        <div className="flex space-x-4">
              <a href="https://github.com/hardeepr1/url-shortener-service" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black underline font-medium">Source Code</a>
            </div>
      </div>
    </div>
  </section>
);

export default Projects;
