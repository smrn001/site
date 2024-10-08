import Navbar from "./Navbar";
import About from "./About"
import Projects from "./Projects";
import  Skills  from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="dark:bg-[#181818] bg-white ">
      <Navbar></Navbar>
      <About></About>
      <Projects></Projects>
      <Skills></Skills>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}
