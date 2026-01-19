import Cards from "./Utils/Cards";
export default function Introduction({ aboutRef }: { aboutRef: React.RefObject<HTMLDivElement> }) {
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

    </section>
  )
}
