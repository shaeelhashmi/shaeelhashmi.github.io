import { useSelector } from "react-redux";

export default function Experience() {
  const isDarkMode = useSelector((state: any) => state.DarkMode.value);

  return (
    <div className="md:my-12 my-5 w-full">
      <div className="px-10 w-full flex lg:flex-row flex-col gap-4 place-content-center lg:h-[300px] ">
        <div className={`lg:w-[400px] w-full lg:border-r-2 ${!isDarkMode?"border-gray-700":"border-gray-400"}`}>
          <h1 className="font-semibold md:text-4xl text-3xl font-franklin mb-1">
            Ninja codes
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
      
        <div className="lg:mt-32">
      
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