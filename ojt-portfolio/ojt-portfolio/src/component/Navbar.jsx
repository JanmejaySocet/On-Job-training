import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-4 py-3 border-b border-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Brand */}
        <Link to="/Contact" className="text-purple-400 hover:text-purple-300 transition"><h1 className="text-2xl font-bold">Janmejay Pandya</h1></Link>
        

        {/* Hamburger Icon - Mobile Only */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FaBars />
        </button>

        {/* Menu - Desktop */}
        <ul className="hidden md:flex items-center gap-6">
          <li>
            <Link to="/" className="text-purple-400 hover:text-purple-300 transition">Home</Link>
          </li>
          <li>
            <Link to="/Projects" className="text-purple-400 hover:text-purple-300 transition">Projects</Link>
          </li>
          <li>
            <Link to="/Contact" className="text-purple-400 hover:text-purple-300 transition">Contact</Link>
          </li>
          <li>
            <Link to="/Login">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition">
                Login
              </button>
            </Link>
          </li>
          <li>
            <Link to="/Signup">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition">
                Sign Up
              </button>
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4">
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-purple-400 hover:text-purple-300">Home</Link>
          <Link to="/Projects" onClick={() => setIsMenuOpen(false)} className="text-purple-400 hover:text-purple-300">Projects</Link>
          <Link to="/Contact" onClick={() => setIsMenuOpen(false)} className="text-purple-400 hover:text-purple-300">Contact</Link>
          <Link to="/Login" onClick={() => setIsMenuOpen(false)}>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg w-full text-left">
              Login
            </button>
          </Link>
          <Link to="/Signup" onClick={() => setIsMenuOpen(false)}>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg w-full text-left">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
