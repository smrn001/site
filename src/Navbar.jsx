import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-row justify-between px-6 py-4 md:px-20 md:py-8 lg:px-40 lg:py-12">
      {/* Logo Section */}
      <div>
        <div className="text-xl md:text-2xl relative font-extrabold text-primary after:bg-primary after:absolute after:h-1 after:w-0 after:-bottom-2 md:after:-bottom-3 after:left-0 hover:after:w-full after:transition-all after:duration-400 cursor-pointer">
          SN
        </div>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex flex-row justify-between md:w-2/3 lg:w-1/3 text-white text-sm md:text-md font-semibold">
        <p className="hover:text-primary relative after:bg-primary after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
          Projects
        </p>
        <p className="hover:text-primary relative after:bg-primary after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
          Skills
        </p>
        <p className="hover:text-primary relative after:bg-primary after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
          Contacts
        </p>
        <p className="hover:text-primary relative after:bg-primary after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
          Gallery
        </p>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden flex items-center">
        <button className="text-primary focus:outline-none" onClick={toggleMenu}>
          {/* Hamburger Icon */}
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-bg text-white flex flex-col items-center md:hidden">
          <p className="py-2 hover:text-primary cursor-pointer">Projects</p>
          <p className="py-2 hover:text-primary cursor-pointer">Skills</p>
          <p className="py-2 hover:text-primary cursor-pointer">Contacts</p>
          <p className="py-2 hover:text-primary cursor-pointer">Gallery</p>
        </div>
      )}
    </div>
  );
};

export default Navbar;