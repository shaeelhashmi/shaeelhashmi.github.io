import Github from "./SVG/Github";
import LinkedIn from "./SVG/Linkedin";
import Skills from "./Skills";
import Project from "./Project";
import { ReactTyped } from "react-typed";
import Experience from "./Experience";
interface MainProps {
  skillRef?: React.RefObject<HTMLDivElement>;
  projectRef?: React.RefObject<HTMLDivElement>;
  ExperienceRef?: React.RefObject<HTMLDivElement>;
}
export default function Main(props: MainProps) {
  const { skillRef, projectRef, ExperienceRef } = props;

  return (
    <main className="  z-20 text-black dark:text-white overflow-hidden ">
      <div className="mx-auto   z-10 min-h-[800px] h-screen  overflow-hidden flex flex-col items-center justify-center ">
       <header className="z-10 mt-14 text-center  animate-fade-in transition-all duration-1000 overflow-hidden">
    <div>
    <p className="text-3xl md:text-5xl font-bold   font-heading">Shaeel Hashmi</p>

    <ReactTyped
    className="text-sm sm:text-base dark:text-gray-300 text-gray-700 font-medium  mb-5 w-3/4 mx-auto font-times "
      strings={[
        "Full-stack web developer",
        "Software engineer",
        "CS student at Bahria University",
        "Open-source enthusiast",
      ]}
      typeSpeed={40}
      backSpeed={50}
      loop
    />
    <p className="max-w-[600px] px-4 xs:text-md text-sm sm:text-lg font-calibri text-left">
      Hi, I’m a passionate full-stack developer who loves turning complex problems into elegant web solutions. Whether it’s building real-time apps with WebSockets and Go,crafting interactive UIs with React, making fullstack apps using Node.js and Express or working with databases like MongoDB and SQL, I aim to create clean, high-performance experiences. I'm also an active open-source contributor and a CS student at Bahria University.
    </p>
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
       <div className="mx-auto  z-10 min-h-[600px] h-[80%]  overflow-hidden flex flex-col items-center justify-center opacity-0 duration-1000 transition-all -translate-x-64" ref={skillRef} data-translate="-translate-x-64" >
        <h1 className="text-3xl md:text-5xl font-bold  my-5 font-heading">Skills</h1>
        <Skills />
      </div>
      <div  className="mx-auto  z-10 min-h-[600px] h-[80%]  overflow-hidden flex flex-col items-center justify-center opacity-0 duration-1000 transition-all translate-x-64" ref={projectRef} data-translate="translate-x-64" >
        <h1 className="text-3xl md:text-5xl font-bold  my-5 font-heading">Projects</h1>
      <Project />
      </div>
      <div  className="mx-auto  z-10 min-h-[600px] h-[80%]  overflow-hidden flex flex-col items-center justify-center opacity-0 duration-1000 transition-all -translate-x-64" ref={ExperienceRef} data-translate="-translate-x-64" >
        <h1 className="text-3xl md:text-5xl font-bold  my-5 font-heading">Experience</h1>    
        <Experience />
      </div>
    </main>
  );
}