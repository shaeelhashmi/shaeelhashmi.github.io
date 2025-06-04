

export default function Three() {
    const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  return (
    <svg className="sm:w-[150px] sm:h-[150px] w-[80px] h-[80px]"   viewBox="0 0 103 104" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="threejs">
    <g id="threejs_2">
    <path id="Vector" fillRule="evenodd" clipRule="evenodd" d="M26.7016 102L2 2.00049L101.023 30.5097L26.7016 102Z" stroke={isDarkMode?"white":"black"} strokeWidth="2.2865" strokeMiterlimit="10" strokeLinejoin="round"/>
    <path id="Vector_2" fillRule="evenodd" clipRule="evenodd" d="M51.4929 16.2579L63.8349 66.2728L14.3511 52.0136L51.4929 16.2579Z" stroke={isDarkMode?"white":"black"} strokeWidth="2.2865" strokeMiterlimit="10" strokeLinejoin="round"/>
    <path id="Vector_3" fillRule="evenodd" clipRule="evenodd" d="M39.2146 58.7971L33.0845 33.9514L57.6689 41.0087L39.2146 58.7971Z" stroke={isDarkMode?"white":"black"} strokeWidth="2.2865" strokeMiterlimit="10" strokeLinejoin="round"/>
    <path id="Vector_4" fillRule="evenodd" clipRule="evenodd" d="M26.9519 9.13611L33.082 33.9818L8.49756 26.9245L26.9519 9.13611Z" stroke={isDarkMode?"white":"black"} strokeWidth="2.2865" strokeMiterlimit="10" strokeLinejoin="round"/>
    <path id="Vector_5" fillRule="evenodd" clipRule="evenodd" d="M76.1186 23.2992L82.2487 48.1449L57.6643 41.0876L76.1186 23.2992Z" stroke={isDarkMode?"white":"black"} strokeWidth="2.2865" strokeMiterlimit="10" strokeLinejoin="round"/>
    <path id="Vector_6" fillRule="evenodd" clipRule="evenodd" d="M39.2173 58.8142L45.3474 83.6599L20.7629 76.6026L39.2173 58.8142Z" stroke={isDarkMode?"white":"black"} strokeWidth="2.2865" strokeMiterlimit="10" strokeLinejoin="round"/>
    </g>
    </g>
    </svg>
    
  )
}
