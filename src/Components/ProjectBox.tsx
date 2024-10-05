
interface props{
  Title:string,
  Link:string
  description:string
}
export default function ProjectBox(props:props) {

  return (
    <div className="md:w-[200px] w-[220px] md:h-[250px] h-[230px]  z-0 flex flex-col justify-between border-solid card transition-all duration-700 relative" style={{
      background: `linear-gradient(to bottom right, #D40000, #FF5500)`,
       }}>  
          
        <div >
        <h1 className="text-xl font-bold text-center">{props.Title}</h1>
        </div>
        <div className="h-full mx-2 ">
        <p className="text-sm ">{props.description}</p>
        </div>
        <div className="w-full ">
        <a href={props.Link} className="block w-full py-2 text-center transition-all duration-500 bg-blue-700 hover:bg-blue-600" target="_blank"> 
        View Source Code
      </a>
        </div>
          
      </div>
      )
    }
