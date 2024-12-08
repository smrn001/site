import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { projects } from "./portfolio";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center my-10 px-4 md:px-0 mb-10"
      id="projects"
    >
      <h1 className="dark:text-darktext text-lighttext text-3xl md:text-4xl font-extrabold pt-10 pb-6">
        PROJECTS
      </h1>
      <div className="w-full mx-auto max-w-7xl px-2 flex flex-wrap justify-center gap-3">
        {projects.map(({ name, description, tech, code, preview }) => (
          <div
            key={name}
            className="flex flex-col items-center border max-w-[300px] dark:border-darkborder dark:hover:border-darkborderhover border-lightborder rounded-xl p-4 py-6 shadow-md hover:shadow-2xl dark:hover:shadow-darkshadow hover:shadow-lightshadow group min-h-40 bg-transparent dark:shadow-darkshadow shadow-lightshadow hover:-translate-y-1 transition duration-300"
          >
            {/* Project Name */}
            <p className="text-lg md:text-xl font-extrabold dark:text-gray-100 text-gray-900">
              {name}
            </p>

            {/* Project Description */}
            <p className="my-2 text-sm md:text-base dark:text-darktext text-lighttext text-center">
              {description}
            </p>

            {/* Tech Stack */}
            <ul className="flex flex-row justify-between space-x-2 md:space-x-4 text-sm dark:text-darktext text-lighttext">
              {tech.map((stack, index) => (
                <li key={index}>{stack}</li>
              ))}
            </ul>

            {/* Project Links */}
            <div className="flex flex-row justify-between space-x-2 md:space-x-4 pt-4 dark:text-darktext text-lighttext">
              <a
                target="none"
                className="hover:text-lightprimary dark:hover:text-primary cursor-pointer"
                href={code}
              >
                <GitHubIcon />
              </a>
              <a
                target="none"
                className="hover:text-lightprimary dark:hover:text-primary cursor-pointer"
                href={preview}
              >
                <OpenInNewIcon />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
