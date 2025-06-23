import React from 'react'
interface props {
    svg: React.ReactElement;

}
export default function SkillBox(props: props) {
     const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  return (
      <div className={`
        relative overflow-hidden  cursor-pointer p-4 z-10 transition-all duration-700
        backdrop-blur-[2px] justify-between
        ${isDarkMode ? 'bg-purple-900/10' : 'bg-fuchsia-400/20'}
        before:content-[''] before:absolute before:top-0 before:left-0 before:w-[60%] before:h-full
        before:bg-white/30 before:skew-x-[45deg] before:scale-150 before:-translate-x-[300%]
        before:transition-transform before:duration-700 before:pointer-events-none before:-z-10
        hover:before:translate-x-[400%]
      `}>{props.svg}</div>
  )
}
