import Canvas1 from "./Hero/Utils/Canvas1"
import { ReactTyped } from "react-typed"
import Github from "./SVG/Github";
import LinkedIn from "./SVG/Linkedin";
import CTABtn from "./Hero/Utils/CTABtn";
import { useSelector } from 'react-redux'
import HuggingFace from "./SVG/HuggingFace";
import Kaggle from "./SVG/Kaggle";
export default function Hero() {
  const isDarkMode = useSelector((state: any) => state.DarkMode.value)
  return (
    <header className="min-h-fit 2xl:mx-40 xl:mx-10 mx-0">
    <div className="relative   overflow-hidden flex items-center justify-end   min-h-[350px] py-10 lg:min-h-[500px] " >
    <div className="flex xl:items-start items-center justify-center w-full flex-col min-h-[300px] mt-10">
        <h1 className={`text-5xl md:text-6xl font-bold   
        xl:bg-clip-text xl:text-transparent xl:bg-gradient-to-r font-heading xl:text-start text-center z-20 ${isDarkMode
    ? 'from-blue-300 via-white to-blue-300'
    : 'from-blue-600 via-gray-900 to-blue-600'
}`}> Shaeel  Hashmi</h1>
         <ReactTyped
    className="text-2xl sm:text-3xl  font-medium xl:w-full w-3/4 xl:text-start text-center font-times  z-20  h-10"
      strings={[
        "Full-Stack Web Developer",
        "Software Engineer",
        "CS Student",
        "Open-Source Enthusiast",
      ]}
      typeSpeed={40}
      backSpeed={50}
      loop
    />
          <div>
   <p className="md:text-lg xl:block hidden text-base  mb-5 ">
I build full-stack web applications and automation tools that solve real-world problems, with a focus on clean architecture and scalable systems. I also work on AI/ML and deep learning projects.
</p>
      </div>
      <div className="z-20 flex justify-center items-center mx-auto mt-4 ">
          <a href="https://github.com/shaeelhashmi" className="mx-2" target="_blank"
          aria-label="GitHub profile" rel="noopener noreferrer">
            <Github />
          </a>
          <a href="https://www.linkedin.com/in/muhammad-shaeel-arshad-hashmi/" className="mx-2" target="_blank" 
            aria-label="Linkedin profile" rel="noopener noreferrer">
            <LinkedIn />
          </a>
              <a href="https://huggingface.co/shaeel12" className="mx-2" target="_blank" 
            aria-label="Hugging Face profile" rel="noopener noreferrer">
            <HuggingFace />
          </a>
               <a href="https://www.kaggle.com/shaeelhashmi/" className="mx-2" target="_blank" 
            aria-label="Linkedin profile" rel="noopener noreferrer">
            <Kaggle />
          </a>

      </div> 
      <div className="my-5 z-10 mx-auto">
      <CTABtn />
      </div> 


    </div>
    <div className=" xl:px-10 top-0 right-0 w-screen h-full xl:mt-10 xl:rounded-full  xl:static absolute p-0 flex justify-end ">
      <Canvas1 />
      {/* <AtomFinal/> */}
    </div>
     
    </div>

  
    </header>
  )
}
