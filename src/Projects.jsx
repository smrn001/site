import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { projects } from "./portfolio";

const Projects = () => {
  return (
    <div className="flex flex-col items-center my-10 px-4 md:px-0" id="projects">
      <h1 className="text-white text-3xl md:text-4xl font-extrabold pt-10 pb-6">
        PROJECTS
      </h1>
      <div className="text-white w-full md:w-[70vw] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(({ id, name, description, tech, code, preview }) => (
          <div
            key={id}
            className="flex flex-col items-center rounded-xl p-4 py-6 shadow-md group min-h-40 bg-bg shadow-shadow hover:-translate-y-3 transition duration-300"
          >
            <p className="text-lg md:text-xl font-extrabold hover:text-primary">
              {name}
            </p>
            <p className="my-2 text-sm md:text-base">{description}</p>
            <ul className="flex flex-row justify-between space-x-2 md:space-x-4 text-sm">
              {tech.map((stack, index) => (
                <li key={index}>{stack}</li>
              ))}
            </ul>
            <div className="flex flex-row justify-between space-x-2 md:space-x-4 pt-4">
              <a className="hover:text-primary cursor-pointer" href={code}>
                <GitHubIcon />
              </a>
              <a className="hover:text-primary cursor-pointer" href={preview}>
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