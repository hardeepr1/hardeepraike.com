import React from "react";

const Hero: React.FC = () => (
  <section className="pt-16 text-center" id="hero">
    <img
      src="/hardeep.jpg"
      alt="Profile"
      className="w-40 h-40 rounded-full object-cover object-top border-4 border-blue-200 shadow mb-4 mx-auto transition-transform duration-300 ease-in-out hover:scale-110"
    />
    <h1 className="text-4xl font-extrabold mb-4 inline-block text-black bg-gradient-to-r from-gray-100 to-gray-200 px-6 py-2 border-l-8 border-blue-500 shadow-md rounded-l-lg">
      Hi, I&apos;m Hardeep!
    </h1>
    <p className="py-8 max-w-2xl mx-auto mb-2">I’m a software engineer who loves turning complex problems into simple, elegant solutions. My focus is on building reliable, scalable web applications that make a real impact.</p>
  </section>
);

export default Hero;
