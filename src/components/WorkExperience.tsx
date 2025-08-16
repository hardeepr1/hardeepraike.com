import React from "react";

const WorkExperience: React.FC = () => (
  <section className="py-12 max-w-2xl mx-auto" id="work-experience">
    <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold">Software Engineer</h3>
        <p className="text-gray-600">Optum (Change Healthcare Canada) &mdash; May 2025 - Present</p>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li>Working on a cloud-based medical imaging solution that enables healthcare providers to securely and efficiently access diagnostic images (CT, MRI, etc.) across modalities—helping improve clinical decision-making and patient outcomes.</li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-bold">Full Stack Engineer</h3>
        <p className="text-gray-600">Questrade &mdash; July 2023 - November 2024</p>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li>Worked on a customer-facing insurance web application for the Personal Lines business (Home & Auto), and contributed to the development an internal InsurTech platform to streamline staff workflows across the policy lifecycle.</li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-bold">Software Engineer</h3>
        <p className="text-gray-600">Sandvine &mdash; March 2021 - June 2023</p>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li>Built real-time, high-performance dashboard solutions using React, Java Spring Boot, and Redis, delivering enhanced network QoE insights through live data streaming, optimized APIs, and intelligent caching mechanisms.</li>
        </ul>
      </div>

    </div>
  </section>
);

export default WorkExperience;
