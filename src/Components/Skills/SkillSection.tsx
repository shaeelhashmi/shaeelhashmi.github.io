import React from 'react'
import Skills from './Skills'
import JS from "../SVG/Skills/JS"
import ReactSVG from "../SVG/Skills/ReactSVG"
import HTML from "../SVG/Skills/HTML"
import Mongo from "../SVG/Skills/Mongo";
import Ts from "../SVG/Skills/Ts"
import Tailwind from "../SVG/Skills/Tailwind";
import CSS from "../SVG/Skills/CSS";
import NodeJs from "../SVG/Skills/NodeJs";
import ExpressJs from "../SVG/Skills/ExpressJs";
import C from "../SVG/Skills/C";
import Git from "../SVG/Skills/Git";
import Three from "../SVG/Skills/Three";
import GsapSvg from "../SVG/Skills/GsapSvg";
import Bootstrap from "../SVG/Skills/Bootstrap";
import GoSvg from "../SVG/Skills/GoSvg";
import MySql from "../SVG/Skills/MySql";
import Python from "../SVG/Skills/Python";
import Docker from "../SVG/Skills/Docker";
export default function SkillSection({skillRef, frontendSkillRef, backendSkillRef, databaseSkillRef, otherSkillRef}: {skillRef: React.RefObject<HTMLDivElement>, frontendSkillRef: React.RefObject<HTMLDivElement>, backendSkillRef: React.RefObject<HTMLDivElement>, databaseSkillRef: React.RefObject<HTMLDivElement>, otherSkillRef: React.RefObject<HTMLDivElement>}) {
  return (
     <section  ref={skillRef} data-translate="-translate-x-64" id="skills">
        <h1 className=" font-bold   font-heading md:text-6xl text-5xl text-center mt-10" >Skills</h1>
  
        <Skills skills={[<HTML></HTML>,<CSS/>,<JS></JS>,<Ts></Ts>,<ReactSVG/>,<Tailwind></Tailwind>,<Bootstrap/>,<Three/>,<GsapSvg/>]} title="Frontend" SkillRef={frontendSkillRef} className="-translate-x-64" />
        <Skills skills={[<GoSvg></GoSvg>,<NodeJs/>,<ExpressJs/>,<C/>,<Python/>]} title="Backend" SkillRef={backendSkillRef} className="translate-x-64"/>
         <Skills skills={[<Mongo></Mongo>,<MySql/>]} title="Databases" SkillRef={databaseSkillRef} className="-translate-x-64" />
        <Skills skills={[<Git/>,<Docker/>]} title="Tools" SkillRef={otherSkillRef} className="translate-x-64" />
    
      </section>
  )
}
