import gsap from "gsap";
export default function CTABtn() {
  const handleLinkClick = (
  e: React.MouseEvent<HTMLAnchorElement>,
  name: string
) => {
  e.preventDefault();

  const navHeight = 64; // px — adjust as needed

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
  return (
   <div  className="flex items-center justify-center ">
  <div  className="relative group">
    <a
       className="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800  cursor-pointer rounded-xl transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
       onClick={(e) => handleLinkClick(e, "about")}
    >
      <span
         className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      ></span>

      <span  className="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
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
              clip-rule="evenodd"
              d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
              fill-rule="evenodd"
            ></path>
          </svg>
        </div>
      </span>
    </a>
  </div>
</div>
  )
}
