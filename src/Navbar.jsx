import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { logo, navlist } from "./portfolio";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-row justify-between px-6 py-4 md:px-20 md:py-8 lg:px-40 lg:py-12">
      <div>
        <div className="text-xl md:text-2xl relative font-extrabold text-primary after:bg-primary after:absolute after:h-1 after:w-0 after:-bottom-2 md:after:-bottom-3 after:left-0 hover:after:w-full after:transition-all after:duration-400 cursor-pointer">
          {logo}
        </div>
      </div>

      <div className="hidden md:flex flex-row justify-between md:w-2/3 lg:w-1/3 text-white text-sm md:text-md font-semibold">
        {navlist.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="hover:text-primary relative after:bg-primary after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
          >
            {item.name}
          </a>
        ))}
      </div>

      <div className="md:hidden flex items-center">
        <button
          className="text-primary focus:outline-none"
          onClick={toggleMenu}
        >
          <MenuIcon></MenuIcon>
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-bg text-white flex flex-col items-center md:hidden">
          {navlist.map((item, index) => (
            <p
              key={index}
              className="py-2 hover:text-primary cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
