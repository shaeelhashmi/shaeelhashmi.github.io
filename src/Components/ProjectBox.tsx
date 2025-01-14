
interface props{
  Title:string,
  Link:string
  description:string
}
export default function ProjectBox(props:props) {
  return (
    <div className="md:w-[200px] xs:w-[220px] w-[200px] md:h-[270px] h-[250px]   flex flex-col justify-between  transition-all duration-700  z-10  bg-[#a700ef1a] "  >      
        <div >
        <h1 className="font-bold text-center text-xl h-[50px] mb-2">{props.Title}</h1>
        </div>
        <div className="h-full p-2 ">
        <p className="xs:text-sm text-[0.6rem] sm:text-[0.8rem]"  style={{ textShadow: '0 0 1px white' }}>{props.description}</p>
        </div>
        <div className="w-full ">
        <a href={props.Link} className="block w-full py-2 text-center transition-all duration-500 bg-blue-700 hover:bg-blue-600" target="_blank"> 
        View Source Code
      </a>
        </div>
          
      </div>
      )
    }
