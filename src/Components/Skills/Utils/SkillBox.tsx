import React from 'react'
import { useSelector } from 'react-redux';
interface props {
    svg: React.ReactElement;
    size?: string;

}
export default function SkillBox(props: props) {
     const isDarkMode = useSelector((state: any) => state.DarkMode.value);
  return (
      <div className={`
        relative overflow-hidden  cursor-pointer p-4 z-10 transition-all duration-700
        backdrop-blur-[2px] justify-between
        ${isDarkMode ? 'bg-primary' : 'bg-lightPrimary'}
        before:content-[''] before:absolute before:top-0 before:left-0 before:w-[60%] before:h-full
        before:bg-white/30 before:skew-x-[45deg] before:scale-150 before:-translate-x-[300%]
        before:transition-transform before:duration-700 before:pointer-events-none before:-z-10
        hover:before:translate-x-[400%] ${props.size || ''}
       `}>{props.svg}</div>
  )
}
