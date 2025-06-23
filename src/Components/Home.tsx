import Github from "./SVG/Github";
import LinkedIn from "./SVG/Linkedin";
import Skills from "./Skills";
import Project from "./Project";
import { ReactTyped } from "react-typed";
import Experience from "./Experience";
import JS from "./SVG/Skills/JS"
import ReactSVG from "./SVG/Skills/ReactSVG"
import HTML from "./SVG/Skills/HTML"
import Mongo from "./SVG/Skills/Mongo";
import Ts from "./SVG/Skills/Ts"
import Tailwind from "./SVG/Skills/Tailwind";
import CSS from "./SVG/Skills/CSS";
import NodeJs from "./SVG/Skills/NodeJs";
import ExpressJs from "./SVG/Skills/ExpressJs";
import C from "./SVG/Skills/C";
import Git from "./SVG/Skills/Git";
import Three from "./SVG/Skills/Three";
import GsapSvg from "./SVG/Skills/GsapSvg";
import Bootstrap from "./SVG/Skills/Bootstrap";
import GoSvg from "./SVG/Skills/GoSvg";
import MySql from "./SVG/Skills/MySql";
import Python from "./SVG/Skills/Python";
interface MainProps {
  skillRef: React.RefObject<HTMLDivElement>;
  projectRef: React.RefObject<HTMLDivElement>;
  ExperienceRef: React.RefObject<HTMLDivElement>;
  frontendSkillRef: React.RefObject<HTMLDivElement>;
  backendSkillRef: React.RefObject<HTMLDivElement>;
  databaseSkillRef: React.RefObject<HTMLDivElement>;
  otherSkillRef: React.RefObject<HTMLDivElement>;
}
export default function Main(props: MainProps) {
  const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const { skillRef, projectRef, ExperienceRef,frontendSkillRef,backendSkillRef,databaseSkillRef,otherSkillRef } = props;

  return (
    <main className="  z-20 text-black dark:text-white overflow-hidden ">
      <div className="mx-auto   z-10 min-h-[800px] h-screen  overflow-hidden flex flex-col items-center justify-center ">
       <header className="z-10 mt-14 text-center  animate-fade-in transition-all duration-1000 overflow-hidden">
    <div>
    <p className="text-4xl md:text-5xl font-bold   font-heading">Shaeel Hashmi</p>
   <div className="z-20 flex justify-center mt-4 ">
          <a href="https://github.com/shaeelhashmi" className="mx-2" target="_blank">
            <Github />
          </a>
          <a href="https://www.linkedin.com/in/muhammad-shaeel-arshad-hashmi/" className="mx-2" target="_blank" >
            <LinkedIn />
          </a>
        </div> 
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
    
    <p className="max-w-[600px] px-4 xs:text-md text-sm sm:text-lg font-calibri text-left"
     style={{ textShadow: isDarkMode?'0 0 1px white':  '0 0 1px black'}}
      >
      Hi, I’m a passionate full-stack developer who loves turning complex problems into elegant web solutions. Whether it’s building real-time apps with WebSockets and Go,crafting interactive UIs with React, making fullstack apps using Node.js and Express or working with databases like MongoDB and SQL, I aim to create clean, high-performance experiences. I'm also an active open-source contributor and a CS student at Bahria University.
    </p>
 
  </div>
</header>
       
      </div>
       <div className="mx-auto  z-10 min-h-screen   overflow-hidden flex flex-col items-center justify-center opacity-0 duration-1000 transition-all -translate-x-64" ref={skillRef} data-translate="-translate-x-64" >
        <h1 className="text-4xl md:text-5xl font-bold  my-5 font-heading">Skills</h1>
        <div className="flex flex-col justify-center items-center sm:w-[400px] w-[350px] mb-10">
      <div className="flex flex-col items-center justify-center w-full space-y-4 sm:mt-20 mt-10 gap-7">
        <Skills skills={[<HTML></HTML>,<CSS/>,<JS></JS>,<Ts></Ts>,<ReactSVG/>,<Tailwind></Tailwind>,<Bootstrap/>,<Three/>,<GsapSvg/>]} title="Frontend" SkillRef={frontendSkillRef} className="translate-x-64" />
        <Skills skills={[<GoSvg></GoSvg>,<NodeJs/>,<ExpressJs/>,<C/>,<Python/>]} title="Backend" SkillRef={backendSkillRef} className="-translate-x-64"/>
         <Skills skills={[<Mongo></Mongo>,<MySql/>]} title="Databases" SkillRef={databaseSkillRef} className="translate-x-64" />
          <Skills skills={[<Git/>]} title="Tools" SkillRef={otherSkillRef} className="-translate-x-64" />
        </div>
        </div>
      </div>
      <div  className="mx-auto  z-10 min-h-[600px] h-[80%]  overflow-hidden flex flex-col items-center justify-center opacity-0 duration-1000 transition-all translate-x-64" ref={projectRef} data-translate="translate-x-64" >
        <h1 className="text-4xl md:text-5xl font-bold  my-5 font-heading">Projects</h1>
      <Project />
      </div>
      <div  className="mx-auto  z-10 min-h-[600px] h-[80%]  overflow-hidden flex flex-col items-center justify-center opacity-0 duration-1000 transition-all -translate-x-64" ref={ExperienceRef} data-translate="-translate-x-64" >
        <h1 className="text-4xl md:text-5xl font-bold  my-5 font-heading">Experience</h1>    
        <Experience />
      </div>
    </main>
  );
}