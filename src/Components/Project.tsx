import ProjectBox from "./ProjectBox"
import ReactSVG from "./SVG/Skills/ReactSVG"
import GoSvg from "./SVG/Skills/GoSvg"
import NodeJs from "./SVG/Skills/NodeJs"
import ExpressJs from "./SVG/Skills/ExpressJs"
import MongoDB from "./SVG/Skills/Mongo"
import MySql from "./SVG/Skills/MySql"
import HTML from "./SVG/Skills/HTML"
import CSS from "./SVG/Skills/CSS"
import Ts from "./SVG/Skills/Ts"
import JS from "./SVG/Skills/JS"
import C from "./SVG/Skills/C"
import Tailwind from "./SVG/Skills/Tailwind"
export default function Project() {
  return (
    <div className="flex items-center justify-evenly w-full md:my-12 font-franklin my-5  gap-20 flex-wrap " >

       <div className="flex-shrink-0 mx-5"><ProjectBox description="A real-time chat application that allows users to exchange messages instantly, manage friend requests, and store user information securely for ongoing access of user data." Title='Chat application'   Link="https://github.com/shaeelhashmi/Chat-application"  SVG={[Ts,Tailwind,ReactSVG, GoSvg,MySql]} image={"https://cdn.jsdelivr.net/gh/shaeelhashmi/shaeelhashmi.github.io/src/asset/Images/smartphone-8930867.jpg"}/></div>
       <div className="flex-shrink-0 mx-5"><ProjectBox description="This project delivers a personalized news recommendation system that curates articles based on individual user interests, manages user accounts, and gathers content from various online sources." Title='Recommendation algorithm'   Link="https://github.com/shaeelhashmi/news-recommendation-algorithm" SVG={[Ts,Tailwind,ReactSVG, GoSvg,MySql]} image={"https://cdn.jsdelivr.net/gh/shaeelhashmi/shaeelhashmi.github.io/src/asset/Images/network-3535305.jpg"}/></div>
       <div className="flex-shrink-0 mx-5"><ProjectBox description="This app enables users to securely create, update, and delete personal notes, with a streamlined and protected login experience integrated with google auth to ensure safe and authorized access." Title='Notes app'   Link="https://github.com/shaeelhashmi/Notes-app" SVG={[ReactSVG,Tailwind, ExpressJs,NodeJs,MongoDB]} image={"https://cdn.jsdelivr.net/gh/shaeelhashmi/shaeelhashmi.github.io/src/asset/Images/notebook-1840276.jpg"}/></div>
       <div className="flex-shrink-0 mx-5"><ProjectBox description="This is a timetable management system that lets users create custom schedules and perform various time-related tasks, such as managing assigned personnel and updating schedule entries." Title='Time table manager'   Link="https://github.com/shaeelhashmi/Project-TMS" SVG={[HTML, CSS,JS, NodeJs,ExpressJs]} image={"https://cdn.jsdelivr.net/gh/shaeelhashmi/shaeelhashmi.github.io/src/asset/Images/clock-7258194.jpg"}/></div>
       <div className="flex-shrink-0 mx-5"><ProjectBox description="This is an arcade-style space shooter game designed with structured programming concepts, offering organized gameplay mechanics and efficient data handling for a smooth user experience." Title='Space Invaders'   Link="https://github.com/shaeelhashmi/spaceInvaders" SVG={[C]} image={"https://cdn.jsdelivr.net/gh/shaeelhashmi/shaeelhashmi.github.io/src/asset/Images/aliens-4648205.jpg"}/></div>
  
    </div>
  )
}
