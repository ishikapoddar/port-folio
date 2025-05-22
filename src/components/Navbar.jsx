import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full shadow z-50">
      <div className="max-w-7xl mx-auto px-6 flex justify-center items-center h-16">
        {/* <div className="text-2xl font-bold text-indigo-600">[Your Name]</div> */}
        <div className="hidden md:flex space-x-8">
          {menuItems.map((item, index) => (
            <a key={index} href={item.href} className="text-white hover:text-orange-500 font-medium">
              {item.label}
            </a>
          ))}
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-2xl text-gray-700">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 pb-4">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block py-2 text-gray-700 font-medium hover:text-orange-500"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
