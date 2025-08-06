import Fiverr from "./SVG/Fiverr";
import Google from "./SVG/Google";
import { useSelector } from "react-redux";
import Upwork from "./SVG/Upwork";
import SkillBox from "./SkillBox";
interface ContactProps {
    GetintouchRef: React.RefObject<HTMLDivElement>;
}

export default function Contact({GetintouchRef}: ContactProps) {
  const isDarkMode = useSelector((state: any) => state.DarkMode.value);
  return (
    <section
      className="mx-auto z-10 min-h-fit overflow-hidden flex flex-col items-center justify-center px-4 py-10"
      id="contact"
      data-translate="translate-x-64"
      ref={GetintouchRef}
    >
      <h1 className="font-bold my-5 font-heading md:text-6xl text-5xl">
        Get in Touch
      </h1>
      <p className=" text-center mb-8  md:text-lg text-base font-calibri">
        Feel free to reach out for collaborations, projects, or any ideas that
        you have. I’m always open to new opportunities and conversations.
      </p>
      <div className="flex  items-center justify-center flex-wrap gap-4">
        <div>
      <a href="https://www.fiverr.com/s/8zNZXbv" className="mx-5" target="_blank">

          <SkillBox svg={<div className="flex items-center justify-center gap-4 max-w-[320px]">
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
            <a href="https://www.upwork.com/freelancers/~011e1744278fd5fcd2" className="mx-5" target="_blank">
           <SkillBox svg={
            <div className="flex items-center justify-center gap-4 max-w-[320px]">
            <Upwork/>
            <div className="flex flex-col">
            <h3 className="font-semibold text-2xl font-subheading">Upwork</h3>
              <p className="text-base   font-calibri">
                 Connect with me on Upwork for long-term collaborations or freelance tasks.
              </p>
          
            </div>
            </div>}></SkillBox></a>
            </div>
            <div>
          
                     <a href="mailto:shaeelhashmi332@gmail.com" className="mx-5" target="_blank">
            <SkillBox svg={
                <div className="flex items-center justify-center gap-4 max-w-[320px]">
                    <Google/>
                     <div className="flex flex-col">
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
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-700'} mt-12`}>
      ©  Powered by Shaeel Hashmi
    </p>
    </section>
  );
}
