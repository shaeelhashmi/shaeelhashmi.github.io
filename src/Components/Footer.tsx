
import {  useRef } from "react"
import Fiverr from "./SVG/Fiverr"
import Google from "./SVG/Google"
import Upwork from "./SVG/Upwork"
export default function Footer() {
  const ref=useRef(null)
   const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  return (
    <footer
      className=" border-black  h-[200px] border-t-2 dark:border-white shadow-[0_0_10px_2px_rgba(0,0,0)] dark:shadow-[0_0_10px_2px_rgba(255,255,255)] p-2 flex flex-col items-center justify-center text-center space-y-4t"
      ref={ref}
      style={{
         background: isDarkMode ? "linear-gradient(90deg, #000000, #12001a, #000000)" : "linear-gradient(90deg,rgb(255 234 234), rgb(240 209 253), rgb(255 234 234))",
      }}
    >
      <h1 className="text-3xl md:text-5xl font-bold  mb-4 font-heading ">
        Contact Me
      </h1>
      <div className="flex  items-center justify-center">
         <a href="mailto:shaeelhashmi332@gmail.com" className="mx-5" target="_blank">
          <Google/></a> 
         <a href="https://www.fiverr.com/shaeelhashmi" className="mx-5" target="_blank">
          <Fiverr/></a>
            <a href="https://www.upwork.com/freelancers/~011e1744278fd5fcd2" className="mx-5" target="_blank">
          <Upwork/></a>
          </div>
    </footer>
  )
}
