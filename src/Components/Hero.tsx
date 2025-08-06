import Canvas1 from "./Canvas1"
import ParticleDesign from "./ParticleDesign"
import { ReactTyped } from "react-typed"
import Github from "./SVG/Github";
import LinkedIn from "./SVG/Linkedin";
import { useSelector } from "react-redux";
import CTABtn from "./Utils/CTABtn";
interface props{
  aboutRef: React.RefObject<HTMLDivElement>;
}
export default function Hero({ aboutRef }: props) {
  const isDarkMode = useSelector((state: any) => state.DarkMode.value);
  return (
    <header className="min-h-fit  mt-16 " >
    <div className="relative  mx-auto overflow-hidden flex flex-col items-center justify-center   min-h-[350px] py-10 " >
    <div className="flex items-center justify-center w-full flex-col min-h-[300px]">
        <h1 className="text-5xl md:text-6xl font-bold   font-heading text-center z-20">Shaeel Hashmi</h1>
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
      <ParticleDesign />
      <Canvas1 />
      <CTABtn />
    </div>
    <section className=" flex items-center justify-center flex-col  p-3 text-center px-10 " id="about" data-translate="translate-x-64" ref={aboutRef}>
        <h1 className=" font-bold  my-5 font-heading md:text-6xl text-5xl text-center">About</h1>
        <div className="flex    gap-20 md:my-12 my-5 lg:flex-row flex-col mx-auto">
        <div className={` lg:w-[400px] w-full transition-all duration-300 ease-in-out rounded-xl ${isDarkMode ? "bg-[#0d0727]" : "bg-[#f0ddfd]"} hover:scale-105`}>
        <div className={`relative card  w-full  rounded-xl   ${isDarkMode ? "bg-[#0d0727]" : "bg-[#f0ddfd] dark-mode"} md:after:w-[105%] md:after:h-[105%] after:w-[103%] after:h-[103%] h-full `}>
          <h1 className="font-semibold text-center md:text-4xl text-3xl font-franklin">Introduction</h1>
        <p className="md:text-lg text-base text-left mt-[1rem]">Hi, I’m a full-stack developer and a Computer Science student at Bahria University who’s passionate about turning ideas into meaningful digital solutions. I love tackling real-world problems, whether it’s through building complete web applications or automating complex data tasks. I’m constantly exploring new ways to improve my work, contribute to open-source projects, and grow as a developer with every challenge I take on.</p>
        </div>
        </div>
         <div className={`hover:scale-105  transition-all duration-300 ease-in-out rounded-xl ${isDarkMode ? "bg-[#0d0727]" : "bg-[#f0ddfd]"} lg:w-[60%]`}>
        <div className={`relative card  h-full rounded-xl   ${isDarkMode ? "bg-[#0d0727]" : "bg-[#f0ddfd] dark-mode"} lg:after:w-[105%] lg:after:h-[105%] after:w-[103%] after:h-[103%] flex flex-col justify-center items-center gap-4 `}>
          <h1 className="font-semibold text-center md:text-4xl text-3xl font-franklin">What I Can Build for You</h1>
       <div className=" backdrop-blur-md p-4 bg-[#402d9513] rounded-lg">
        <h2 className="font-subheading text-2xl font-semibold text-left">Full-stack websites</h2>
        <p className="md:text-lg text-base text-left">I specialize in building responsive and interactive web applications using the MERN stack (MongoDB, Express.js, React, and Node.js) and other technologies like Golang and MySQL. My goal is to create seamless user experiences while ensuring efficient backend performance.</p>
       </div>
       <div className="backdrop-blur-md p-4 bg-[#402d9513] rounded-lg">
  <h2 className="font-subheading text-2xl font-semibold text-left">Website scrapers</h2>
  <p className="md:text-lg text-base text-left">
    I build fast and reliable scrapers to extract structured data from websites using tools like Selenium with Python. Whether it's automating data collection or powering dynamic content, I ensure accuracy, efficiency, and maintainability.
  </p>
</div>

        </div>
        </div>
        </div>
    </section>
    </header>
  )
}
