import { skills } from "./portfolio";

const Skills = () => {
  return (
    <div
      className="flex flex-col items-center justify-center mb-10"
      id="skills"
    >
      <h1 className="text-3xl dark:text-white text-black font-bold my-7">
        SKILLS
      </h1>
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-4 place-itemsr ">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-transparent border dark:border-darkborder hover:dark:border-darkborderhover border-[#eeeeee] rounded-md dark:text-darktext text-lighttext shadow-md dark:shadow-darkshadow text-center shadow-[#eeeeee] px-6 py-3 hover:-translate-y-1 transition duration-400"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
