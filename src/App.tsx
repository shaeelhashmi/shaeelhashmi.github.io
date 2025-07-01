import { lazy, Suspense,useRef,useEffect } from 'react'
import './App.css'
import './index.css'
import { useDispatch } from 'react-redux'
import Loader from './Components/Loader'
import Footer from './Components/Footer'
import NavBar from './Components/Navbar'
import { useSelector } from 'react-redux'
import { appear } from './Components/Slice/FooterAppeared'
const Hero= lazy(() => import('./Components/Hero'))
const Home = lazy(() => import('./Components/Home'))

export default function App() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state: any) => state.DarkMode.value);
    const skillRef=useRef<HTMLDivElement>(null);
    const frontendSkillRef=useRef<HTMLDivElement>(null);
    const backendSkillRef=useRef<HTMLDivElement>(null);
    const databaseSkillRef=useRef<HTMLDivElement>(null);
    const otherSkillRef=useRef<HTMLDivElement>(null);
    const projectRef=useRef<HTMLDivElement>(null);
    const ExperienceRef=useRef<HTMLDivElement>(null);
    const footerRef = useRef<HTMLDivElement>(null);
  const handleScroll = () => {
  const refs = [skillRef, projectRef, ExperienceRef, frontendSkillRef, backendSkillRef, databaseSkillRef, otherSkillRef];

  refs.forEach(ref => {
    if (ref?.current) {
      const el = ref.current;
      const rect = el.getBoundingClientRect();
      console.log(rect.top,ref)
      const inView = rect.top + 200 < window.innerHeight && rect.bottom > 400;
      if (inView && el.classList.contains("opacity-0") && el.dataset.animated !== "true") {
        const translateClass = el.getAttribute("data-translate") || "";
        el.classList.remove("opacity-0", translateClass);
        el.dataset.animated = "true";
      }
    }
  });

  if (footerRef.current) {
    const footerRect = footerRef.current.getBoundingClientRect();
    const footerInView = footerRect.top < window.innerHeight + 300 && footerRect.bottom > 0;

    if (footerInView && footerRef.current.classList.contains("opacity-0") && footerRef.current.dataset.animated !== "true") {
      footerRef.current.dataset.animated = "true";
      if (footerRef.current.parentElement) {
        setTimeout(() => {
          footerRef.current?.parentElement?.classList.remove("shadow-invinsible")
           dispatch(appear());
        }, 500);
       
      }
      footerRef.current.classList.remove("opacity-0", "translate-y-32");
    }
  }
};
useEffect(() => {
  const body = document.body;
  if (darkMode) {
    body.style.background = "linear-gradient(90deg, #000000, #12001a,#000000)";
    body.style.backgroundColor = "black";
    document.querySelectorAll('.loader-square').forEach(el => {
      (el as HTMLElement).style.background = "white";
    });
  } else {
    body.style.background = "linear-gradient(90deg, #f5f5f5, #f7e8fd, #f5f5f5)";
    body.style.backgroundColor = "rgb(255, 255, 255)";
    document.querySelectorAll('.loader-square').forEach(el => {
      (el as HTMLElement).style.background = "black";
    });
  }
}, [darkMode]);
useEffect(() => {
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
  }, []);
      useEffect(() => { 
        handleScroll();
      }, [skillRef, projectRef, ExperienceRef, footerRef]);
  return (
    <>
     <NavBar handleScroll={handleScroll}></NavBar>
    <div className="relative flex flex-col items-center justify-center w-screen min-h-screen m-0 overflow-x-hidden trnasition-all duration-300">
        <Suspense fallback={<Loader />}>
      <div className={`w-full ${darkMode ? "text-white" : "text-black"}`}>
        <Hero />
        <Home skillRef={skillRef} projectRef={projectRef} ExperienceRef={ExperienceRef} frontendSkillRef={frontendSkillRef} backendSkillRef={backendSkillRef} databaseSkillRef={databaseSkillRef} otherSkillRef={otherSkillRef}/>
        <Footer footerRef={footerRef}/>
      </div>
  
      </Suspense>
    </div>
    </>
  );
}
