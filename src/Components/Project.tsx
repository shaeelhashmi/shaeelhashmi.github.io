import ProjectBox from "./ProjectBox"
import Next from "./SVG/Next"
import { useRef, useState } from "react"
export default function Project() {
  const ref=useRef<HTMLDivElement>(null)
  const [scroll,isScroll]=useState(false)
  const Move=(direction:number)=>{
    if (ref.current && !scroll) {
      isScroll(true)
      const { scrollLeft, clientWidth, scrollWidth } = ref.current;
      const maxScrollLeft = scrollWidth - clientWidth;
      const scrollAmount = clientWidth;
      const newScrollLeft = Math.min(maxScrollLeft, Math.max(0, scrollLeft + direction * scrollAmount));
      console.log(newScrollLeft)
      ref.current.scrollTo({ left: newScrollLeft, behavior: "smooth" });
      setTimeout(() => {
        isScroll(false)
      },500)
    }
  }
  return (
    <div className="flex items-center justify-center w-full md:my-12 font-franklin" >
        <div><button onClick={() => Move(-1)} className="mx-3 ">
        <Next rotate={true}></Next></button></div>
       <div className="flex items-center justify-start my-10 overflow-x-auto noScroll xs:w-[260px] sm:w-[260px] md:w-[660px] w-[220px] " ref={ref}> 
       <div className="flex-shrink-0 mx-5"><ProjectBox description="A real-time chat app using WebSockets with a Go backend and SQL database. Supports messaging, friend requests, and persistent user data management." Title='Chat application'   Link="https://github.com/shaeelhashmi/Chat-application"/></div>
       <div className="flex-shrink-0 mx-5"><ProjectBox description="This project builds a personalized News Recommendation System on data scrapped from different websites using Go with SQL for managing user interests and authorization" Title='Recommendation algorithm'   Link="https://github.com/shaeelhashmi/news-recommendation-algorithm"/></div>
       <div className="flex-shrink-0 mx-5"><ProjectBox description="This app allows users to securely create, update, and delete notes. The authentication system is implemented using Google OAuth2, ensuring a seamless and secure login experience." Title='Notes app'   Link="https://github.com/shaeelhashmi/Notes-app"/></div>
       <div className="flex-shrink-0 mx-5"><ProjectBox description="This is a timetable management system that allows users to create custom timetables and perform some added functions for manipulating the time like adding or removing faculty members etc." Title='Time table manager'   Link="https://github.com/shaeelhashmi/Project-TMS"/></div>
       <div className="flex-shrink-0 mx-5"><ProjectBox description="This is a space shooter game made using the C++ framework SFML, implementing the concepts of OOP and utilizing the C++ Standard Template Library for easier data control." Title='Space Invaders'   Link="https://github.com/shaeelhashmi/spaceInvaders"/></div>
       </div>
       <div><button onClick={() => Move(1)} className="mx-3">
       <Next rotate={false}></Next></button></div>
    </div>
  )
}
