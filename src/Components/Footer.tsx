import { useDispatch } from "react-redux"
import { setShow } from "../Slice/ShowData"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"
export default function Footer() {
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
    <footer className="z-10 flex flex-col items-center justify-between p-2 overflow-hidden md:flex-row" ref={ref}>
    <button className='w-[200px] p-3   rounded-lg text-lg' onClick={() => dispatch(setShow('home'))}>
        Home
      </button>
      <button  className='w-[200px] p-3   rounded-lg text-lg' onClick={() => dispatch(setShow('skills'))}>
        Skills
      </button>
      <button className='w-[200px] p-3   rounded-lg text-lg' onClick={() => dispatch(setShow('projects'))}>
        Projects
      </button>
      
    </footer>
  )
}
