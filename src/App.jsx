import Navbar from "./Navbar";
import About from "./About"
import Projects from "./Projects";
import  Skills  from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="  max-w-7xl mx-auto">
      <Navbar/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  );
}
