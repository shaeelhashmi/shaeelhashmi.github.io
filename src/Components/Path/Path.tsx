import { lazy,useRef } from 'react'
const Home= lazy(() => import('../Home'))
const Hero= lazy(() => import('../Hero'))
const Contact= lazy(() => import('../Contact'))
import { useGSAP } from '@gsap/react';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import gsap from 'gsap';
gsap.registerPlugin(useGSAP, ScrollTrigger);
export default function Path() {
        // Create refs for each section
     const skillRef=useRef<HTMLDivElement>(null);
        const frontendSkillRef=useRef<HTMLDivElement>(null);
        const backendSkillRef=useRef<HTMLDivElement>(null);
        const databaseSkillRef=useRef<HTMLDivElement>(null);
        const otherSkillRef=useRef<HTMLDivElement>(null);
        const projectRef=useRef<HTMLDivElement>(null);
        const ExperienceRef=useRef<HTMLDivElement>(null);
        const main=useRef<HTMLDivElement>(null);
        const GetintouchRef= useRef<HTMLDivElement>(null);
        const aboutRef = useRef<HTMLDivElement>(null);
       useGSAP(() => {
        const elements= [skillRef, frontendSkillRef, backendSkillRef, databaseSkillRef, otherSkillRef, projectRef, ExperienceRef, GetintouchRef, aboutRef];
      elements.forEach((ref) => {
        // Check data-translate attribute for each ref
        const translateX = ref.current?.getAttribute('data-translate') === '-translate-x-64' ? 400 : -400;
        if (ref.current) {
          gsap.fromTo(ref.current, { opacity: 0, x: translateX }, {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power2.out",
            immediateRender: true,
            scrollTrigger: {
              trigger: ref.current,
              start: "top 80%",
              toggleActions: "play none none none",
              once: true,
            }
          });
        }
      })

 
})
  return (
    <div ref={main} >

        <Hero aboutRef={aboutRef} />
        <Home skillRef={skillRef} projectRef={projectRef} ExperienceRef={ExperienceRef} frontendSkillRef={frontendSkillRef} backendSkillRef={backendSkillRef} databaseSkillRef={databaseSkillRef} otherSkillRef={otherSkillRef}/>
        <Contact GetintouchRef={GetintouchRef} />
    </div>
  )
}
