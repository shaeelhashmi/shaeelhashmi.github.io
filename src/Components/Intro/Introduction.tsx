import { useSelector } from "react-redux"
import Cards from "./Utils/Cards";
export default function Introduction({ aboutRef }: { aboutRef: React.RefObject<HTMLDivElement> }) {
  const isDarkMode = useSelector((state: any) => state.DarkMode.value);
  return (
    <section  id="about" data-translate="translate-x-64" ref={aboutRef}>
        <h1 className=" font-bold   font-heading md:text-6xl text-5xl text-center">About</h1>
        

             <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 sm:gap-8 lg:gap-10 mt-10">
          <div className="hover:scale-105 transition-all duration-300 ease-in-out rounded-xl  lg:col-span-3 col-span-1 ">
             <Cards className=" " >
          <h2 className="font-semibold md:text-4xl text-3xl font-franklin mb-1">
            Introduction
          </h2>
          <p className="md:text-lg text-base text-left mt-5">
I build full-stack web applications and automation tools that solve real-world problems, with a focus on clean architecture and scalable systems. I also work on AI/ML and deep learning projects.
</p>
          </Cards>
          </div>
            <div className="hover:scale-105 transition-all duration-300 ease-in-out rounded-xl ">
               <Cards>
                   <div >
          <h2 className="font-semibold md:text-4xl text-3xl font-franklin mb-1">
            Education
          </h2>
          <p className="md:text-lg text-base text-left mt-5">
 Computer Science Student, Bahria University Islamabad
</p>
          </div>
       </Cards>
            </div>
            <div className="hover:scale-105 transition-all duration-300 ease-in-out rounded-xl ">

              <Cards>
            <div>
           <h2 className="font-semibold md:text-4xl text-3xl font-franklin mb-1">
            Interests
          </h2>
          <ul className="list-disc list-inside md:text-lg text-base text-left mt-5 space-y-2">
            <li>Full-stack web development</li>
            <li>Automation & web scraping</li>
            <li>AI/ML & Deep learning</li>
          </ul>
        </div>
           </Cards>
            </div>
            <div className="hover:scale-105 transition-all duration-300 ease-in-out rounded-xl ">
            <Cards>
            <div>
           <h2 className="font-semibold md:text-4xl text-3xl font-franklin mb-1">
            Honors & Awards
          </h2>
          <ul className="list-disc list-inside md:text-lg text-base text-left mt-5 space-y-2">
            <li>Placed 24 in 2025 ICPC regionals</li>
            <li>Ranked first runner up in Compec 2025</li>
            <li>Placed 16 in NasCon 2025</li>
            <li>Placed 108 in ICPC prelims 2023</li>
          </ul>
        </div>
           </Cards>
            </div>
           
   
        
   </div>    
  

        {/* <div className=" gap-10 mt-10">
        <div className={` w-full transition-all duration-300 ease-in-out rounded-xl ${isDarkMode ? "bg-[#0d0727]" : "bg-[#f0ddfd]"} hover:scale-105`}>
        <div className={` p-5 `}>
          <h2 className="font-semibold text-center md:text-4xl text-3xl font-franklin">Introduction</h2>
<p className="md:text-lg text-base text-left mt-5">
 I build full-stack web applications and automation tools focused on solving real-world problems. I care about clean architecture, performance, and systems that scale beyond demos. I enjoy working across the stack and understanding how design decisions impact both users and infrastructure.
</p>
        </div>
        </div> */}
         {/* <div className={`hover:scale-105  transition-all duration-300 ease-in-out rounded-xl ${isDarkMode ? "bg-[#0d0727]" : "bg-[#f0ddfd]"} lg:w-full`}>
        <div className={`relative card xs:p-8 p-5  h-full rounded-xl   ${isDarkMode ? "bg-[#0d0727]" : "bg-[#f0ddfd] dark-mode"} lg:after:w-[105%] lg:after:h-[105%] after:w-[103%] after:h-[103%] flex flex-col justify-center items-center gap-4 `}>
          <h2 className="font-semibold text-center md:text-4xl text-3xl font-franklin">What I Can Build for You</h2>
      <div className="mt-5 space-y-4">
       <div className=" backdrop-blur-md  bg-[#402d9513] rounded-lg xs:p-3 p-2">
        <h3 className="font-subheading xs:text-2xl text-xl font-semibold text-left">Full-stack websites</h3>
        <p className="md:text-lg text-base text-left font-calibri">I specialize in building responsive and interactive web applications using the MERN stack (MongoDB, Express.js, React, and Node.js) and other technologies like Golang and MySQL. My goal is to create seamless user experiences while ensuring efficient backend performance.</p>
       </div>
       <div className="backdrop-blur-md  bg-[#402d9513] rounded-lg xs:p-3 p-2 space-y-4">
  <h3 className="font-subheading xs:text-2xl text-xl font-semibold text-left">Website scrapers</h3>
  <p className="md:text-lg text-base text-left font-calibri">
    I build fast and reliable scrapers to extract structured data from websites using tools like Selenium with Python. Whether it's automating data collection or powering dynamic content, I ensure accuracy, efficiency, and maintainability.
  </p>
</div>
       <div className="backdrop-blur-md  bg-[#402d9513] rounded-lg xs:p-3 p-2">
<h3 className="font-subheading xs:text-2xl text-xl font-semibold text-left">Deep Learning & ML Models</h3>
<p className="md:text-lg text-base text-left font-calibri">
I design and train deep learning and machine learning models for classification, prediction, and pattern recognition using frameworks like TensorFlow, focusing on data preprocessing, optimization, and real-world deployment.
</p>


</div>
</div>

        </div>
        </div> */}
        {/* </div> */}
    </section>
  )
}
