import { skills } from "./portfolio";

const Skills = () => {
  return (
    <div
      className="flex flex-col items-center justify-center my-12"
      id="skills"
    >
      <h1 className="text-3xl text-white font-bold flex items-center my-7 ">
        SKILLS
      </h1>
      <div className="flex flex-row space-x-3">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-transparent text-white min-w-24 shadow-md shadow-shadow px-6 py-3 hover:-translate-y-2 transition transition-duration-300"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
