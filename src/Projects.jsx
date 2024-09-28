import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const Projects = () => {
  return (
    <div className="flex flex-col items-center my-10 px-4 md:px-0">
      <h1 className="text-white text-3xl md:text-4xl font-extrabold pt-10 pb-6">
        PROJECTS
      </h1>
      <div className="text-white w-full md:w-[70vw] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Project Card */}
        {Array.from({ length: 6 }).map((_, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center p-4 py-6 shadow-xl group min-h-40 bg-black shadow-slate-800 hover:-translate-y-3 transition duration-300"
          >
            <p className="text-lg md:text-xl font-extrabold hover:text-primary">
              Notes Website
            </p>
            <p className="my-2 text-sm md:text-base">
              A website for CSIT notes
            </p>
            <ul className="flex flex-row justify-between space-x-2 md:space-x-4 text-sm">
              <li>html</li>
              <li>css</li>
              <li>js</li>
            </ul>
            <ul className="flex flex-row justify-between space-x-2 md:space-x-4 pt-4">
              <li className="hover:text-primary cursor-pointer">
                <GitHubIcon />
              </li>
              <li className="hover:text-primary cursor-pointer">
                <OpenInNewIcon />
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;