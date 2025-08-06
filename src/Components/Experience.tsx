import { useSelector } from "react-redux";

export default function Experience() {
  const isDarkMode = useSelector((state: any) => state.DarkMode.value);

  return (
    <div className="md:my-12 my-5 w-full px-10">
      <div className=" w-full  lg:flex-row flex-col gap-4 place-content-center lg:h-[200px] flex justify-evenly items-center lg:space-x-3">
        <div className={`lg:w-[400px] w-full  `}>
          <h1 className="font-semibold md:text-4xl text-3xl font-franklin mb-1">
            Ninjas Code
          </h1>
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
            <div className={`h-full ${isDarkMode?"bg-[#2a2aff] shadow-[0_0_30px_#2a2aff] ":"bg-[#dba2ff] shadow-[0_0_10px_#dba2ff]"} w-[5px]  transition-all lg:block hidden rounded-2xl`}/>
        <div > 
        
      <h1 className="text-2xl font-subheading font-semibold">What I did</h1>
      <ul className="list-disc list-inside md:text-lg text-base font-calibri pl-10">
    <li className="my-1">Created issues on forked repositories to help boost the SEO performance of the original repositories.</li>
    <li className="my-1">Opened 40 issues and merged 40 Dependabot pull requests on a daily basis.</li>
    <li className="my-1">Developed an automation script to streamline issue creation, reducing manual effort by approximately 30%.</li>
    <li className="my-1">Tracked and maintained repository traffic data using Google Sheets.</li>
  </ul>
        </div>
      </div>
    </div>
  );
}