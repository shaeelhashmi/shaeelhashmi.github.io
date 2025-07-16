
import { useSelector } from "react-redux";
interface FooterProps {
  footerRef: React.RefObject<HTMLDivElement>;
}
export default function Footer(props: FooterProps) {
    const {footerRef} = props;
   const isDarkMode = useSelector((state: any) => state.DarkMode.value);
   const footerAppeared = useSelector((state: any) => state.FooterAppeared.value);
  return (
    <footer className={`h-fit  overflow-hidden flex flex-col items-center justify-center text-center transition-all duration-1000  ${footerAppeared ?`${isDarkMode?"shadow-[0_0_10px_2px_rgba(255,255,255)]":"shadow-[0_0_10px_2px_rgba(0,0,0,0.5)]"}`:"shadow-invinsible opacity-0"} `}>
    <div
      className={`h-full w-full translate-y-64    space-y-4 pt-6 p-4 `}
      ref={footerRef}
      style={{
         background: isDarkMode ? "linear-gradient(90deg, rgb(10, 10, 10), rgb(31, 5, 42), rgb(10, 10, 10))" : "linear-gradient(90deg,rgb(255 234 234), rgb(240 209 253), rgb(255 234 234))",
      }}
    >
  
    </div>
    
    </footer>
  )
}
