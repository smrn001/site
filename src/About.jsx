import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center  ">
      <h1 className="text-6xl text-white font-extrabold my-10 font-[poppins]">
        Hi, I am <span className="text-primary">Samir Niroula.</span>
      </h1>
      <div className="text-white text-xl pb-10">
        <p>
          A tech enthusiast from Mechinagar-7, rocking BSc.CSIT, diving deep
        </p>
        <p>into technology, and making waves in the ever-evolving IT world.</p>
      </div>
      <div className="flex flex-row justify-between text-white space-x-3 items-center">
      <button
  type="button"
  className="border-2 text-primary border-primary p-3 min-w-32 text-center bg-transparent relative overflow-hidden hover:text-white transition-colors hover:z-[2] duration-300 group font-bold cursor-pointer"
>
  Resume
  <span
    aria-hidden="true"
    className="bg-primary absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-[-1]"
  ></span>
</button>
        <div className="hover:text-primary relative  after:bg-primary after:absolute after:h-1 after:w-0  after:-bottom-3 after:left-0 hover:after:w-full after:transition-all  after:duration-300  cursor-pointer">
          <GitHubIcon></GitHubIcon>
        </div>
        <div className="hover:text-primary relative  after:bg-primary after:absolute after:h-1 after:w-0  after:-bottom-3 after:left-0 hover:after:w-full after:transition-all  after:duration-300  cursor-pointer">
          <LinkedInIcon></LinkedInIcon>
        </div>
        <div className="hover:text-primary relative  after:bg-primary after:absolute after:h-1 after:w-0  after:-bottom-3 after:left-0 hover:after:w-full after:transition-all  after:duration-300  cursor-pointer">
          <FacebookIcon></FacebookIcon>
        </div>
      </div>
    </div>
  );
};

export default About;
