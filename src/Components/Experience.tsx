import { useSelector } from "react-redux";

export default function Experience({ExperienceRef}: {ExperienceRef: React.RefObject<HTMLDivElement>}) {
  const isDarkMode = useSelector((state: any) => state.DarkMode.value);

  return (
     <section  ref={ExperienceRef} data-translate="-translate-x-64" id="Experience">
        <h1 className="md:text-6xl text-5xl font-bold   font-heading  text-center">Experience</h1>   

      <div className=" w-full  grid lg:grid-cols-[auto_auto_1fr]  grid-cols-1 gap-10 mt-10 sm:p-8 px-2 py-1">
        <div className={` w-full  `}>
          <h2 className="font-semibold md:text-4xl text-3xl font-franklin mb-1">
            Ninjas Code
          </h2>
          <p className="font-light italic text-sm font-times my-1">
            Automation developer and SEO Intern
          </p>
           <p className="font-light italic text-sm font-times my-1">
            Hybrid
          </p>
          <p className="text-sm font-times font-light italic my-1">
            March 2025 - April 2025
          </p>
        </div>
      <div className={`h-full ${isDarkMode?"bg-[#2a2aff] shadow-[0_0_30px_#2a2aff] ":"bg-[#a2a8ff] shadow-[0_0_10px_#a2a8ff]"} w-[5px]  transition-all lg:block hidden rounded-2xl`}/>
      <div className="">   
      <h3 className="xs:text-2xl text-xl font-subheading font-semibold">What I did</h3>
      <ul className="list-disc list-inside md:text-lg text-base font-calibri pl-1 sm:pl-8">
    <li className="my-1">Created issues on forked repositories to help boost the SEO performance of the original repositories.</li>
    <li className="my-1">Opened 40 issues and merged 40 Dependabot pull requests on a daily basis.</li>
    <li className="my-1">Developed an automation script to streamline issue creation, reducing manual effort by approximately 30%.</li>
    <li className="my-1">Tracked and maintained repository traffic data using Google Sheets.</li>
  </ul>
    </div>
      </div>
    </section>
  );
}