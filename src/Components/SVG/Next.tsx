interface Props {
    rotate:boolean
  }
export default function Next(props:Props) {
  return (

      <svg xmlns="http://www.w3.org/2000/svg" className="sm:w-[40px] sm:h-[40px] w-[20px] h-[20px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
    style={{ transform: props.rotate ? 'rotate(180deg)' : 'none' }}
      ><path d="m9 18 6-6-6-6"/></svg>
  )
}
