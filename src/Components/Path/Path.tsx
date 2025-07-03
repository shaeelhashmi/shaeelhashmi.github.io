import { lazy,useRef } from 'react'
const Home= lazy(() => import('../Home'))
const Hero= lazy(() => import('../Hero'))
const Footer= lazy(() => import('../Footer'))
import { useGSAP } from '@gsap/react';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { useDispatch } from 'react-redux';
import { appear } from '../Slice/FooterAppeared';
gsap.registerPlugin(useGSAP, ScrollTrigger);
export default function Path() {
        const dispatch = useDispatch();
        // Create refs for each section
     const skillRef=useRef<HTMLDivElement>(null);
        const frontendSkillRef=useRef<HTMLDivElement>(null);
        const backendSkillRef=useRef<HTMLDivElement>(null);
        const databaseSkillRef=useRef<HTMLDivElement>(null);
        const otherSkillRef=useRef<HTMLDivElement>(null);
        const projectRef=useRef<HTMLDivElement>(null);
        const ExperienceRef=useRef<HTMLDivElement>(null);
        const footerRef = useRef<HTMLDivElement>(null);
        const main=useRef<HTMLDivElement>(null);
       useGSAP(() => {
        const elements= [skillRef, frontendSkillRef, backendSkillRef, databaseSkillRef, otherSkillRef, projectRef, ExperienceRef];
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

      if (footerRef.current) {
        gsap.fromTo(footerRef.current, 
          { 
            opacity: 0, 
            y: 400
          }, 
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: footerRef.current.parentElement,
              start: "top 90%",
              toggleActions: "play none none none",
              once: true,
              onEnter: () => setTimeout(() => {
                dispatch(appear());
              }, 500),
            },
          }
        );
      }
})
  return (
    <div ref={main}>
        <Hero />
        <Home skillRef={skillRef} projectRef={projectRef} ExperienceRef={ExperienceRef} frontendSkillRef={frontendSkillRef} backendSkillRef={backendSkillRef} databaseSkillRef={databaseSkillRef} otherSkillRef={otherSkillRef}/>
        <Footer footerRef={footerRef}/>
    </div>
  )
}
