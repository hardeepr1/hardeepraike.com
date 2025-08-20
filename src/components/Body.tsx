import React from "react";

const Body: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <main
    className="min-h-screen w-full px-2 sm:px-4 py-0 bg-gradient-to-b from-white via-blue-50 to-blue-100"
  >
    {children}
  </main>
);

export default Body;
