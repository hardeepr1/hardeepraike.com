import React from "react";

interface TagProps {
  children: React.ReactNode;
}

const Tag: React.FC<TagProps> = ({ children }) => (
  <span className="inline-block bg-gray-800 text-gray-100 text-xs font-semibold mr-2 mb-2 px-3 py-1 rounded-md border border-gray-700">
    {children}
  </span>
);

export default Tag;
