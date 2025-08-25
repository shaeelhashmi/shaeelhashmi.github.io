import { useSelector } from "react-redux"
export default function Introduction({ aboutRef }: { aboutRef: React.RefObject<HTMLDivElement> }) {
  const isDarkMode = useSelector((state: any) => state.DarkMode.value);
  return (
    <section  id="about" data-translate="translate-x-64" ref={aboutRef}>
        <h1 className=" font-bold   font-heading md:text-6xl text-5xl text-center">About</h1>
        <div className=" grid xl:grid-cols-[30%_1fr]  grid-cols-1  gap-10 mt-10">
        <div className={` w-full transition-all duration-300 ease-in-out rounded-xl ${isDarkMode ? "bg-[#0d0727]" : "bg-[#f0ddfd]"} hover:scale-105`}>
        <div className={`relative card  w-full  rounded-xl   ${isDarkMode ? "bg-[#0d0727]" : "bg-[#f0ddfd] dark-mode"} md:after:w-[105%] md:after:h-[105%] after:w-[103%] after:h-[103%] h-full xs:p-8 p-5 `}>
          <h2 className="font-semibold text-center md:text-4xl text-3xl font-franklin">Introduction</h2>
        <p className="md:text-lg text-base text-left mt-5">Hi, I’m a full-stack developer and a Computer Science student at Bahria University who’s passionate about turning ideas into meaningful digital solutions. I love tackling real-world problems, whether it’s through building complete web applications or automating complex data tasks. I’m constantly exploring new ways to improve my work, contribute to open-source projects, and grow as a developer with every challenge I take on.</p>
        </div>
        </div>
         <div className={`hover:scale-105  transition-all duration-300 ease-in-out rounded-xl ${isDarkMode ? "bg-[#0d0727]" : "bg-[#f0ddfd]"} lg:w-full`}>
        <div className={`relative card xs:p-8 p-5  h-full rounded-xl   ${isDarkMode ? "bg-[#0d0727]" : "bg-[#f0ddfd] dark-mode"} lg:after:w-[105%] lg:after:h-[105%] after:w-[103%] after:h-[103%] flex flex-col justify-center items-center gap-4 `}>
          <h2 className="font-semibold text-center md:text-4xl text-3xl font-franklin">What I Can Build for You</h2>
      <div className="mt-5 space-y-4">
       <div className=" backdrop-blur-md  bg-[#402d9513] rounded-lg xs:p-3 p-2">
        <h3 className="font-subheading xs:text-2xl text-xl font-semibold text-left">Full-stack websites</h3>
        <p className="md:text-lg text-base text-left font-calibri">I specialize in building responsive and interactive web applications using the MERN stack (MongoDB, Express.js, React, and Node.js) and other technologies like Golang and MySQL. My goal is to create seamless user experiences while ensuring efficient backend performance.</p>
       </div>
       <div className="backdrop-blur-md  bg-[#402d9513] rounded-lg xs:p-3 p-2">
  <h3 className="font-subheading xs:text-2xl text-xl font-semibold text-left">Website scrapers</h3>
  <p className="md:text-lg text-base text-left font-calibri">
    I build fast and reliable scrapers to extract structured data from websites using tools like Selenium with Python. Whether it's automating data collection or powering dynamic content, I ensure accuracy, efficiency, and maintainability.
  </p>
</div>
</div>

        </div>
        </div>
        </div>
    </section>
  )
}
