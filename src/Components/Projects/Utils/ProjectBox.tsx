import { useSelector } from "react-redux"
import "plyr-react/plyr.css"
import PlyrComponent from "./Plyr"
interface props {
  Title: string;
  Link: string;
  description: string;
  image: string; // optional, in case you want fallback image
  SVG: React.ComponentType<{ sizeClass?: string;}> [];
}

export default function ProjectBox(props: props) {
  const isDarkMode = useSelector((state: any) => state.DarkMode.value);

  return (
    <div className={`grid grid-rows-[auto_1fr_auto] ${isDarkMode ? 'bg-purple-900/10' : 'bg-fuchsia-400/20'} rounded-lg`}>
      
      
        
          <PlyrComponent image={props.image} />
        
   

      {/* Content Section */}
      <div className={`relative transition-all duration-700 z-10 
        backdrop-blur-[2px]
        before:content-[''] before:absolute before:top-0 before:left-0 before:w-[60%] before:h-[85%] 
        before:bg-[#ffffff3f] before:skew-x-[60deg] before:scale-150 before:-translate-x-[400%] 
        before:transition-transform before:duration-300 before:pointer-events-none before:-z-50
        hover:before:translate-x-[340%] overflow-hidden  my-2 xs:p-8 p-5`}>
        
        <div className="relative z-10  flex flex-col justify-between">
          <div>
            <h3 className="font-semibold text-center xs:text-2xl text-xl font-subheading">{props.Title}</h3>
          </div>
          <div className=" font-calibri">
            <p className="md:text-lg text-base mt-5">{props.description}</p>
          </div>
          <div className="w-full flex justify-between mt-5">
            {props.SVG.map((SvgComponent, index) => (
              <SvgComponent key={index} sizeClass="w-[40px] h-[40px]" />
            ))}
          </div>
        </div>
      </div>

      {/* Footer Link */}
      <div className="w-full font-calibri z-10">
        <a
          href={props.Link}
          className="block w-full py-2 text-center transition-all duration-500 bg-blue-700 hover:bg-blue-600 text-white rounded-b-lg font-serif font-[500]"
          target="_blank"
        >
          View Source Code
        </a>
      </div>
    </div>
  )
}
