import Github from "./SVG/Github";
import LinkedIn from "./SVG/Linkedin";
import Skills from "./Skills";
import Project from "./Project";
import { ReactTyped } from "react-typed";
import Experience from "./Experience";
export default function Main() {


  return (
    <main className="  z-20 text-black dark:text-white overflow-hidden ">
      <div className="mx-auto   z-10 min-h-[800px] h-screen  overflow-hidden flex flex-col items-center justify-center ">
       <header className="z-10 mt-14 text-center ">
    <div>
    <ReactTyped strings={["Hi I'm Muhammad Shaeel Arshad Hashmi"]}  className="text-3xl md:text-5xl font-bold  my-5 font-heading" typeSpeed={40} />
    <br />

    <ReactTyped
    className="text-sm sm:text-base dark:text-gray-300 text-gray-700 font-medium mt-2 my-5 w-3/4 mx-auto font-times"
      strings={[
        "Full-stack web developer",
        " MERN stack specialist",
        "CS student at Bahria University",
      ]}
      typeSpeed={40}
      backSpeed={50}
      loop
    />
    <div className="z-20 flex justify-center mt-4 ">
          <a href="https://github.com/shaeelhashmi" className="mx-2" target="_blank">
            <Github />
          </a>
          <a href="https://www.linkedin.com/in/muhammad-shaeel-arshad-hashmi/" className="mx-2" target="_blank" >
            <LinkedIn />
          </a>
        </div> 
  </div>
</header>
       
      </div>
       <div className="mx-auto  z-10 min-h-[600px] h-[80%]  overflow-hidden flex flex-col items-center justify-center ">
        <h1 className="text-3xl md:text-5xl font-bold  my-5 font-heading">Skills</h1>
        <Skills />
      </div>
      <div  className="mx-auto  z-10 min-h-[600px] h-[80%]  overflow-hidden flex flex-col items-center justify-center ">
        <h1 className="text-3xl md:text-5xl font-bold  my-5 font-heading">Projects</h1>
        
        <Project />
      </div>
      <div  className="mx-auto  z-10 min-h-[600px] h-[80%]  overflow-hidden flex flex-col items-center justify-center ">
        <h1 className="text-3xl md:text-5xl font-bold  my-5 font-heading">Experience</h1>
        
        <Experience />
      </div>
    </main>
  );
}