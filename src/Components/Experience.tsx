export default function Experience() {
  const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  return (
    <div className="mt-14" >
    <div className="w-64 mx-auto bg-[#ffffff1a] h-72 p-2 border-2 border-gray-700  duration-1000 shadow-[0_0_10px_2px_rgba(0,0,0)] dark:shadow-[0_0_10px_2px_rgba(255,255,255)]" style={{ textShadow: isDarkMode?'0 0 1px white':  '0 0 1px black'}}>
      <div>
        <h1 className="sm:text-2xl text-lg font-bold ">
        Intern Ninja codes
        </h1>
        <p>Interned at Ninja Codes and performed tasks such as automation and data processing</p>
      </div>
    </div>
    </div>
  )
}
