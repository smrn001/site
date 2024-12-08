import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import { name, description, resume, social } from "./portfolio";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20 sm:mt-5 mb-24 px-5">
      <h1 className="text-5xl sm:text-6xl dark:text-darktext text-text font-extrabold mt-10 mb-5 font-[poppins] text-center">
        Hi, I am{" "}
        <span className="text-lightprimary dark:text-primary">{name}</span>
      </h1>
      <div className="dark:text-gray-100 text-gray-900  text-xl sm:text-2xl pb-3 mb-1 max-w-xl text-center mx-auto">
        {description}
      </div>
      <div className="flex flex-col sm:flex-row justify-between md:justify-center items-center sm:items-start text-lighttext space-y-5 sm:space-y-0 sm:space-x-6 w-full">
        {/* Resume Button */}
        <button
          type="button"
          className="border-2 text-lightprimary dark:text-primary dark:border-primary border-lightprimary rounded-sm p-3 min-w-32 text-center bg-transparent relative overflow-hidden hover:text-white dark:hover:text-white transition-colors hover:z-[2] duration-300 group font-bold cursor-pointer"
        >
          <a target="_blank" rel="noopener noreferrer" href={resume}>
            Resume
          </a>
          <span
            aria-hidden="true"
            className="bg-lightprimary dark:bg-primary absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-[-1]"
          ></span>
        </button>

        {/* Social Media Links */}
        <div className="flex flex-row space-x-6 py-3 sm:space-y-0 sm:flex-row sm:items-center sm:justify-center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={social.github}
            className="hover:text-lightprimary dark:hover:text-primary relative dark:after:bg-primary after:bg-lightprimary dark:text-gray-100 text-gray-900 after:absolute after:h-1 after:w-0 after:-bottom-3 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
          >
            <GitHubIcon fontSize="large" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={social.linkedin}
            className="hover:text-lightprimary dark:hover:text-primary relative dark:after:bg-primary after:bg-lightprimary dark:text-gray-100 text-gray-900 after:absolute after:h-1 after:w-0 after:-bottom-3 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
          >
            <LinkedInIcon fontSize="large" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={social.Facebook}
            className="hover:text-lightprimary dark:hover:text-primary relative dark:after:bg-primary after:bg-lightprimary dark:text-gray-100 text-gray-900 after:absolute after:h-1 after:w-0 after:-bottom-3 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
          >
            <FacebookIcon fontSize="large" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
