
import Skills from "./Skills";
import Project from "./Project";
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
  const { skillRef, projectRef, ExperienceRef,frontendSkillRef,backendSkillRef,databaseSkillRef,otherSkillRef } = props;

  return (
    <main className="  z-20 overflow-hidden ">
        <section  className="mx-auto  z-10 min-h-fit   overflow-hidden flex flex-col items-center justify-center opacity-0 duration-1000 transition-all -translate-x-64" ref={projectRef} data-translate="-translate-x-64" id="Projects">
        <h1 className="text-4xl md:text-5xl font-bold  my-5 font-heading">Projects</h1>
      <Project />
      </section>
        <section  className="mx-auto  z-10 min-h-fit  overflow-hidden flex flex-col items-center justify-center opacity-0 duration-1000 transition-all -translate-x-64" ref={ExperienceRef} data-translate="-translate-x-64" id="Experience">
        <h1 className="text-4xl md:text-5xl font-bold  my-5 font-heading">Experience</h1>    
        <Experience />
      </section>
       <section className="mx-auto  z-10 min-h-fit  overflow-hidden flex flex-col items-center justify-center opacity-0 duration-1000 transition-all -translate-x-64" ref={skillRef} data-translate="-translate-x-64" id="skills">
        <h1 className="text-4xl md:text-5xl font-bold  my-5 font-heading">Skills</h1>
        <div className="flex flex-col justify-center items-center sm:w-[90%] w-[350px] md:my-12 my-5">
      <div className="flex flex-col items-center justify-center w-full space-y-4   gap-7">
        <Skills skills={[<HTML></HTML>,<CSS/>,<JS></JS>,<Ts></Ts>,<ReactSVG/>,<Tailwind></Tailwind>,<Bootstrap/>,<Three/>,<GsapSvg/>]} title="Frontend" SkillRef={frontendSkillRef} className="translate-x-64" />
        <Skills skills={[<GoSvg></GoSvg>,<NodeJs/>,<ExpressJs/>,<C/>,<Python/>]} title="Backend" SkillRef={backendSkillRef} className="-translate-x-64"/>
         <Skills skills={[<Mongo></Mongo>,<MySql/>]} title="Databases" SkillRef={databaseSkillRef} className="translate-x-64" />
        <Skills skills={[<Git/>]} title="Tools" SkillRef={otherSkillRef} className="-translate-x-64" />
        </div>
        </div>
      </section>
    
    
    </main>
  );
}