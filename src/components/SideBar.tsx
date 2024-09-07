import { NavLink, useLocation } from "react-router-dom";
import { RxAvatar } from 'react-icons/rx';
import balanceeLogo from '../assets/download.png';
import { TbLayoutDashboardFilled } from 'react-icons/tb';
import { FaGears, FaGift } from 'react-icons/fa6';
import { HiCalendar } from 'react-icons/hi';
import { AiFillCar } from 'react-icons/ai';
import { RiHistoryLine, RiQuestionFill } from 'react-icons/ri';
import { IoNewspaper } from 'react-icons/io5';
import { CgLogOut } from 'react-icons/cg';
import { MdCarRepair, MdOutlineHistory } from 'react-icons/md';
import { FaListAlt } from "react-icons/fa";
import { SiCashapp } from "react-icons/si";
import soloLogo from '../assets/solo-logo-removebg-preview.png'
import { IoMdNotifications } from "react-icons/io";

type SideBarProps = {
    handleShowSideBar: (event: React.SyntheticEvent) => void
}

const SideBar = ({handleShowSideBar}: SideBarProps) => {

    const location = useLocation();

    return ( 
        <div className="w-[300px] sm:w-[300px] md:w-[445px] fixed lg:static lg:w-full bg-white border-r border-gray-300 h-screen px-5 lg:px-[3.2rem] overflow-y-scroll mb-24 z-[999] inset">

                {/* <div className="lg:hidden mt-6">
                    <IoClose className="text-3xl"/>    
                </div> */}

                <div className='mt-5 flex justify-between'>
                    <img src={balanceeLogo} alt="" className="hidden lg:block"/>
                    <img src={soloLogo} alt="" className="block lg:hidden"/>
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-2xl lg:hidden">
                        <IoMdNotifications />
                    </div>
                </div>

                <div className='w-fit m-0 lg:mx-auto mt-7 flex flex-row lg:flex-col items-center justify-center gap-3'>
                    <div>
                        <RxAvatar size={50}/>
                    </div>
                    <div>
                        <p>John Doe</p>
                        <p className='text-gray-500'>View Profile</p>
                    </div>
                </div>

                <div className='mt-10'>
                    <h2 className="text-gray-500">MENU</h2>

                    <div className='mt-7 text-mid ml-5 font-plusJarkata font-semibold'>
                        <ul className='flex flex-col gap-5'>
                            <NavLink to={"/dashboard"} onClick={handleShowSideBar} className={({ isActive }) => (isActive ? 'flex items-center gap-3 p-2 bg-[#e6f1f6] text-[#2c70a7]': "flex items-center gap-3")} end>
                                <TbLayoutDashboardFilled /> 
                                <span>Dashboard</span>
                            </NavLink>
                            <NavLink to={"static"} onClick={handleShowSideBar} className={({ isActive }) => (isActive ? 'flex items-center gap-3 p-2 bg-[#e6f1f6] text-[#2c70a7]': "flex items-center gap-3")} end>
                                <FaGears />
                                <span>Book A Repair</span>
                            </NavLink>
                            <NavLink to={"static"} onClick={handleShowSideBar} className={({ isActive }) => (isActive ? 'flex items-center gap-3 p-2 bg-[#e6f1f6] text-[#2c70a7]': "flex items-center gap-3")} end>
                                <HiCalendar /> 
                                <span>Appointments</span>
                            </NavLink>
                            <NavLink to={"static"} onClick={handleShowSideBar} className={({ isActive }) => (isActive ? 'flex items-center gap-3 p-2 bg-[#e6f1f6] text-[#2c70a7]': "flex items-center gap-3")} end>
                                <AiFillCar />
                                <span>My Vehicles </span>
                            </NavLink>
                            <NavLink to={"static"} onClick={handleShowSideBar} className={({ isActive }) => (isActive ? 'flex items-center gap-3 p-2 bg-[#e6f1f6] text-[#2c70a7]': "flex items-center gap-3")} end>
                                <RiHistoryLine />
                                <span>Repair History</span>
                            </NavLink>
                            <NavLink to={"static"} onClick={handleShowSideBar} className={({ isActive }) => (isActive ? 'flex items-center gap-3 p-2 bg-[#e6f1f6] text-[#2c70a7]': "flex items-center gap-3")} end>
                                <MdCarRepair />
                                <span>Repair Stations</span>
                            </NavLink>

                            <NavLink to={"rewards-summary"}onClick={handleShowSideBar} className="flex items-center gap-3">
                                <FaGift />
                                <span>Rewards Summary</span>
                            </NavLink>

                            {
                                location.pathname.startsWith('/dashboard/rewards-summary') ? (
                                <div className="flex flex-col gap-5">
                                    <NavLink to={"rewards-summary"} onClick={handleShowSideBar} className={({ isActive }) => (isActive ? 'flex items-center gap-3 ml-8 p-2 bg-[#e6f1f6] text-[#2c70a7] rounded-md': "flex items-center gap-3 ml-8")} end>
                                        <FaListAlt />
                                        <span>Earnings Overview</span>
                                    </NavLink>
                                    <NavLink to={"rewards-summary/cashback-history"} onClick={handleShowSideBar} className={({ isActive }) => (isActive ? 'flex items-center gap-3 ml-8 p-2 bg-[#e6f1f6] text-[#2c70a7] rounded-md': "flex items-center gap-3 ml-8")} end>
                                        <MdOutlineHistory />
                                        <span>Cashback History</span>
                                    </NavLink>
                                    <NavLink to={"rewards-summary/cashout-rewards"} onClick={handleShowSideBar} className={({ isActive }) => (isActive ? 'flex items-center gap-3 ml-8 p-2 bg-[#e6f1f6] text-[#2c70a7] rounded-md': "flex items-center gap-3 ml-8")} end>
                                        <SiCashapp />
                                        <span>Cashout Rewards</span>
                                    </NavLink>
                                </div>
                                ) : null
                            }

                            <NavLink to={"static"} onClick={handleShowSideBar} className={({ isActive }) => (isActive ? 'flex items-center gap-3 p-2 bg-[#e6f1f6] text-[#2c70a7]': "flex items-center gap-3")} end>
                                <IoNewspaper />
                                <span>Newsletter</span>
                            </NavLink>
                            <NavLink to={"static"} onClick={handleShowSideBar} className={({ isActive }) => (isActive ? 'flex items-center gap-3 p-2 bg-[#e6f1f6] text-[#2c70a7]': "flex items-center gap-3")} end>
                                <RiQuestionFill />
                                <span>Support</span>
                            </NavLink>
                            <NavLink to={"static"} className='flex items-center gap-3 text-red-500 mt-4'>
                                <CgLogOut />
                                <span>Log Out</span>
                            </NavLink>
                        </ul>
                    </div>
                </div>
            </div>

     );
}
 
export default SideBar;