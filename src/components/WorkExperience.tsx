import React from "react";
import Tag from "./Tag";

const WorkExperience: React.FC = () => (
  <section className="py-12 max-w-2xl mx-auto" id="work-experience">
    <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold">Software Engineer</h3>
        <p className="text-gray-600">
          Optum (Change Healthcare Canada)
          <span className="mx-2 text-gray-400">|</span>
          <span className="text-sm text-gray-500">Toronto, ON</span>
          &mdash; May 2025 - Present
        </p>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li>Working on a cloud-based medical imaging solution that enables healthcare providers to securely and efficiently access diagnostic images (CT, MRI, etc.) across modalities—helping improve clinical decision-making and patient outcomes.</li>
        </ul>
        <div className="flex flex-wrap mt-2">
          <Tag>React</Tag>
          <Tag>Node.js</Tag>
          <Tag>TypeScript</Tag>
          <Tag>MongoDB</Tag>
          <Tag>Docker</Tag>
          <Tag>Cornerstone.js</Tag>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold">Full Stack Engineer</h3>
        <p className="text-gray-600">
          Questrade Financial Group
          <span className="mx-2 text-gray-400">|</span>
          <span className="text-sm text-gray-500">Toronto, ON</span>
          &mdash; July 2023 - November 2024
        </p>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li>Worked on a customer-facing insurance web application for the Personal Lines business (Home & Auto), and contributed to the development an internal InsurTech platform to streamline staff workflows across the policy lifecycle.</li>
        </ul>
        <div className="flex flex-wrap mt-2">
          <Tag>React</Tag>
          <Tag>Java</Tag>
          <Tag>Spring Boot</Tag>
          <Tag>Node.js</Tag>
          <Tag>NestJS</Tag>
          <Tag>Micro Frontends</Tag>
          <Tag>Tailwind CSS</Tag>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold">Software Engineer</h3>
        <p className="text-gray-600">
          Sandvine Corporation
          <span className="mx-2 text-gray-400">|</span>
          <span className="text-sm text-gray-500">Waterloo, ON</span>
          &mdash; March 2021 - June 2023
        </p>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li>Built real-time, high-performance dashboard solutions and web-framework to built these solutions, delivering enhanced network QoE insights through live data streaming, optimized APIs, and intelligent caching mechanisms.</li>
        </ul>
        <div className="flex flex-wrap mt-2">
          <Tag>React</Tag>
          <Tag>Java</Tag>
          <Tag>Spring Boot</Tag>
          <Tag>Node.js</Tag>
          <Tag>MySQL</Tag>
          <Tag>Redis</Tag>
          <Tag>AWS</Tag>
          <Tag>Docker</Tag>
        </div>
      </div>

            <div>
        <h3 className="text-xl font-bold">Associate Software Engineer</h3>
        <p className="text-gray-600">
          Nagarro Software Private Limited
          <span className="mx-2 text-gray-400">|</span>
          <span className="text-sm text-gray-500">Gurgaon, India</span>
          &mdash; January 2017 - August 2019
        </p>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li>Built distributed lighting control and analytics solutions, delivering faster rendering (25%), secure API gateway features, higher test coverage (55%→85%), and improved production stability.</li>
        </ul>
        <div className="flex flex-wrap mt-2">
          <Tag>React</Tag>
          <Tag>JavaScript</Tag>
          <Tag>Backbone.js</Tag>
          <Tag>Java</Tag>
          <Tag>Spring MVC</Tag>
          <Tag>Maven</Tag>
          <Tag>Mockito</Tag>
          <Tag>JUnit</Tag>
        </div>
      </div>

    </div>
  </section>
);

export default WorkExperience;
