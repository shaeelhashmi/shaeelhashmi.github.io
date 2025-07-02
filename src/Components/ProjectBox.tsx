import { useSelector } from "react-redux"

interface props {
  Title: string;
  Link: string;
  description: string;
  image: string;
  SVG: React.ComponentType<{ sizeClass?: string;}> [];
}
export default function ProjectBox(props:props) {
  const isDarkMode = useSelector((state: any) => state.DarkMode.value);
  return (
    <div className={`relative  w-[300px] h-[560px] sm:h-[535px] 
flex flex-col justify-between ${isDarkMode ? 'bg-purple-900/10' : 'bg-fuchsia-400/20'}  rounded-lg`}>
      <div className="h-1/2 w-full ">
      <img src={props.image} className="h-full w-full rounded-t-lg object-cover aspect-[3/2]"
      loading="lazy"></img>
      </div>
<div className={`relative transition-all duration-700 z-10 
  backdrop-blur-[2px]
  before:content-[''] before:absolute before:top-0 before:left-0 before:w-[60%] before:h-[85%] 
  before:bg-[#ffffff3f] before:skew-x-[60deg] before:scale-150 before:-translate-x-[300%] 
  before:transition-transform before:duration-300 before:pointer-events-none before:-z-50
  hover:before:translate-x-[340%] overflow-hidden h-full my-2`}>
  
  <div className="relative z-10 h-full flex flex-col justify-between">
    <div>
      <h1 className="font-semibold text-center text-2xl font-subheading px-2 h-16">{props.Title}</h1>
    </div>
    <div className="h-full p-2 font-calibri">
      <p className={` text-base drop-shadow-sm`}>{props.description}</p>
    </div>
    <div className="w-full p-4 flex justify-between">
      {props.SVG.map((SvgComponent, index) => (
        <SvgComponent key={index} sizeClass="w-[40px] h-[40px]" />
      ))}
    </div>
  </div>
</div>

      <div className="w-full font-calibri   z-10 ">
        <a
          href={props.Link}
          className="block w-full py-2 text-center transition-all duration-500 bg-blue-700 hover:bg-blue-600 text-white rounded-b-lg font-serif font-[500] hover:scale-105"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Source Code
        </a>
      </div>
    </div>
      )
    }