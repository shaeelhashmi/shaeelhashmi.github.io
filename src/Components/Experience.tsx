import { useSelector } from "react-redux";
export default function Experience() {
  const isDarkMode = useSelector((state: any) => state.DarkMode.value);
  return (
    <div className="mt-14" >
    <div className={`relative overflow-hidden w-64 mx-auto ${isDarkMode?"bg-[#3b3b3b5d]":"bg-[#ffd7d74a]"} relative overflow-hidden md:w-[180px] sm:w-[220px] xs:w-[220px] w-[180px] md:h-[300px] sm:h-[270px] xs:h-[270px] h-[300px] 
flex flex-col justify-between transition-all duration-700 z-10  p-2 border-2 ${isDarkMode?"border-gray-500    shadow-[0_0_10px_2px_rgba(255,255,255)]":" shadow-[0_0_10px_2px_rgba(135,118,118)] " } backdrop-blur-[2px]
before:content-[''] before:absolute before:top-0 before:left-0 before:w-[60%] before:h-full 
before:bg-[#ffffff3f] before:skew-x-[45deg] before:scale-150 before:-translate-x-[300%] 
before:transition-transform before:duration-300 before:pointer-events-none before:-z-10
hover:before:translate-x-[400%]` }style={{ textShadow: isDarkMode?'0 0 1px white':  '0 0 1px black'}}>
      <div>
        <h1 className="sm:text-2xl text-lg font-bold font-franklin">
        Ninja codes
        <br></br>
       <span className="font-light italic text-xs font-times mt-2"> Intern  (March - April 2025)</span>
        </h1>
        <p className="font-calibri">Interned at Ninja Codes and increased SEO of open-sourced repos by creating issues on forked repos and also automated processes and performed data processing</p>
      </div>
    </div>
    </div>
  )
}
