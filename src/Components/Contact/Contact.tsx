import Fiverr from "../SVG/Fiverr";
import Google from "../SVG/Google";
import { useSelector } from "react-redux";
import Upwork from "../SVG/Upwork";
import SkillBox from "../Skills/Utils/SkillBox";
interface ContactProps {
    GetintouchRef: React.RefObject<HTMLDivElement>;
}

export default function Contact({GetintouchRef}: ContactProps) {
  const isDarkMode = useSelector((state: any) => state.DarkMode.value);
  return (
    <section
      id="contact"
      data-translate="translate-x-64"
      ref={GetintouchRef}
    >
      <h1 className="font-bold text-center font-heading md:text-6xl text-5xl  mt-10">
        Get in Touch
      </h1>
      <p className=" text-center  md:text-lg text-base font-calibri mt-5">
        Feel free to reach out for collaborations, projects, or any ideas that
        you have. I’m always open to new opportunities and conversations.
      </p>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 sm:gap-8 lg:gap-10 mt-5">
        <div>
      <a href="https://www.fiverr.com/s/8zNZXbv" target="_blank">

          <SkillBox size="sm:max-w-[320px] lg:max-w-full"  svg={<div className="flex items-center justify-center gap-4 w-full ">
            <Fiverr/>
            <div className="flex flex-col">
                <h3 className="font-semibold text-2xl font-subheading">Fiverr</h3>
              <p className="text-base   font-calibri">
                  Visit my Fiverr profile to hire me for web development or custom projects.
              </p>
           
            </div>
            </div>}></SkillBox>
            </a>
            </div>
            <div>
            <a href="https://www.upwork.com/freelancers/~011e1744278fd5fcd2" target="_blank">
           <SkillBox size="sm:max-w-[320px] lg:max-w-full" svg={
            <div className="flex items-center justify-center gap-4 ">
            <Upwork/>
            <div >
            <h3 className="font-semibold text-2xl font-subheading">Upwork</h3>
              <p className="text-base   font-calibri">
                 Connect with me on Upwork for long-term collaborations or freelance tasks.
              </p>
          
            </div>
            </div>}></SkillBox></a>
            </div>
            <div className="lg:col-span-1 sm:col-span-2 col-span-1 mx-auto">
          
                     <a href="mailto:shaeelhashmi332@gmail.com" target="_blank">
            <SkillBox size="sm:max-w-[320px] lg:max-w-full" svg={
                <div className="flex items-center justify-center gap-4 ">
                    <Google/>
                     <div >
            <h3 className="font-semibold text-2xl font-subheading">Gmail</h3>
              <p className="text-base   font-calibri">
                   Prefer reaching out directly? Send me an email for any ideas that you have.
              </p>

            </div>
                </div>
            }></SkillBox>
          </a> 
          </div>
   
          </div>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-700'} mt-5 text-center`}>
      ©  Powered by Shaeel Hashmi
    </p>
    </section>
  );
}
