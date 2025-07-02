import Canvas1 from "./Canvas1"
import ParticleDesign from "./ParticleDesign"
import { ReactTyped } from "react-typed"
import Github from "./SVG/Github";
import LinkedIn from "./SVG/Linkedin";
export default function Hero() {
  return (
    <header className="min-h-fit mb-12 mt-16" >
    <div className="relative w-screen overflow-hidden flex flex-col items-center justify-center   min-h-[350px]" >
    <div className="flex items-center justify-center w-full flex-col min-h-[300px]">
        <p className="text-5xl md:text-6xl font-bold   font-heading text-center z-20">Shaeel Hashmi</p>
         <ReactTyped
    className="text-2xl sm:text-3xl  font-medium  mb-5 w-3/4 mx-auto font-times  z-20 text-center h-10"
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
          <a href="https://github.com/shaeelhashmi" className="mx-2" target="_blank">
            <Github />
          </a>
          <a href="https://www.linkedin.com/in/muhammad-shaeel-arshad-hashmi/" className="mx-2" target="_blank" >
            <LinkedIn />
          </a>
      </div> 
    </div>
      <ParticleDesign />
      <Canvas1 />
      
    </div>
    <div className="w-full flex items-center justify-center flex-col max-w-[700px] p-3 mx-auto text-center">
        <h1 className="md:text-6xl text-5xl my-5 font-bold font-heading">About</h1>
        <p className="sm:text-lg ">Hi, I’m a passionate full-stack developer who loves turning complex problems into elegant web solutions. Whether it’s building real-time apps with WebSockets and Go,crafting interactive UIs with React, making fullstack apps using Node.js and Express or working with databases like MongoDB and SQL, I aim to create clean, high-performance experiences. I'm also an active open-source contributor and a CS student at Bahria University.</p>
    </div>
    </header>
  )
}
