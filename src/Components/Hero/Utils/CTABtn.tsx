import gsap from "gsap";
import {useSelector} from "react-redux";
export default function CTABtn() {
  const handleLinkClick = (
  e: React.MouseEvent<HTMLAnchorElement>,
  name: string
) => {
  e.preventDefault();

  const navHeight = 80; // px — adjust as needed

  let targetY = 0;
  if (name !== "#") {
    const el = document.getElementById(name);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY;
      targetY = top - navHeight; // subtract navbar height
    }
  }

  gsap.to(window, {
    duration: 0.1,
    scrollTo: targetY,
    ease: "linear",
  });
};
const selector=useSelector((state:any)=>state.DarkMode.value);
  return (

  <div  className="relative group">
    <a
       className={`relative inline-block p-px font-semibold leading-6  ${selector ? "text-white bg-gray-800" : "text-black bg-[#b0b1b4]"} cursor-pointer rounded-xl transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95`}
       onClick={(e) => handleLinkClick(e, "about")}
    >
      <span
         className={`absolute inset-0 rounded-xl bg-gradient-to-r ${selector ? "from-teal-400 via-blue-500 to-purple-500" : "from-teal-600 via-blue-600 to-purple-600"} p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
      ></span>

      <span  className={`relative z-10 block px-6 py-3 rounded-xl ${selector ? "bg-gray-950" : "bg-[#f5f5ff]"}`}>
        <div  className="relative z-10 flex items-center space-x-2">
          <span  className="transition-all duration-500 group-hover:translate-x-1 font-franklin text-lg "
            >Let's get started</span>
          <svg
             className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1 group-hover:rotate-90"
            data-slot="icon"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
              fillRule="evenodd"
            ></path>
          </svg>
        </div>
      </span>
    </a>
  </div>

  )
}
