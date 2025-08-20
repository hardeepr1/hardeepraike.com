import * as React from "react";

const Footer: React.FC = () => (
  <footer className="w-full bg-black py-4">
    <div className="text-center text-gray-400 text-sm">
      © {new Date().getFullYear()} Hardeep Raike &bull; All Rights Reserved
    </div>
  </footer>
);

export default Footer;
