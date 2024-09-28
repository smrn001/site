import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { logo, navlist } from "./portfolio";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth", // Smooth scroll
        block: "start",     // Scroll to the top of the section
      });
    }
  };

  return (
    <div className="flex flex-row justify-between px-6 py-4 md:px-20 md:py-8 lg:px-40 lg:py-12">
      {/* Logo Section */}
      <div>
        <div className="text-xl md:text-2xl relative font-extrabold text-primary after:bg-primary after:absolute after:h-1 after:w-0 after:-bottom-2 md:after:-bottom-3 after:left-0 hover:after:w-full after:transition-all after:duration-400 cursor-pointer">
          {logo}
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-row justify-between md:w-2/3 lg:w-1/3 text-white text-sm md:text-md font-semibold">
        {navlist.map((item, index) => (
          <button
            key={index}
            className="hover:text-primary relative after:bg-primary after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer active:scale-95 transition transform duration-1000"
            onClick={() => scrollToSection(item.link)}
          >
            {item.name}
          </button>
        ))}
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden flex items-center">
        <button className="text-primary focus:outline-none" onClick={toggleMenu}>
          <MenuIcon />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-bg text-white flex flex-col items-center md:hidden">
          {navlist.map((item, index) => (
            <button
              key={index}
              className="py-2 hover:text-primary cursor-pointer active:scale-95 transition transform duration-150"
              onClick={() => {
                scrollToSection(item.link);
                setIsMenuOpen(false); // Close menu after click
              }}
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;