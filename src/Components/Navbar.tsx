import { AlignJustify } from "lucide-react";
import { useState } from "react";
import { Sun } from "lucide-react";
import { Change } from "./Slice/DarkMode";
import { useDispatch } from "react-redux";
import { Moon } from "lucide-react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Logo from "./SVG/Logo";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function NavBar() {
const darkMode = useSelector((state: any) => state.DarkMode.value);
const dispatch = useDispatch();
const [open, setOpen] = useState(false);
useEffect(() => {
  const isDarkMode = localStorage.getItem("darkMode");
  if (isDarkMode === null) {
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    dispatch(Change(prefersDark));
  } else {
    dispatch(Change(isDarkMode === "true"));
  }
},[]);
const handleLinkClick = (
  e: React.MouseEvent<HTMLAnchorElement>,
  name: string
) => {
  e.preventDefault();

  const navHeight = 80; // px — adjust as needed

  let targetY = 0;
  if (name !== "#") {
    const el = document.getElementById(name);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY;
      targetY = top - navHeight; // subtract navbar height
    }
  }

  gsap.to(window, {
    duration: 0.5,
    scrollTo: targetY,
    ease: "linear",
  });

  setTimeout(() => setOpen(false), 300);
};

  return (
    <nav className={` fixed top-0 w-full z-50 md:flex items-center md:justify-evenly justify-end p-2   ${darkMode ?"bg-[rgb(5,5,18)] text-white":"bg-[#f2f2fa] text-black"} transition-all duration-300 grid grid-cols-2`}>
      <div className="flex items-center justify-start p-3">
       
        <span ><Logo/></span>
        
      </div>
      <div
        className={`md:flex md:flex-row flex-col items-center justify-center gap-4 text-md font-times transition-[max-height] duration-1000  overflow-hidden md:max-h-none ${
          open ? "max-h-[500px]" : "max-h-0"
        } text-lg  col-span-3 row-start-2`}
      >
          <div  className="w-full text-center p-3 md:w-auto">
            <a
              className={`transition-all duration-300 p-3  hover:bg-[#7d7d7d1f] backdrop-blur-md relative line`}
              href="#about"
        onClick={(e)=>handleLinkClick(e,"about")}
            >
              About
            </a>
          </div>
           <div  className="w-full text-center p-3 md:w-auto">
            <a
              className={`transition-all duration-300 p-3  hover:bg-[#7d7d7d1f] backdrop-blur-md relative line`}
              href="#Experience"
           onClick={(e)=>{handleLinkClick(e,"Experience")}}
            >
              Experience
            </a>
          </div>
          <div  className="w-full text-center p-3 md:w-auto">
            <a
              className={`transition-all duration-300 p-3  hover:bg-[#7d7d7d1f] backdrop-blur-md relative line`}
              href="#Projects"
             onClick={(e)=>{handleLinkClick(e,"Projects")}}
  >
              Projects
            </a>
          </div>
         
       <div  className="w-full text-center p-3 md:w-auto">
            <a
              className={`transition-all duration-300 p-3  hover:bg-[#7d7d7d1f] backdrop-blur-md relative line`}
              href="#skills"
              onClick={(e)=>{handleLinkClick(e,"skills")}}
            >
              Skills
            </a>
          </div>
          <div  className="w-full text-center p-3 md:w-auto">
            <a
              className={`transition-all duration-300 p-3  hover:bg-[#7d7d7d1f] backdrop-blur-md relative line`}
              href="#contact"
              onClick={(e)=>{handleLinkClick(e,"contact")}}
            >
              Contact
            </a>
          </div>
       
      </div>
    <div className=" md:justify-self-auto justify-self-end  flex space-x-3">
        <button className="p-2 rounded-full justify-self-end md:justify-self-auto bg-[#7d7d7d1f] backdrop-blur-md hover:scale-110 transition-all duration-300" onClick={() =>{ 
          dispatch(Change(!darkMode))
          localStorage.setItem("darkMode", (!darkMode).toString());}}
           aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}>
          {darkMode ? <Sun /> : <Moon />}
          
        </button>
         <button
         aria-label="Toggle menu" aria-expanded="false" aria-controls="nav-links"
        className="md:hidden block text-2xl p-2  bg-[#7d7d7d1f] backdrop-blur-md hover:scale-110 transition-all duration-300"
        onClick={() => setOpen(!open)}
        >
          <AlignJustify />
        </button>
      </div>
    </nav>
  );
}
