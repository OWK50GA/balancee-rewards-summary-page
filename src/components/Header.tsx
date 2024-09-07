import { useState, useEffect } from "react";
import { IoMdNotifications, IoMdSearch } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import { RiErrorWarningLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from '../assets/download.png'
import { IoSearchOutline } from "react-icons/io5";

type HeaderProps = {
    handleShowSideBar: (event: React.SyntheticEvent) => void
}

const Header = (props: HeaderProps) => {

    const handleShowSideBar = props.handleShowSideBar

    const [showSearchBar, setShowSearchBar] = useState(true)

    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const [isLargeScreen, setIsLargeScreen] = useState(mediaQuery.matches);

    useEffect(() => {
        mediaQuery.addEventListener("change", (e) => {
        setIsLargeScreen(e.matches)
        })
        if (isLargeScreen) {
        setShowSearchBar(true)
        }
    }, [isLargeScreen, mediaQuery])

    return ( 
        <div className="flex px-12 justify-between w-full mx-auto h-fit border-b border-gray-200 items-center text-base py-[0.85rem]">
            
            <div className="lg:hidden">
                <img src={logo} alt="" />
            </div>

            <div className="items-center gap-1 text-lg text-[#2c70a7] hidden lg:flex">
                <div className="w-8 h-8 bg-[#c4ddea] rounded-sm flex items-center justify-center text-[]">
                    <RiErrorWarningLine />
                </div>
                <span className="">
                    Learn about the Dashboard
                </span>
            </div>

            {
                showSearchBar ?
                <div className="hidden lg:block">
                    <span className="absolute mt-5 ml-2 z-10 text-gray-500">
                        <IoMdSearch className="w-5 h-5" />
                    </span>
                    <input 
                        className="py-4 pl-8 pr-8 w-80 border border-gray-400 rounded-md 
                        focus:outline-none focus:border-gray-400 bg-transparent relative"
                        placeholder="Search"
                    />
                    <span className="absolute mt-5 -ml-6 z-10 text-gray-500">
                        <MdCancel className="w-5 h-5" />
                    </span>
                </div>
                :
                null
            }

            <div className="hidden lg:block">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-2xl">
                <IoMdNotifications />
                </div>
            </div>

            <div className="items-center gap-3 lg:gap-1 text-lg lg:hidden flex">
                <IoSearchOutline className="text-2xl"/>
                <div className="w-8 h-8 bg-[#c4ddea] rounded-sm flex items-center justify-center text-[] text-[#2c70a7]">
                    <RiErrorWarningLine />
                </div>
                <RxHamburgerMenu className="text-2xl block" onClick={handleShowSideBar}/>
            </div>

        </div>
     );
}
 
export default Header;