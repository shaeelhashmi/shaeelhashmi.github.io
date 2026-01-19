import { lazy, Suspense,useEffect } from 'react'
import './App.css'
import './index.css'
import Loader from './Components/Loader'
import NavBar from './Components/Navbar'
import { useSelector } from 'react-redux'
const Path = lazy(() => import('./Components/Path/Path.tsx'))

export default function App() {
  const darkMode = useSelector((state: any) => state.DarkMode.value);
   
useEffect(() => {
  const body = document.body;
  if (darkMode) {
    // body.style.background = "linear-gradient(90deg, #000000, #12001a,#000000)";
    body.style.backgroundColor = "black";
    document.querySelectorAll('.loader-square').forEach(el => {
      (el as HTMLElement).style.background = "white";
    });
  } else {
    // body.style.background = "linear-gradient(90deg, #f5f5f5, #f7e8fd, #f5f5f5)";
    body.style.backgroundColor = "rgb(255, 255, 255)";
    document.querySelectorAll('.loader-square').forEach(el => {
      (el as HTMLElement).style.background = "black";
    });
  }
}, [darkMode]);

  return (
    < >
     <NavBar></NavBar>
    <div className="relative flex flex-col items-center justify-center w-screen min-h-screen m-0 overflow-x-hidden">
        <Suspense fallback={<Loader />}>
      <div className={`w-dvw ${darkMode ? "text-white" : "text-black"}`}>
        <Path />
      </div>
  
      </Suspense>
    </div>
    </>
  );
}
