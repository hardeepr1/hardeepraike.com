import React from "react";

const Contact: React.FC = () => (
  <section className="py-8 max-w-2xl mx-auto" id="contact">
    <h2 className="text-xl font-semibold mb-2 text-gray-400 text-center">Contact</h2>
    <div className="flex flex-col items-center text-sm text-gray-400">
      <p className="mb-1">
        <span className="font-normal">Email:</span> <a href="mailto:hardeeprai234@gmail.com" className="text-blue-400 hover:underline">hardeeprai234@gmail.com</a>
      </p>
    </div>
  </section>
);

export default Contact;
