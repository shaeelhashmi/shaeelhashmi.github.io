import Github from "./SVG/Github";
import LinkedIn from "./SVG/Linkedin";
import { useSelector } from "react-redux";
import gsap from "gsap";
import { useRef, useEffect,useState } from "react";

export default function Main() {
  const data = useSelector((state: any) => state.ShowData.name);
  const ref = useRef<HTMLDivElement>(null);
  const skillRef = useRef<HTMLDivElement>(null);
  const [isEmpty, setIsEmpty] = useState(true);
  useEffect(() => {
    if(data==''){
      if (skillRef.current) {
        skillRef.current.style.display = 'none';
        setIsEmpty(true)
      }
      gsap.fromTo(ref.current, { opacity: 0 }, { opacity: 1, duration: 3 });
    }
    if (data === 'home' ) {
        if(!(isEmpty))
        {
        gsap.fromTo(skillRef.current, { x: 0 }, { x: -1000, duration: 1, onComplete: () => {
        if (ref.current) {
          ref.current.style.display = 'block';
          }
      gsap.fromTo(ref.current, { x: 1000 }, { x: 0, duration: 1 });
      if (skillRef.current) {
        skillRef.current.style.display = 'none';
      }
      }});
    }else{
      setIsEmpty(false)
    }
    } else if (data === 'skills') {
      setIsEmpty(false);
      gsap.fromTo(ref.current, { x: 0 }, { x: -1000, duration: 1, onComplete: () => {
        if (skillRef.current) {
          skillRef.current.style.display = 'block';
          }
        gsap.fromTo(skillRef.current, { x: 1000 }, { x: 0, duration: 1 });
      if (ref.current) {
        ref.current.style.display = 'none';
      }
      }});
      
    }
  }, [data]);

  return (
    <div className="h-[100px]">
      <div ref={ref}>
        <header className="z-10">
          <h1 className="text-3xl font-bold text-center">
            Hi I'm Muhammad Shaeel Arshad Hashmi
          </h1>
          <p className="text-base text-center">Web developer</p>
        </header>
        <main className="z-20 flex justify-center mt-4">
          <a href="https://github.com/shaeelhashmi" className="mx-2" target="_blank" rel="noopener noreferrer">
            <Github />
          </a>
          <a href="https://www.linkedin.com/in/muhammad-shaeel-arshad-hashmi/" className="mx-2" target="_blank" rel="noopener noreferrer">
            <LinkedIn />
          </a>
        </main>
      </div>
       <div ref={skillRef}>
        <h1 className="overflow-hidden text-4xl font-bold text-center transition-all duration-700">Skills</h1>
      </div>
    </div>
  );
}
