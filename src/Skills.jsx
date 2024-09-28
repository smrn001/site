const Skills = () => {
  return (
    <div className="flex flex-col items-center justify-center my-12"> 
      <h1 className="text-3xl text-white font-bold flex items-center my-7 ">SKILLS</h1>
      <div className="flex flex-row space-x-3">
        <div className="bg-transparent text-white min-w-24 shadow-xl shadow-slate-800 px-6 py-3 hover:-translate-y-2 transition transition-duration-300">React</div>
        <div className="bg-transparent text-white min-w-24 shadow-xl shadow-slate-800 px-6 py-3 hover:-translate-y-2 transition transition-duration-300">Tailwind</div>
        <div className="bg-transparent text-white min-w-24 shadow-xl shadow-slate-800 px-6 py-3 hover:-translate-y-2 transition transition-duration-300">Git</div>
      </div>
    </div>
  );
};

export default Skills;
