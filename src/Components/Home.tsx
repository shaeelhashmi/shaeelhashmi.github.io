import Github from "./SVG/Github";
import LinkedIn from "./SVG/Linkedin";
import { useRef } from "react";
import Skills from "./Skills";
import Project from "./Project";
import { ReactTyped } from "react-typed";
import Experience from "./Experience";
export default function Main() {
  const ref = useRef<HTMLDivElement>(null);
  const skillRef = useRef<HTMLDivElement>(null);
  const projectRef=useRef<HTMLDivElement>(null);


  return (
    <main className="  z-20 text-black dark:text-white overflow-hidden ">
      <div ref={ref} className="mx-auto   z-10 min-h-[800px] h-screen  overflow-hidden flex flex-col items-center justify-center ">
       <header className="z-10 mt-14 text-center ">
    <div>
    <ReactTyped strings={["Hi I'm Muhammad Shaeel Arshad Hashmi"]}  className="text-3xl md:text-5xl font-bold  my-5 font-serif" typeSpeed={40} />
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
       <div ref={skillRef} className="mx-auto  z-10 min-h-[600px] h-[80%]  overflow-hidden flex flex-col items-center justify-center ">
        <h1 className="text-3xl md:text-5xl font-bold  my-5 font-serif">Skills</h1>
        <Skills />
      </div>
      <div ref={projectRef} className="mx-auto  z-10 min-h-[600px] h-[80%]  overflow-hidden flex flex-col items-center justify-center ">
        <h1 className="text-3xl md:text-5xl font-bold  my-5 font-serif">Projects</h1>
        
        <Project />
      </div>
      <div ref={projectRef} className="mx-auto  z-10 min-h-[600px] h-[80%]  overflow-hidden flex flex-col items-center justify-center ">
        <h1 className="text-3xl md:text-5xl font-bold  my-5 font-serif">Experience</h1>
        
        <Experience />
      </div>
    </main>
  );
}
 {/* <div className="z-20 flex justify-center mt-4 ">
          <a href="https://github.com/shaeelhashmi" className="mx-2" target="_blank">
            <Github />
          </a>
          <a href="https://www.linkedin.com/in/muhammad-shaeel-arshad-hashmi/" className="mx-2" target="_blank" >
            <LinkedIn />
          </a>
          <a href="mailto:shaeelhashmi232@gmail.com"><Google></Google></a>
        </div> */}