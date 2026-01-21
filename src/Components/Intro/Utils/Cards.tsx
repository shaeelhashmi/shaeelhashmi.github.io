import { useSelector } from 'react-redux';

interface CardsProps {
    children: React.ReactNode;
    className?: string;
}

export default function Cards({ children,className }: CardsProps) {
    const isDarkMode = useSelector((state: any) => state.DarkMode.value);
    
    return (
        <div className={`relative card w-full rounded-xl ${isDarkMode ? "bg-[#06011c]" : "bg-[#deddfd] dark-mode"} md:after:w-[105%] md:after:h-[105%] after:w-[103%] after:h-[103%] h-full xs:p-8 p-5 ${className || ''} `}>
            {children}
        </div>
    );
}
