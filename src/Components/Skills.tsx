import SkillBox from "./SkillBox";
interface SkillsProps {
  skills: React.ReactElement[];
  title: string;
  SkillRef: React.RefObject<HTMLDivElement>;
  className: string;
}
export default function Skills(props: SkillsProps) {
  return (
  <div  ref={props.SkillRef} data-translate={props.className}>
      <h1 className="font-semibold  md:text-4xl text-3xl h-[50px]  font-franklin text-center my-2">{props.title}</h1>
      <div className="flex flex-wrap  gap-10 w-full items-center justify-center" >
        {
            props.skills.map((skill, index) => (
              <>
              <SkillBox key={index} svg={skill} />
              </>
            )) 
        }

  </div>
  </div>
  )
}
