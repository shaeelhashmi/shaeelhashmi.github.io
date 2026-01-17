import Canvas1 from "./Hero/Utils/Canvas1"
import ParticleDesign from "./ParticleDesign"
import { ReactTyped } from "react-typed"
import Github from "./SVG/Github";
import LinkedIn from "./SVG/Linkedin";
import CTABtn from "./Hero/Utils/CTABtn";

export default function Hero() {
  return (
    <header className="min-h-fit">
    <div className="relative   overflow-hidden flex flex-col items-center justify-center   min-h-[350px] py-10 " >
    <div className="flex items-center justify-center w-full flex-col min-h-[300px]">
        <h1 className="text-5xl md:text-6xl font-bold   font-heading text-center z-20">Shaeel Hashmi</h1>
         <ReactTyped
    className="text-2xl sm:text-3xl  font-medium  mb-5 w-3/4 text-center font-times  z-20  h-10"
      strings={[
        "Full-stack web developer",
        "Software engineer",
        "CS student",
        "Open-source enthusiast",
      ]}
      typeSpeed={40}
      backSpeed={50}
      loop
    />
      <div className="z-20 flex justify-center mt-4 ">
          <a href="https://github.com/shaeelhashmi" className="mx-2" target="_blank"
          aria-label="GitHub profile" rel="noopener noreferrer">
            <Github />
          </a>
          <a href="https://www.linkedin.com/in/muhammad-shaeel-arshad-hashmi/" className="mx-2" target="_blank" 
            aria-label="Linkedin profile" rel="noopener noreferrer">
            <LinkedIn />
          </a>
      </div> 
    </div>
      {/* <ParticleDesign /> */}
      <Canvas1 />
      <CTABtn />
    </div>

  
    </header>
  )
}
