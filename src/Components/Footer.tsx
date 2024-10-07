import { useDispatch, useSelector } from "react-redux"
import { setShow } from "../Slice/ShowData"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import {  useRef } from "react"
export default function Footer() {
  const data=useSelector((state:any)=>state.ShowData.name);
  const ref=useRef(null)
  useGSAP(
    () => {
      gsap.from(ref.current, { opacity: 0, duration: 3, ease: "bounce.in" })
      gsap.to(ref.current, { opacity: 1, duration:3, ease: "bounce.out" })
    },
    { scope: ref }
  )
  const dispatch = useDispatch()
  return (
    <footer className="z-10 grid  w-[90vw] grid-cols-3 p-2 mb-0 xsh:mt-2 place-content-center mx-auto" ref={ref}>
      <div className="mx-auto">
      <button className='sm:w-[220px] w-[100px] p-3   rounded-lg sm:text-lg text-base mx-2  text-center' onClick={() => dispatch(setShow('home'))}>
        Home
      </button>
      <div className={`sm:w-[220px] w-[100px] h-[2px] bg-white mx-auto ${data==='home'|| data==''?'scale-x-100':'scale-x-0'} origin-left duration-500 transition-all `} ></div>
      </div>
   
      <div className="mx-auto"><button  className='sm:w-[220px] w-[100px] p-3   rounded-lg sm:text-lg text-base mx-2 text-center' onClick={() => dispatch(setShow('skills'))}>
        Skills
      </button>
      <div className={`sm:w-[220px] w-[100px] h-[2px] bg-white mx-auto ${data==='skills'?'scale-x-100':'scale-x-0'} origin-left duration-500 transition-all`} ></div></div> 
      <div className="mx-auto">
      <button className='sm:w-[220px] w-[100px] p-3   rounded-lg sm:text-lg text-base mx-2 text-center' onClick={() => dispatch(setShow('projects'))}>
        Projects
      </button>
      <div className={`sm:w-[220px] w-[100px] h-[2px] bg-white mx-auto ${data==='projects'?'scale-x-100':'scale-x-0'} origin-left duration-500 transition-all`} ></div>
      </div>
    
      
    </footer>
  )
}
