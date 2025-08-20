
import React from "react";

const Header: React.FC = () => (
  <header className="w-full px-6 py-4 flex items-center justify-between bg-black shadow-md sticky top-0 z-50">
    <div className="flex items-center space-x-8 w-full justify-between">
      <div className="flex items-center space-x-8">
        <h1 className="text-2xl font-bold text-white tracking-tight">Hardeep Raike</h1>
      </div>
      <div className="flex items-center">
        <a
          href="https://github.com/hardeepr1"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4 inline-flex items-center text-gray-200 hover:text-white bg-gray-800 hover:bg-gray-900 rounded-lg px-3 py-2 transition-colors duration-200 shadow"
          aria-label="GitHub"
        >
          <span className="mr-1">GitHub</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .267.18.577.688.48C19.138 20.2 22 16.448 22 12.021 22 6.484 17.523 2 12 2z" />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/hardeepr1"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 inline-flex items-center text-gray-200 hover:text-white bg-gray-800 hover:bg-gray-900 rounded-lg px-3 py-2 transition-colors duration-200 shadow font-medium group"
          aria-label="LinkedIn"
        >
          <span className="mr-1">LinkedIn</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            fill="currentColor"
            className="w-4 h-4 text-gray-200 group-hover:text-white transition-colors duration-200"
          >
            <path d="M100.28 448H7.4V148.9h92.88zm-46.44-340.7C24.09 107.3 0 83.2 0 53.6A53.6 53.6 0 0 1 53.6 0a53.6 53.6 0 0 1 53.6 53.6c0 29.6-24.09 53.7-53.36 53.7zM447.8 448h-92.4V302.4c0-34.7-12.4-58.4-43.3-58.4-23.6 0-37.6 15.9-43.7 31.3-2.3 5.6-2.8 13.4-2.8 21.2V448h-92.4s1.2-241.1 0-266.1h92.4v37.7c12.3-19 34.3-46.1 83.5-46.1 60.9 0 106.6 39.8 106.6 125.4V448z" />
          </svg>
        </a>
      </div>
    </div>
  </header>
);

export default Header;
