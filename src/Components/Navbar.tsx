import { AlignJustify } from "lucide-react";
import { useState } from "react";
import { Sun } from "lucide-react";
import { Change } from "./Slice/DarkMode";
import { useDispatch } from "react-redux";
import { Moon } from "lucide-react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
interface NavBarProps {
  handleScroll: () => void;
}
export default function NavBar(props: NavBarProps) {
const darkMode = useSelector((state: any) => state.DarkMode.value);
const dispatch = useDispatch();
const [open, setOpen] = useState(false);
const { handleScroll } = props;
useEffect(() => {
  const isDarkMode = localStorage.getItem("darkMode");
  if (isDarkMode === null) {
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    dispatch(Change(prefersDark));
  } else {
    dispatch(Change(isDarkMode === "true"));
  }
},[]);
const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>,name:string) => {
    e.preventDefault(); 
    if (name === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    setOpen(false);
    const target = document.getElementById(name);
    if (target) {
      window.removeEventListener("scroll", handleScroll);
      target.scrollIntoView({ behavior: "smooth" });

      // Wait for scroll to finish (adjust time as needed)
      setTimeout(() => {
        handleScroll();
        window.addEventListener("scroll", handleScroll);
      }, 500); // time depends on how long your scroll takes
    }
  }

  return (
    <nav className={` fixed top-0 w-full z-50 flex flex-col md:flex-row  justify-between p-2  ${darkMode ?"bg-[rgb(5,5,18)] text-white":"bg-[#fffbff] text-black"} transition-all duration-300`}>
      <div className="flex items-center justify-start p-3">
        <button
          className="md:hidden block text-2xl p-2 rounded-full"
        onClick={() => setOpen(!open)}
        >
          <AlignJustify />
        </button>
        <h1 className="text-2xl font-bold font-heading ml-3">Portfolio</h1>
        
      </div>
      <div
        className={`md:flex md:flex-row flex-col items-center justify-center gap-4 text-md font-times transition-[max-height] duration-1000  overflow-hidden md:max-h-none ${
          open ? "max-h-[500px]" : "max-h-0"
        } text-lg `}
      >
          <div  className="w-full text-center p-3 md:w-auto">
            <a
              className={`transition-all duration-300 p-3 border-b-2 ${darkMode ? "border-[rgb(5,5,18)] hover:border-[#e9e9ff]":"border-[#fffbff] hover:border-[rgb(5_0_55)]"} `}
              href="#"
        onClick={(e)=>handleLinkClick(e,"#")}
            >
              About
            </a>
          </div>
          <div  className="w-full text-center p-3 md:w-auto">
            <a
              className={`transition-all duration-300 p-3 border-b-2 ${darkMode ? "border-[rgb(5,5,18)] hover:border-[#e9e9ff]":"border-[#fffbff] hover:border-[rgb(5_0_55)]"}`}
              href="#skills"
              onClick={(e)=>{handleLinkClick(e,"skills")}}
            >
              Skills
            </a>
          </div>
          <div  className="w-full text-center p-3 md:w-auto">
            <a
              className={`transition-all duration-300 p-3 border-b-2 ${darkMode ? "border-[rgb(5,5,18)] hover:border-[#e9e9ff]":"border-[#fffbff] hover:border-[rgb(5_0_55)]"}`}
              href="#Projects"
             onClick={(e)=>{handleLinkClick(e,"Projects")}}
  >
              Projects
            </a>
          </div>
          <div  className="w-full text-center p-3 md:w-auto">
            <a
              className={`transition-all duration-300 p-3 border-b-2 ${darkMode ? "border-[rgb(5,5,18)] hover:border-[#e9e9ff]":"border-[#fffbff] hover:border-[rgb(5_0_55)]"}`}
              href="#Experience"
           onClick={(e)=>{handleLinkClick(e,"Experience")}}
            >
              Experience
            </a>
          </div>
       
      </div>
      <div>
        <button className="p-2 rounded-full fixed right-3 top-4" onClick={() =>{ 
          dispatch(Change(!darkMode))
          localStorage.setItem("darkMode", (!darkMode).toString());}}>
          {darkMode ? <Sun /> : <Moon />}
        </button>
      </div>
    </nav>
  );
}
