import React from 'react'
import { useSelector } from 'react-redux';
interface props {
    svg: React.ReactElement;
    size?: string;
    bgColorDark?: string;
    bgColorLight?: string;
    duration?: string;
    className?: string;
    cursor?: string;
    scaleX?: string;

}
export default function SkillBox(props: props) {
     const isDarkMode = useSelector((state: any) => state.DarkMode.value);
  return (
      <div className={`
        relative overflow-hidden  ${props.cursor || 'cursor-pointer'} p-4 z-10 transition-all ${props.duration || "before:duration-700"}
        backdrop-blur-[2px] justify-between
        ${isDarkMode ? (props.bgColorDark || 'bg-primary') : (props.bgColorLight || 'bg-lightPrimary')}
        before:content-[''] before:absolute before:top-0 before:left-0 before:w-[60%] before:h-full
        before:bg-white/30 before:skew-x-[45deg] before:-translate-x-[300%]
        before:transition-transform before:pointer-events-none before:-z-10
        hover:before:translate-x-[400%] ${props.size || ''} ${props.className || ''} ${`${props.scaleX ? props.scaleX+' before:scale-y-150 ' : 'before:scale-150'}`}
       `}>{props.svg}</div>
  )
}
