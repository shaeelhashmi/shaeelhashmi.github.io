
import Project from "./Projects/Project";
import Experience from "./Experience";
import SkillSection from "./Skills/SkillSection";

interface MainProps {
  skillRef: React.RefObject<HTMLDivElement>;
  projectRef: React.RefObject<HTMLDivElement>;
  ExperienceRef: React.RefObject<HTMLDivElement>;
  frontendSkillRef: React.RefObject<HTMLDivElement>;
  backendSkillRef: React.RefObject<HTMLDivElement>;
  databaseSkillRef: React.RefObject<HTMLDivElement>;
  otherSkillRef: React.RefObject<HTMLDivElement>;
}
export default function Main(props: MainProps) {
  const { skillRef, projectRef, ExperienceRef,frontendSkillRef,backendSkillRef,databaseSkillRef,otherSkillRef } = props;

  return (
    <main className="  z-20 overflow-hidden ">  
      <Experience ExperienceRef={ExperienceRef} />
      <Project projectRef={projectRef} />
      <SkillSection skillRef={skillRef} frontendSkillRef={frontendSkillRef} backendSkillRef={backendSkillRef} databaseSkillRef={databaseSkillRef} otherSkillRef={otherSkillRef} />
    </main>
  );
}