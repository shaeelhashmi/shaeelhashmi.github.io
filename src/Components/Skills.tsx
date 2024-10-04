import JS from "./SVG/Skills/JS"
import ReactSVG from "./SVG/Skills/ReactSVG"
import {  useRef } from "react"
import HTML from "./SVG/Skills/HTML"
import Mongo from "./SVG/Skills/Mongo";
import Ts from "./SVG/Skills/Ts"
import Next from "./SVG/Next";
import Tailwind from "./SVG/Skills/Tailwind";
import CSS from "./SVG/Skills/CSS";
import NodeJs from "./SVG/Skills/NodeJs";
import ExpressJs from "./SVG/Skills/ExpressJs";
import C from "./SVG/Skills/C";
import Git from "./SVG/Skills/Git";
import Three from "./SVG/Skills/Three";
import GsapSvg from "./SVG/Skills/GsapSvg";
import Bootstrap from "./SVG/Skills/Bootstrap";
export default function Skills() {
  const ref=useRef<HTMLDivElement>(null)
  const Move=(direction:number)=>{
    if(window.innerWidth>640)ref.current?.scrollBy({left:direction * 140,behavior:"smooth"})
    else ref.current?.scrollBy({left:direction * 66,behavior:"smooth"})

  }
  return (
    <div className="flex items-center justify-center ">
       <div><button onClick={() => Move(-1)} className="mx-3">
       <Next rotate={true}></Next></button></div>
      <div className="flex w-[198px] overflow-x-auto justify-start items-center my-10 noScroll sm:w-[420px]" ref={ref}>
        
        <div className="flex-shrink-0 mx-2 sm:mx-5"><HTML /></div>
        <div className="flex-shrink-0 mx-2 sm:mx-5"><CSS /></div>
        <div className="flex-shrink-0 mx-2 sm:mx-5"><Ts /></div>
        <div className="flex-shrink-0 mx-2 sm:mx-5"><JS /></div>
        <div className="flex-shrink-0 mx-2 sm:mx-5"><C /></div>
        <div className="flex-shrink-0 mx-2 sm:mx-5"><Tailwind /></div>
        <div className="flex-shrink-0 mx-2 sm:mx-5"><Bootstrap/></div>
        <div className="flex-shrink-0 mx-2 sm:mx-5"><ReactSVG /></div>
        <div className="flex-shrink-0 mx-2 sm:mx-5"><Three /></div>

        <div className="flex-shrink-0 mx-2 sm:mx-5"><GsapSvg /></div>
        <div className="flex-shrink-0 mx-2 sm:mx-5 bg-white rounded-[50%]"><ExpressJs /></div>
        <div className="flex-shrink-0 mx-2 sm:mx-5"><NodeJs /></div>
        <div className="flex-shrink-0 mx-2 sm:mx-5"><Mongo /></div>
        <div className="flex-shrink-0 mx-2 sm:mx-5"><Git /></div>
      </div>
      <div><button onClick={() => Move(1)}  className="mx-3">
      <Next rotate={false}></Next></button></div>
  </div>
  )
}
