import { skills } from "./portfolio";

const Skills = () => {
  return (
    <div
      className="flex flex-col items-center justify-center mb-24 "
      id="skills"
    >
      <h1 className="text-3xl text-white font-bold flex items-center my-7 ">
        SKILLS
      </h1>
      <div className="flex flex-row space-x-3">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-transparent border border-[#202020] text-white min-w-24 shadow-md  hover:shadow-xl hover:shadow-shadow  shadow-shadow px-6 py-3 hover:-translate-y-1 transition transition-duration-400"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
