import { Outlet } from "react-router-dom";
// import { RxAvatar } from 'react-icons/rx';
// import balanceeLogo from '../assets/download.png';
// import { TbLayoutDashboardFilled } from 'react-icons/tb';
// import { FaGears, FaGift } from 'react-icons/fa6';
// import { HiCalendar } from 'react-icons/hi';
// import { AiFillCar } from 'react-icons/ai';
// import { RiHistoryLine, RiQuestionFill } from 'react-icons/ri';
// import { IoNewspaper } from 'react-icons/io5';
// import { CgLogOut } from 'react-icons/cg';
// import { MdCarRepair } from 'react-icons/md';
import Header from '../components/Header';
// import SideBar from "../components/SideBar";
import { useEffect, useState } from "react";

const RootLayout = () => {

    const [showSideBar, setShowSideBar] = useState(false)

    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const [isLargeScreen, setIsLargeScreen] = useState(mediaQuery.matches);

    useEffect(() => {
        mediaQuery.addEventListener("change", (e) => {
        setIsLargeScreen(e.matches)
        })
        if (isLargeScreen) {
        setShowSideBar(true)
        }
    }, [isLargeScreen, mediaQuery])

    const handleShowSideBar = () => {
        if (!isLargeScreen) {
            setShowSideBar(!showSideBar)
        }
    }

    return ( 
        <main className="flex justify-start font-plusJarkata">
            {/* {
                showSideBar ?
                <div>
                    <SideBar handleShowSideBar={handleShowSideBar}/>
                </div>
                :
                null
            } */}
            
            <div className={`flex-grow ${showSideBar && 'blur-[2px]'} ${showSideBar && 'lg:blur-0'} overflow-hidden`}>
                <Header handleShowSideBar={handleShowSideBar}/>
                <div className="bg-[#f5f5f5] h-[100%]">
                    <Outlet />
                </div>
            </div>
        </main>
     );
}
 
export default RootLayout;