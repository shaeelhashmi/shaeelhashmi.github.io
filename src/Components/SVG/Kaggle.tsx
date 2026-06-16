import { useSelector } from "react-redux";

export default function Kaggle() {
  const isDarkMode = useSelector((state: any) => state.DarkMode.value);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Kaggle"
      role="img"
      viewBox="0 0 512 512"
      preserveAspectRatio="xMidYMid meet"
      className="sm:w-[70px] sm:h-[70px] w-[48px] h-[48px] mx-auto mr-3 p-1"
      fill="none"
    >
      <rect
        x="16"
        y="16"
        width="480"
        height="480"
        rx="15%"
        fill={isDarkMode ? "white" : "black"}
      />
      <path
        fill={isDarkMode ? "black" : "white"}
        d="M106,103c-.06,.3-.3,.4-.8,.4h-8c-.5,0-.9-.2-1.3-.6L82.746,86.028l-3.655,3.477v13c0,.6-.3,.9-.9,.9h-6.152c-.6,0-.9-.3-.9-.9V44c0-.6,.3-.9,.9-.9h6.1c.6,0,.9,.3,.9,.9v36l15.692-15.87c.416-.415,.832-.624,1.248-.624h8.204c.356,0,.593,.149,.713,.445c.119,.4,.1,.6-.1,.8L88,81C106,102,106,103,106,103"
        transform="scale(5.5 5.5) translate(-40 -30)"
      />
    </svg>
  );
}