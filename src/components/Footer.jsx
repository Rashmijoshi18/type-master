// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-gray-400 py-6 px-4 mt-auto">
//       <div className="max-w-6xl mx-auto text-center">
//         <p className="text-sm mb-3">
//           © {new Date().getFullYear()} TypeMaster. All rights reserved.
//         </p>
//         <div className="flex justify-center gap-6 text-sm">
//           <a href="/" className="hover:text-white transition">Home</a>
//           <a href="/test" className="hover:text-white transition">Test</a>
//           <a href="/result" className="hover:text-white transition">Result</a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 px-4 mt-0">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Logo & Name */}
        <div>
          <h2 className="text-white text-xl font-bold mb-3">TypeMaster</h2>
          <p className="text-sm text-gray-400">
            Practice. Progress. Perfect your typing speed and accuracy.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/test" className="hover:text-white transition">Test</a></li>
            <li><a href="/result" className="hover:text-white transition">Result</a></li>
          </ul>
        </div>

        {/* Social + Contact */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">Connect</h3>
          <div className="flex justify-center md:justify-start gap-5 mb-4">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition text-xl">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition text-xl">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition text-xl">
              <FaTwitter />
            </a>
          </div>
          <p className="text-sm text-gray-400">Contact: support@typemaster.com</p>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-10 text-center text-sm border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} <span className="text-white font-medium">TypeMaster</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
