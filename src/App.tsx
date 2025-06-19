import { lazy, Suspense,useRef,useEffect } from 'react'
import './App.css'
import './index.css'
import Particles from './Components/ParticleDesign'
import Home from './Components/Home'
import Loader from './Components/Loader'
import Footer from './Components/Footer'
const Canvas1 = lazy(() => import('./Components/Canvas1'))

export default function App() {
    const skillRef=useRef<HTMLDivElement>(null);
    const projectRef=useRef<HTMLDivElement>(null);
    const ExperienceRef=useRef<HTMLDivElement>(null);
    const footerRef = useRef<HTMLDivElement>(null);
        const handleScroll = () => {
        const refs = [skillRef, projectRef, ExperienceRef];
        refs.forEach(ref => {
          if (ref?.current) {
            const el = ref.current;
            const rect = el.getBoundingClientRect();
            const inView = rect.top+400 < window.innerHeight && rect.bottom > 400;
    
            if (inView && el.classList.contains("opacity-0")) {
              console.log("Element in view:", el);
              const translateClass = el.getAttribute("data-translate") || "";
              el.classList.remove("opacity-0", translateClass);
            }
          }
        });
        if (footerRef.current) {
          const footerRect = footerRef.current.getBoundingClientRect();
          const footerInView = footerRect.top < window.innerHeight && footerRect.bottom > 0;
          if (footerInView && footerRef.current.classList.contains("opacity-0")) {
            if (footerRef.current.parentElement) {
                  setTimeout(() => {
                  footerRef.current?.parentElement?.classList.add(
                    "shadow-[0_0_10px_2px_rgba(0,0,0)]",
                    "dark:shadow-[0_0_10px_2px_rgba(255,255,255)]"
                  );
                  }, 500);
            }
            footerRef.current.classList.remove("opacity-0", "translate-y-32");
          }
        }
      };
      useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
      useEffect(() => { 
        handleScroll();
      }, [skillRef, projectRef, ExperienceRef, footerRef]);
  return (
    <div className="relative flex flex-col items-center justify-center w-screen min-h-screen m-0 overflow-x-hidden text-white">
         <Suspense fallback={<Loader />}>
      <div className="absolute inset-0 pointer-events-none  -z-50">
        <Particles />
      </div>

      <div className="w-full dark:text-white text-black">
        <Home skillRef={skillRef} projectRef={projectRef} ExperienceRef={ExperienceRef} />
        <Footer footerRef={footerRef}/>
      </div>
  
      <div className='fixed h-screen top-0 bottom-0 left-0 right-0 -z-20'>
        <Canvas1 />
        </div>
      </Suspense>
    </div>
  );
}
