import { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center relative z-50">
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="w-9 h-9 rounded-full bg-white p-1 object-contain" />

        <span className="text-xl font-bold">TypeMaster</span>
      </div>

     
      <div className="flex flex-col gap-[4px] cursor-pointer md:hidden" onClick={toggleMobileMenu}>
        <span className="w-6 h-[3px] bg-white rounded-sm"></span>
        <span className="w-6 h-[3px] bg-white rounded-sm"></span>
        <span className="w-6 h-[3px] bg-white rounded-sm"></span>
      </div>

      
      <ul className="hidden md:flex gap-6 font-medium">
        <li><Link to="/" className="hover:text-indigo-500 transition-colors">Home</Link></li>
        <li><Link to="/test" className="hover:text-indigo-500 transition-colors">Test</Link></li>
        <li><Link to="/result" className="hover:text-indigo-500 transition-colors">Result</Link></li>
        
      </ul>

      <ul className={`flex flex-col absolute top-full left-0 w-full bg-gray-900 px-6 py-4 md:hidden transition-all duration-300 ${isOpen ? 'flex' : 'hidden'}`}>
        <li><Link to="/" onClick={toggleMobileMenu} className="py-2 hover:text-indigo-400">Home</Link></li>
        <li><Link to="/test" onClick={toggleMobileMenu} className="py-2 hover:text-indigo-400">Test</Link></li>
        <li><Link to="/result" onClick={toggleMobileMenu} className="py-2 hover:text-indigo-400">Result</Link></li>
        <li><Link to="/about" onClick={toggleMobileMenu} className="py-2 hover:text-indigo-400">About</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
