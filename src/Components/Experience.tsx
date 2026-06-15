import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SkillBox from "./Skills/Utils/SkillBox";

// 1. Define the TypeScript interface for your data structure
interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  duration: string;
  bulletPoints: string[];
}

export default function Experience({ ExperienceRef }: { ExperienceRef: React.RefObject<HTMLElement | null> }) {
  const isDarkMode = useSelector((state: any) => state.DarkMode.value);
  
  // 2. Set up state to hold the fetched JSON data
  const [experienceData, setExperienceData] = useState<ExperienceItem[]>([]);

  // 3. Fetch the data when the component mounts
  useEffect(() => {
    // Vite recognizes the public folder directly from the root "/"
    fetch("/Data/Experience.json")
      .then((response) => {
        if (!response.ok) {
          console.error("Failed to fetch experience data:", response.statusText);
          throw new Error("Failed to fetch experience data");
        }
        return response.json();
      })
      .then((data) => {setExperienceData(data);
        console.log("Experience data loaded successfully:", data);
      })
      .catch((error) => console.error("Error loading JSON:", error));
  }, []);

  return (
    <section ref={ExperienceRef} data-translate="-translate-x-64" id="Experience">
      <h1 className="md:text-6xl text-5xl font-bold font-heading text-center">Experience</h1>   
      
      {/* 4. Map through the state data */}
      {experienceData.map((exp, index) => (
               <div key={index} className="w-full grid lg:grid-cols-[30%_auto_1fr] grid-cols-1 gap-10 mt-10 sm:p-8 px-2 py-1">
          <div className="w-full">
            <h2 className="font-semibold md:text-4xl text-3xl font-franklin mb-1">
              {exp.company}
            </h2>
            <p className="font-light italic text-sm font-times my-1">
              {exp.role}
            </p>
            <p className="font-light italic text-sm font-times my-1">
              {exp.location}
            </p>
            <p className="text-sm font-times font-light italic my-1">
              {exp.duration}
            </p>
          </div>
          
          <div className={`h-full ${isDarkMode ? "bg-[#2a2aff] shadow-[0_0_30px_#2a2aff]" : "bg-[#a2a8ff] shadow-[0_0_10px_#a2a8ff]"} w-[5px] transition-all lg:block hidden rounded-2xl`}/>
          
          <div>   
            <h3 className="xs:text-2xl text-xl font-subheading font-semibold">What I did</h3>
            <ul className="list-disc list-inside md:text-lg text-base font-calibri pl-1 sm:pl-8">
              {exp.bulletPoints.map((bullet, i) => (
                <li key={i} className="my-1">
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
}