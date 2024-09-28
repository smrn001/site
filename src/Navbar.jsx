import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { logo, navlist } from "./portfolio";
import Theme from "./Theme";

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
        block: "start", // Scroll to the top of the section
      });
    }
  };

  return (
    <div className="flex flex-row justify-between px-6 py-4 md:px-20 md:py-8 lg:px-40 lg:py-12 bg-white dark:bg-[#181818] shadow-md">
      {/* Logo Section */}
      <div>
        <div className="text-xl md:text-2xl relative font-extrabold text-lightprimary dark:text-primary dark:after:bg-primary after:bg-lightprimary after:absolute after:h-1 after:w-0 after:-bottom-1 md:after:-bottom-3 after:left-0 hover:after:w-full after:transition-all after:duration-400 cursor-pointer">
          {logo}
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-row justify-between md:w-2/3 lg:w-1/3 text-gray-900 dark:text-gray-100 text-sm md:text-md font-semibold items-center">
        {navlist.map((item, index) => (
          <button
            key={index}
            className="hover:text-lightprimary dark:hover:text-primary relative dark:after:bg-primary after:bg-lightprimary  after:absolute after:h-1 after:w-0 after:-bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer active:scale-95 transition transform duration-1000"
            onClick={() => scrollToSection(item.link)}
          >
            {item.name}
          </button>
        ))}
        <Theme />
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden flex items-center flex-row space-x-2">
        <Theme />
        <button
          className="text-gray-900 dark:text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <MenuIcon />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-[#1f1f1f] text-gray-900 dark:text-gray-100 flex flex-col items-center md:hidden">
          {navlist.map((item, index) => (
            <button
              key={index}
              className="py-2 hover:text-primary dark:hover:text-primary cursor-pointer active:scale-95 transition transform duration-150"
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