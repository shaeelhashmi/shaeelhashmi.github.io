
import Fiverr from "./SVG/Fiverr";
import Google from "./SVG/Google"
import Upwork from "./SVG/Upwork"
import { useSelector } from "react-redux";
interface FooterProps {
  footerRef: React.RefObject<HTMLDivElement>;
}
export default function Footer(props: FooterProps) {
    const {footerRef} = props;
   const isDarkMode = useSelector((state: any) => state.DarkMode.value);
   const footerAppeared = useSelector((state: any) => state.FooterAppeared.value);
  return (
    <footer className={`h-[220px]  overflow-y-hidden flex flex-col items-center justify-center text-center transition-all duration-1000  ${footerAppeared ?`${isDarkMode?"shadow-[0_0_10px_2px_rgba(255,255,255)]":"shadow-[0_0_10px_2px_rgba(0,0,0,0.5)]"}`:"shadow-invinsible"}`}>
    <div
      className={`h-full w-full  translate-y-32 transition-all duration-1000 opacity-0  p-2 space-y-4 pt-6 `}
      data-translate="translate-y-32"
      ref={footerRef}
      style={{
         background: isDarkMode ? "linear-gradient(90deg, rgb(10, 10, 10), rgb(31, 5, 42), rgb(10, 10, 10))" : "linear-gradient(90deg,rgb(255 234 234), rgb(240 209 253), rgb(255 234 234))",
      }}
    >
      <h1 className="md:text-6xl text-5xl font-bold  mb-4 font-heading ">
        Contact
      </h1>
      <div className="flex  items-center justify-center">
         <a href="mailto:shaeelhashmi332@gmail.com" className="mx-5" target="_blank">
          <Google/></a> 
            <a href="https://www.upwork.com/freelancers/~011e1744278fd5fcd2" className="mx-5" target="_blank">
          <Upwork/></a>
            <a href="https://www.fiverr.com/s/8zNZXbv" className="mx-5" target="_blank">
          <Fiverr/></a>
          </div>
          <div className={`mt-4 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
      ©  Powered by Shaeel Hashmi
    </div>
    </div>
    
    </footer>
  )
}
