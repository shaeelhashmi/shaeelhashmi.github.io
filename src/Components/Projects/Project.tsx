import ProjectBox from "./Utils/ProjectBox"
import ReactSVG from "../SVG/Skills/ReactSVG"
import GoSvg from "../SVG/Skills/GoSvg"
import NodeJs from "../SVG/Skills/NodeJs"
import ExpressJs from "../SVG/Skills/ExpressJs"
import MongoDB from "../SVG/Skills/Mongo"
import MySql from "../SVG/Skills/MySql"
import HTML from "../SVG/Skills/HTML"
import CSS from "../SVG/Skills/CSS"
import Ts from "../SVG/Skills/Ts"
import JS from "../SVG/Skills/JS"
import C from "../SVG/Skills/C"
import Tailwind from "../SVG/Skills/Tailwind"
import sentiment from "../../asset/Images/sentiment.jpg"
import salary from "../../asset/Images/salary.png"
import Python from "../SVG/Skills/Python"
import urduClassifier from "../../asset/Images/urdu classifier.png"
export default function Project(props:{projectRef: React.RefObject<HTMLDivElement>}) {
  return (
    <section   ref={props.projectRef} data-translate="translate-x-64" id="Projects">
    <h1 className="font-bold   font-heading md:text-6xl text-5xl  text-center ">Projects</h1>
    <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 font-franklin   xl:gap-20 lg:gap-32 gap-8 md:gap-8 mt-10">

       <ProjectBox description="A real-time chat application that enables users to exchange messages instantly, manage friend requests seamlessly, and securely store user information for continuous and reliable access to user data." Title='Chat application'   Link="https://github.com/shaeelhashmi/Chat-application"  SVG={[Ts,Tailwind,ReactSVG, GoSvg,MySql]} image={"6v7y6cmazsw"} isVideo={true}/>
       <ProjectBox description="This project delivers a personalized news recommendation system that curates articles based on individual user interests, manages user accounts, and gathers content from various online sources." Title='Recommendation algorithm'   Link="https://github.com/shaeelhashmi/news-recommendation-algorithm" SVG={[Ts,Tailwind,ReactSVG, GoSvg,MySql]} image={"Fy6Hpvvko6E"} isVideo={true}/>
       <ProjectBox description="This app enables users to securely create, update, and delete personal notes, offering a streamlined and fully protected login experience integrated with Google Auth to ensure safe, authorized, and convenient access." Title='Notes app'   Link="https://github.com/shaeelhashmi/Notes-app" SVG={[ReactSVG,Tailwind, ExpressJs,NodeJs,MongoDB]} image={"WfFoKPgdr2Y"} isVideo={true}/>
       <ProjectBox description="This is a timetable management system that lets users create custom schedules and perform various time-related tasks, such as managing assigned personnel and updating schedule entries." Title='Time table manager'   Link="https://github.com/shaeelhashmi/Project-TMS" SVG={[HTML, CSS,JS, NodeJs,ExpressJs]} image={"mTxBglTX_z0"} isVideo={true}/>
       <ProjectBox description="This is an arcade-style space shooter game designed with structured programming concepts, offering organized gameplay mechanics and efficient data handling for a smooth user experience." Title='Space Invaders'   Link="https://github.com/shaeelhashmi/spaceInvaders" SVG={[C]} image={"ooQT56DBhmI"} isVideo={true}/>
        <ProjectBox description="This is a sentiment analysis system designed with structured programming concepts, offering organized text preprocessing,EDA, data cleaning and efficient classification for accurate sentiment detection." Title='Sentiment Analyzer'   Link="https://github.com/shaeelhashmi/Sentiment-Analyzer" SVG={[Python]} image={"https://www.kaggle.com/code/shaeelhashmi/sentiment-analyzer"} isVideo={false} img={sentiment}/>
        <ProjectBox description="Predicts employee salaries using data cleaning, feature engineering, encoding of categorical variables, and trains Linear Regression, SVR, and Random Forest models with hyperparameter tuning." Title='Salary predictor'   Link="https://github.com/shaeelhashmi/Salary-Predictor" SVG={[Python]} image={"https://www.kaggle.com/code/shaeelhashmi/salary-predictor"} isVideo={false} img={salary}/>
        <ProjectBox description="A CNN-based character classifier that accurately recognizes and decodes Urdu characters from images, learning intricate patterns to recognize and classify both handwritten and printed Urdu texts efficiently." Title='Urdu character classifier'   Link="https://github.com/shaeelhashmi/Urdu-character-classifier" SVG={[Python]} image={"https://www.kaggle.com/code/shaeelhashmi/cnn-urdu-text-classifier"} isVideo={false} img={urduClassifier}/>
  
    </div>
       </section>
  )
}
