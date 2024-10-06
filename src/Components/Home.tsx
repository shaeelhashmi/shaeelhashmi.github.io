import Github from "./SVG/Github";
import LinkedIn from "./SVG/Linkedin";
import { useSelector } from "react-redux";
import gsap from "gsap";
import { useRef, useEffect,useState } from "react";
import Google from "./SVG/Google";
import Skills from "./Skills";
import Project from "./Project";
export default function Main() {
  const data = useSelector((state: any) => state.ShowData.name);
  const ref = useRef<HTMLDivElement>(null);
  const skillRef = useRef<HTMLDivElement>(null);
  const projectRef=useRef<HTMLDivElement>(null);
  const [prev, setPrev] = useState('');
  useEffect(() => {
    if(data==''){
      if (skillRef.current) {
        skillRef.current.style.display = 'none';
      }if(projectRef.current){
        projectRef.current.style.display='none';
      }
      gsap.fromTo(ref.current, { opacity: 0 }, { opacity: 1, duration: 3 });
    }
    if (data === 'home' ) {
      
        if(prev==='skills')
        {
        gsap.fromTo(skillRef.current, { x: 0 }, { x: -1200, duration: 1, onComplete: () => {
        if (ref.current) {
          ref.current.style.display = 'block';
          }
      gsap.fromTo(ref.current, { x: 1000 }, { x: 0, duration: 1 });
      if (skillRef.current) {
        skillRef.current.style.display = 'none';
      }
      if(projectRef.current){
        projectRef.current.style.display='none';
      }
      }});
    }else if(prev==='projects')
    {
      gsap.fromTo(projectRef.current, { x: 0 }, { x: -1200, duration: 1, onComplete: () => {
        if (ref.current) {
          ref.current.style.display = 'block';
          }
      gsap.fromTo(ref.current, { x: 1000 }, { x: 0, duration: 1 });
      if (projectRef.current) {
        projectRef.current.style.display = 'none';
      }
      if(skillRef.current){
        skillRef.current.style.display='none';
      }
      }});
    }
    } else if (data === 'skills') {
      if(prev===''|| prev==='home'){
      gsap.fromTo(ref.current, { x: 0 }, { x: -1200, duration: 1, onComplete: () => {
        if (skillRef.current) {
          skillRef.current.style.display = 'block';
          }
        gsap.fromTo(skillRef.current, { x: 1000 }, { x: 0, duration: 1 });
      if (ref.current) {
        ref.current.style.display = 'none';
      }
      if(projectRef.current){
        projectRef.current.style.display='none';
      }
      }});
    }else if(prev==='projects')
    {
      gsap.fromTo(projectRef.current, { x: 0 }, { x: -1200, duration: 1, onComplete: () => {
        if (skillRef.current) {
          skillRef.current.style.display = 'block';
          }
        gsap.fromTo(skillRef.current, { x: 1000 }, { x: 0, duration: 1 });
      if (projectRef.current) {

        projectRef.current.style.display = 'none';
      }
      if(ref.current){
        ref.current.style.display='none';
      }
      }});
    }
    }else if(data === 'projects'){
     if(prev===''|| prev==='home'){
      gsap.fromTo(ref.current, { x: 0 }, { x: -1200, duration: 1, onComplete: () => {
        if (ref.current) {
          ref.current.style.display = 'none';
        }
        if (projectRef.current) {
          projectRef.current.style.display = 'block';
          }
      
        gsap.fromTo(projectRef.current, { x: 1000 }, { x: 0, duration: 1 });
      if(skillRef.current){
        skillRef.current.style.display='none';
      }
      }});
    }else if(prev==='skills')
    {
      gsap.fromTo(skillRef.current, { x: 0 }, { x: -1200, duration: 1, onComplete: () => {
        if (projectRef.current) {
          projectRef.current.style.display = 'block';
         
          }
      
        gsap.fromTo(projectRef.current, { x: 1000 }, { x: 0, duration: 1 });
      if (skillRef.current) {
        skillRef.current.style.display = 'none';
      }
      if(ref.current){
        ref.current.style.display='none';
      }
      }});
    }
   
    }
    setPrev(data);
    
  }, [data]);

  return (
    <main className=" sm:h-[500px] h-[350px]">
      <div ref={ref} className="md:w-[600px] mx-auto sm:w-[500px] xs:w-[350px] w-[260px]">
        <header className="z-10">
          <h1 className="text-xl font-bold text-center md:text-3xl sm:text-2xl"
          >
            Muhammad Shaeel Arshad Hashmi
          </h1>
          <p className="text-sm text-center sm:text-base" >Web developer</p> 
        </header>
        <div className="z-20 flex justify-center mt-4">
          <a href="https://github.com/shaeelhashmi" className="mx-2" target="_blank">
            <Github />
          </a>
          <a href="https://www.linkedin.com/in/muhammad-shaeel-arshad-hashmi/" className="mx-2" target="_blank" >
            <LinkedIn />
          </a>
          <a href="mailto:shaeelhashmi232@gmail.com"><Google></Google></a>
        </div>
        <p className="xsh:md:my-10 xs:text-sm sm:text-base text-[0.7rem] my-2">Hi I’m Muhammad Shaeel Arshad Hashmi, a full-stack developer currently pursuing my Bachelor's degree in Computer Science at Bahria University. I specialize in modern web technologies, particularly the MERN stack (MongoDB, Express, React, and Node.js). With a passion for creating dynamic and responsive web applications, I am dedicated to delivering seamless user experiences. Beyond development, I possess strong problem-solving skills, honed through algorithm design and competitive programming. Whether you're looking for a developer to build full-scale applications or improve performance, I’m excited to help bring your vision to life.</p>
      </div>
       <div ref={skillRef}>
        <h1 className="text-4xl font-bold text-center transition-all duration-700 ">Skills</h1>
        <Skills />
      </div>
      <div ref={projectRef}>
        <h1 className="text-4xl font-bold text-center transition-all duration-700 ">Projects</h1>
        
        <Project />
      </div>
    </main>
  );
}