// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav style={styles.navbar}>
//       <div style={styles.logo}>TypeMaster</div>
//       <ul style={styles.navLinks}>
//         <li><Link to="/" style={styles.link}>Home</Link></li>
//         <li><Link to="/test" style={styles.link}>Typing Test</Link></li>
//         <li><Link to="/result" style={styles.link}>Result</Link></li>
//       </ul>
//     </nav>
//   );
// };

// const styles = {
//   navbar: {
//     backgroundColor: '#222',
//     padding: '1rem 2rem',
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   logo: {
//     color: '#fff',
//     fontSize: '1.5rem',
//     fontWeight: 'bold',
//   },
//   navLinks: {
//     listStyle: 'none',
//     display: 'flex',
//     gap: '1.5rem',
//     margin: 0,
//     padding: 0,
//   },
//   link: {
//     color: '#fff',
//     textDecoration: 'none',
//     fontWeight: 500,
//   },
// };

// export default Navbar;
import { useState } from "react";
import { Link } from "react-router-dom";
// import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="/logo.png" alt="Logo" className="navbar-logo" />
        <span className="brand-text">TypeMaster</span>
      </div>

      <div className="hamburger" onClick={toggleMobileMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className="desktop-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/test">Test</Link></li>
        <li><Link to="/result">Result</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>

      <ul className={`mobile-menu ${isOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={toggleMobileMenu}>Home</Link></li>
        <li><Link to="/test" onClick={toggleMobileMenu}>Test</Link></li>
        <li><Link to="/result" onClick={toggleMobileMenu}>Result</Link></li>
        <li><Link to="/about" onClick={toggleMobileMenu}>About</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
