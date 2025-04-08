import { faArrowAltCircleLeft, faArrowAltCircleRight, faChevronLeft, faChevronRight, faDashboard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {useState} from 'react'
import terraclimesymbol from '../Utils/Images/Logo - Website(1)(1).png';
import terraclimelogo from '../Utils/Images/Logo - Website.png';
import Dashboardsvg from '../Utils/Images/Dashboard (1).svg';
import dashboardblack from '../Utils/Images/Dashboard (2).svg';
import settingsblack from '../Utils/Images/Settings.svg';
import reportsblack from '../Utils/Images/Reports.svg';
import dropletblack from '../Utils/Images/droplet-stroke-rounded.svg';
function SideBar() {
  const [buttonOpen, setButtonOpen] = useState(true);
  const handleButtonOpen = () => {
        setButtonOpen(!buttonOpen);
  }
  return (
    <div className={`fixed top-0 left-0 h-screen ${buttonOpen === false ? "md:w-[60px] transition-all" : "md:w-[185px] transition-all"}  sm:w-9 w-9 m-0 flex flex-col text-black border shadow-lg bg-white`}>
            <div className="flex justify-center items-center mt-7"><img src={buttonOpen === false ? `${terraclimesymbol}` : `${terraclimelogo}`} alt='' className={buttonOpen === false ? `w-[40px] transition duration-150 ease-in-out` : `w-[150%] px-1 transition duration-150 ease-in-out`}/></div>
            <div className="relative">
                <div className={`absolute top-5 left-6 ${buttonOpen === false ? 'left-6' : 'left-[150px]'} text-md text-[#00A877] shadow-lg rounded-2xl px-2 bg-white border`}><button onClick={handleButtonOpen}><FontAwesomeIcon icon={buttonOpen === false ? faChevronRight : faChevronLeft}/></button></div>
            </div>
            <ul className="mt-[70px]">
                <li className={`mt-1  ${buttonOpen === false ? 'flex justify-center items-center transition duration-150 ease-in-out' : 'flex justify-start items-center transition duration-150 ease-in-out'}`}><div className={`hover:bg-[#D8F3D9] transition-all ${buttonOpen === false ? 'flex justify-center items-center w-[65%]': 'flex justify-start items-center w-[100%] mx-2'} rounded-lg  p-2 left-[150px]`}><img src={dashboardblack} alt='' className={`${buttonOpen === false ? 'w-[65px]' : 'w-[20px]'}`} /><a href="/dashboard" className={`${buttonOpen === false ? 'hidden' : 'ms-2 text-md'}`}>Overview</a></div></li>
                <li className={`mt-3  ${buttonOpen === false ? 'flex justify-center items-center transition duration-150 ease-in-out' : 'flex justify-start items-center transition duration-150 ease-in-out'}`}><div className={`hover:bg-[#D8F3D9] transition-all ${buttonOpen === false ? 'flex justify-center items-center w-[65%]': 'flex justify-start items-center w-[100%] mx-2'} rounded-lg  p-2 left-[150px]`}><img src={reportsblack} alt='' className={`${buttonOpen === false ? 'w-[65px]' : 'w-[20px]'}`}/><a href="/reports" className={`${buttonOpen === false ? 'hidden' : 'ms-2 text-md'}`}>Reports</a></div></li>
                <li className={`mt-3  ${buttonOpen === false ? 'flex justify-center items-center transition duration-150 ease-in-out' : 'flex justify-start items-center transition duration-150 ease-in-out'}`}><div className={`hover:bg-[#D8F3D9] transition-all ${buttonOpen === false ? 'flex justify-center items-center w-[65%]': 'flex justify-start items-center w-[100%] mx-2'} rounded-lg  p-2 left-[150px]`}><img src={dropletblack} alt='' className={`${buttonOpen === false ? 'w-[65px]' : 'w-[20px]'}`}/><a href="/leaks" className={`${buttonOpen === false ? 'hidden' : 'ms-2 text-md'}`}>Leaks</a></div></li>
                <li className={`mt-3  ${buttonOpen === false ? 'flex justify-center items-center transition duration-150 ease-in-out' : 'flex justify-start items-center transition duration-150 ease-in-out'}`}><div className={`hover:bg-[#D8F3D9] transition-all ${buttonOpen === false ? 'flex justify-center items-center w-[65%]': 'flex justify-start items-center w-[100%] mx-2'} rounded-lg  p-2 left-[150px]`}><img src={settingsblack} alt='' className={`${buttonOpen === false ? 'w-[65px]' : 'w-[20px]'}`}/><a href="/settings" className={`${buttonOpen === false ? 'hidden' : 'ms-2 text-md'}`}>Settings</a></div></li>
            </ul>
            <div className={`fixed start-[5px] bottom-2 ${buttonOpen === false ? 'start-[5px]' : 'start-[60px] text-lg'}`}>
                <div className={`text-sm text-gray-400 ${buttonOpen === false ? 'flex justify-center items-center' : 'flex justify-center items-center'}`}>V.1.0.0</div>
            </div>
    </div>
  )
}
export default SideBar;