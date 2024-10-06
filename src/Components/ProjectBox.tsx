
interface props{
  Title:string,
  Link:string
  description:string
}
export default function ProjectBox(props:props) {

  return (
    <div className="md:w-[200px] xs:w-[220px] w-[200px] md:h-[250px] h-[230px]  z-0 flex flex-col justify-between border-solid card transition-all duration-700 " style={{
      background: `linear-gradient(to bottom right, #D40000, #FF5500)`,
       }}>      
        <div >
        <h1 className="text-xl font-bold text-center">{props.Title}</h1>
        </div>
        <div className="h-full p-2 ">
        <p className="xs:text-sm text-[0.8rem] ">{props.description}</p>
        </div>
        <div className="w-full ">
        <a href={props.Link} className="block w-full py-2 text-center transition-all duration-500 bg-blue-700 hover:bg-blue-600" target="_blank"> 
        View Source Code
      </a>
        </div>
          
      </div>
      )
    }
