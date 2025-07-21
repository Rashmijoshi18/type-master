import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 px-4 mt-auto">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm mb-3">
          © {new Date().getFullYear()} TypeMaster. All rights reserved.
        </p>
        <div className="flex justify-center gap-6 text-sm">
          <a href="/" className="hover:text-white transition">Home</a>
          <a href="/test" className="hover:text-white transition">Test</a>
          <a href="/result" className="hover:text-white transition">Result</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
