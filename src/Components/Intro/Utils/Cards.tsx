import { useSelector } from 'react-redux';
import SkillBox from '../../Skills/Utils/SkillBox';

interface CardsProps {
    children: React.ReactNode;
    className?: string;
    duration?: string;
    scaleX?: string;
}

export default function Cards({ children,className,duration,scaleX }: CardsProps) {
    const isDarkMode = useSelector((state: any) => state.DarkMode.value);
    
    return (
        <div className={`relative card w-full rounded-xl ${isDarkMode ? "bg-[#06011c]" : "bg-[#deddfd] dark-mode"} md:after:w-[105%] md:after:h-[105%] after:w-[103%] after:h-[103%] h-full  ${className || ''} `}>
    
            <SkillBox svg={
                <div className=' xs:p-8 p-5 w-full h-full rounded-xl'>
                    {children}
                </div>
                } size='w-full h-full' bgColorDark='bg-[#06011c]' bgColorLight='bg-[#deddfd60] dark-mode   ' duration={duration} className='rounded-xl' cursor='cursor-auto' scaleX={scaleX}>
            </SkillBox>
        </div>
    );
}
