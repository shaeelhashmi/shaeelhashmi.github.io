import { lazy,useRef } from 'react'
const Hero= lazy(() => import('../Hero'))
const Contact= lazy(() => import('../Contact/Contact'))
import { useGSAP } from '@gsap/react';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import Introduction from '../Intro/Introduction';
import gsap from 'gsap';
const Experience = lazy(() => import('../Experience'));
const Project = lazy(() => import('../Projects/Project'));
const SkillSection = lazy(() => import('../Skills/SkillSection'));
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
        const elements= [skillRef, frontendSkillRef, backendSkillRef, databaseSkillRef, otherSkillRef];
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
      const otherElements=[ExperienceRef, GetintouchRef,projectRef,aboutRef];
      otherElements.forEach((ref) => {
        if (ref.current) {
          const translateX = ref.current.getAttribute('data-translate') === 'translate-x-64' ? -400 : 400;
          gsap.fromTo(ref.current, { opacity: 0, x: translateX }, {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "sine.out",
            immediateRender: true,
            scrollTrigger: {
              trigger: ref.current,
              start: "top 80%",
              toggleActions: "play none none none",
              once: true,
            }
          });
        }
        const directDivChildren = ref.current?.querySelectorAll(':scope > div > div ');
        if (directDivChildren && ref.current) {
          directDivChildren.forEach((child) => {
            const index = Array.from(directDivChildren).indexOf(child as Element);
            const xPos = ref.current?.getAttribute('data-translate') === 'translate-x-64' ? index % 2 === 0 ? 400 : -400 : index % 2 === 0 ? -400 : 400;
            gsap.fromTo(child, { opacity: 0, x: xPos }, {
              opacity: 1,
              x: 0,
              duration: 0.5,
              ease: "power1.out",        
              scrollTrigger: {
                trigger: child,
                start: "top 80%",
                toggleActions: "play none none none",
                once: true,
              },
                  onComplete: () => {
                    gsap.set(child, { clearProps: "transform" });
                  }
              
            });
          })
        }
      })


 
})
  return (
    <div ref={main} >
<div className="mt-10 mb-5">
        <Hero  />
</div>
<div className="my-5 sm:mx-10 mx-4">
  <Introduction aboutRef={aboutRef} />
</div>
<div className="my-5 sm:mx-10 mx-4">
  <Experience ExperienceRef={ExperienceRef} />
</div>
<div className="my-5 sm:mx-10 mx-4">
  <Project projectRef={projectRef} />
</div>
<div className="my-5 sm:mx-10 mx-4">
  <SkillSection skillRef={skillRef} frontendSkillRef={frontendSkillRef} backendSkillRef={backendSkillRef} databaseSkillRef={databaseSkillRef} otherSkillRef={otherSkillRef} />
</div>
<div className="my-5 sm:mx-10 mx-4">
  <Contact GetintouchRef={GetintouchRef} />
</div>
    </div>
  )
}
