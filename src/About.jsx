import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import { name, description, resume, social } from "./portfolio";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center mb-24">
      <h1 className="md:text-6xl text-5xl dark:text-gray-100 text-gray-900 font-extrabold mt-10 mb-5 font-[poppins] mx-5">
        Hi, I am <span className="text-primary">{name}</span>
      </h1>
      <div className="dark:text-gray-100 text-gray-900 text-justify text-xl pb-3 mb-1 mx-7 flex flex-col max-w-xl">
        {description}
      </div>
      <div className="flex md:flex-row flex-col justify-between text-gray-100 space-x-3 items-center content-center">
        {/* Resume Button */}
        <button
          type="button"
          className="border-2 text-primary border-primary p-3 min-w-32 text-center bg-transparent relative overflow-hidden hover:text-white transition-colors hover:z-[2] duration-300 group font-bold cursor-pointer"
        >
          <a target="none" href={resume}>
            Resume
          </a>
          <span
            aria-hidden="true"
            className="bg-primary absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-[-1]"
          ></span>
        </button>

        {/* Social Media Links */}
        <div className="flex flex-row space-x-4 py-3">
          <a
            target="none"
            href={social.github}
            className="hover:text-primary relative after:bg-primary dark:text-gray-100 text-gray-900 after:absolute after:h-1 after:w-0 after:-bottom-3 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
          >
            <GitHubIcon />
          </a>
          <a
            target="none"
            href={social.linkedin}
            className="hover:text-primary relative after:bg-primary dark:text-gray-100 text-gray-900 after:absolute after:h-1 after:w-0 after:-bottom-3 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
          >
            <LinkedInIcon />
          </a>
          <a
            target="none"
            href={social.Facebook}
            className="hover:text-primary relative after:bg-primary dark:text-gray-100 text-gray-900 after:absolute after:h-1 after:w-0 after:-bottom-3 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
          >
            <FacebookIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;