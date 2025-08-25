import SkillBox from "./Utils/SkillBox";
interface SkillsProps {
  skills: React.ReactElement[];
  title: string;
  SkillRef: React.RefObject<HTMLDivElement>;
  className: string;
}
export default function Skills(props: SkillsProps) {
  return (
  <div  ref={props.SkillRef} data-translate={props.className}>
      <h2 className="font-semibold  md:text-4xl text-3xl h-[50px]  font-franklin text-center mt-5">{props.title}</h2>
<div className="flex flex-wrap justify-center gap-10 w-full">
  {props.skills.map((skill, index) => (
    <SkillBox key={index} svg={skill} />
  ))}
</div>

  </div>
  )
}
