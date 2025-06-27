import { useSelector } from "react-redux"
interface props{
  Title:string,
  Link:string
  description:string
}
export default function ProjectBox(props:props) {
  const isDarkMode = useSelector((state: any) => state.DarkMode.value);
  return (
    <div className={`relative overflow-hidden md:w-[180px] sm:w-[220px] xs:w-[220px] w-[180px] md:h-[300px] sm:h-[270px] xs:h-[270px] h-[300px] 
flex flex-col justify-between transition-all duration-700 z-10 
${isDarkMode ? 'bg-purple-900/10' : 'bg-fuchsia-400/20'}  backdrop-blur-[2px]
before:content-[''] before:absolute before:top-0 before:left-0 before:w-[60%] before:h-full 
before:bg-[#ffffff3f] before:skew-x-[45deg] before:scale-150 before:-translate-x-[250%] 
before:transition-transform before:duration-300 before:pointer-events-none before:-z-10
hover:before:translate-x-[340%]`}>
      <div>
        <h1 className="font-bold text-center text-xl h-[50px] mb-2 font-franklin px-2">{props.Title}</h1>
      </div>
      <div className="h-full p-2 font-calibri">
        <p className={`xs:text-sm text-sm sm:text-sm  drop-shadow-sm`}>{props.description}</p>
      </div>
      <div className="w-full font-calibri">
        <a
          href={props.Link}
          className="block w-full py-2 text-center transition-all duration-500 bg-blue-700 hover:bg-blue-600 text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Source Code
        </a>
      </div>
    </div>
      )
    }
