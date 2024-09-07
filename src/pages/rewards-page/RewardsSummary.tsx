import { useContext } from "react";
import { FaHistory } from "react-icons/fa";
import { FaCoins, FaScrewdriverWrench } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { RewardsContext } from "../../contexts/RewardsContext";
import { PiHandCoinsFill } from "react-icons/pi";
import { RiNumbersLine } from "react-icons/ri";

const RewardsSummary = () => {

    const contextValue = useContext(RewardsContext)
    const earningsOverview = contextValue?.earningsOverview
    // console.log(earningsOverview)

    // Progress Bar
    // const outerWidth = 600;
    // const innerWidth = 0.2 * (153 % 5) * outerWidth
    // const percentComplete = innerWidth / outerWidth * 100
    // const percent = percentComplete.toFixed(0)

    return ( 
        <div>
            <div className="bg-[#0870a7] flex flex-col text-white justify-center items-center py-16 gap-5 text-bold">
                <div className="text-2xl hover:text-3xl flex items-center gap-2 font-extrabold hover:font-black animate-slide-up-fade-in">
                    <span><FaCoins /></span>
                    Total Cashback: {earningsOverview?.totalCashbackEarned}
                </div>
                <div className="text-xl hover:text-2xl flex items-center gap-2 font-semibold hover:font-bold animate-slide-up-fade-in">
                    <span><PiHandCoinsFill /></span>
                    Current Balance: {earningsOverview?.currentCashbackBalance}
                </div>
                <div className="text-sm hover:text-base flex items-center gap-2 font-normal hover:font-semibold animate-slide-up-fade-in">
                    <span>
                        <RiNumbersLine />
                    </span>
                    No of Cashbacks Received: {earningsOverview?.completedBookings / 5}
                </div>
            </div>

            {/* <div className="w-fit m-auto py-8 mt-7">
                <p className="text-xl font-semibold">
                    How soon will you earn a reward?
                </p>
                <p className="text-sm font-light">
                    Perform 0 more transactions to earn a reward
                </p>
                <div className={`w-[${outerWidth}px] h-12 border border-black rounded-lg grid items-start justify-center text-[#fff]`}>
                    <div className={`w-[${360}px] h-[2.60rem] bg-[#0870a7] flex items-center justify-center rounded-lg`}>
                        <p className="text-center">{percent}%</p>
                    </div>
                </div>
            </div> */}

            <div className="w-fit m-auto py-8 mt-7">
                <p className="self-center text-center">Earn More Rewards when you perform more transactions.</p>
                <Link to={'/dashboard/book-a-repair'} className="w-fit sm:w-auto mx-auto mt-5 flex border bg-[#0870a7] hover:bg-[#0A7ABF] text-[#fff] justify-center items-center gap-3 px-6 py-4 rounded-md">
                    Book a repair
                    <FaScrewdriverWrench />
                </Link>
            </div>

            <div className="py-8 w-fit m-auto grid gap-5 sm:flex sm:gap-40 mt-10">
                <Link to={'cashback-history'} className="flex border border-[#0870a7] bg-white text-[#0870a7] hover:text-[#054B83] justify-center items-center gap-3 px-6 py-4 rounded-md">
                    See Cashback History
                    <FaHistory />
                </Link>
                <Link to={'cashout-rewards'} className="flex border bg-[#0870a7] hover:bg-[#0A7ABF] text-[#fff] justify-center items-center gap-3 px-6 py-4 rounded-md">
                    Cashout Rewards
                    <FaCoins />
                </Link>
            </div>
        </div>
     );
}
 
export default RewardsSummary;