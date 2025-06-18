
interface props{
  Title:string,
  Link:string
  description:string
}
export default function ProjectBox(props:props) {
  const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return (
    <div className={`md:w-[180px] sm:w-[220px] xs:w-[220px] w-[180px] md:h-[300px] sm:h-[270px] xs:h-[270px] h-[300px]   flex flex-col justify-between  transition-all duration-700  z-10  ${isDarkMode ? 'bg-[#a700ef1a]' : 'bg-[#cb53ff34]'}`} > 
        <div >
        <h1 className="font-bold text-center text-xl h-[50px] mb-2 font-franklin">{props.Title}</h1>
        </div>
        <div className="h-full p-2 font-calibri">
        <p className="xs:text-sm text-sm sm:text-sm"  style={{ textShadow: isDarkMode?'0 0 1px white':  '0 0 1px black'}}>{props.description}</p>
        </div>
        <div className="w-full font-calibri">
        <a href={props.Link} className="block w-full py-2 text-center transition-all duration-500 bg-blue-700 hover:bg-blue-600 text-white" target="_blank"> 
        View Source Code
       </a>
        </div>
          
      </div>
      )
    }
