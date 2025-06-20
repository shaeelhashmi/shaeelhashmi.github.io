
import Google from "./SVG/Google"
import Upwork from "./SVG/Upwork"
interface FooterProps {
  footerRef: React.RefObject<HTMLDivElement>;
}
export default function Footer(props: FooterProps) {
    const {footerRef} = props;
   const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  return (
    <footer className="h-[200px]  overflow-y-hidden flex flex-col items-center justify-center text-center transition-all duration-1000">
    <div
      className=" h-full w-full  translate-y-32 transition-all duration-1000 opacity-0  p-2 space-y-4 pt-6 "
      data-translate="translate-y-32"
      ref={footerRef}
      style={{
         background: isDarkMode ? "linear-gradient(90deg, #000000, #12001a, #000000)" : "linear-gradient(90deg,rgb(255 234 234), rgb(240 209 253), rgb(255 234 234))",
      }}
    >
      <h1 className="text-3xl md:text-5xl font-bold  mb-4 font-heading ">
        Contact Me
      </h1>
      <div className="flex  items-center justify-center">
         <a href="mailto:shaeelhashmi332@gmail.com" className="mx-5" target="_blank">
          <Google/></a> 
            <a href="https://www.upwork.com/freelancers/~011e1744278fd5fcd2" className="mx-5" target="_blank">
          <Upwork/></a>
          </div>
    </div>
    </footer>
  )
}
