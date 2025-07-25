interface props { 
  sizeClass?: string;
}
export default function CSS(props: props) {
  return (
<svg className={`${ props.sizeClass ||" sm:w-[70px] sm:h-[70px] w-[50px] h-[50px]"}`}  viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="css3">
<g id="css3_2">
<path id="polygon2989" d="M94.1749 0.000488281L86.142 89.99L50.0335 100L14.0245 90.0041L6 0.000488281H94.1749Z" fill="#264DE4"/>
<path id="polygon2991" d="M79.2648 84.2598L86.1295 7.35962H50.0874V92.3489L79.2648 84.2598Z" fill="#2965F1"/>
<path id="polygon2993" d="M24.3959 40.7407L25.3852 51.7792H50.0874V40.7407H24.3959Z" fill="#EBEBEB"/>
<path id="polygon2995" d="M50.0875 18.3982H50.0493H22.408L23.4114 29.4369H50.0875V18.3982Z" fill="#EBEBEB"/>
<path id="polygon2997" d="M50.0874 80.8935V69.4088L50.039 69.4217L37.7453 66.1021L36.9594 57.2983H30.9856H25.8784L27.4249 74.6305L50.0366 80.9077L50.0874 80.8935Z" fill="#EBEBEB"/>
<path id="polygon3005" d="M63.6421 51.779L62.3608 66.0952L50.0493 69.4182V80.9024L72.679 74.6306L72.845 72.7657L75.439 43.7047L75.7083 40.7406L77.7011 18.3982H50.0493V29.4369H65.6038L64.5994 40.7406H50.0493V51.779H63.6421Z" fill="white"/>
</g>
</g>
</svg>

  )
}
