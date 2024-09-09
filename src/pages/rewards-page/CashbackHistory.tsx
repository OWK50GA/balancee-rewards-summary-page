// import { useEffect } from "react";
import { useContext, useEffect, useState } from "react";
import { BiCoinStack } from "react-icons/bi";
import { FaCoins } from "react-icons/fa6";
import { LiaCoinsSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { RewardsContext } from "../../contexts/RewardsContext";
import { PiCoinVerticalFill } from "react-icons/pi";
import Pagination from "../../components/rewards-summary/Pagination";

const CashbackHistory = () => {

    // const [rewardsContext, setRewardsContext] = useState(useContext(RewardsContext))
    const rewardsContext = useContext(RewardsContext)

    // const [consumedRewards, setConsumedRewards] = useState(rewardsContext)
    // useEffect(() => {
    //     setConsumedRewards(rewardsContext)
    // }, [rewardsContext])
    const earningsOverview = rewardsContext?.earningsOverview;
    const cashbackHistory = rewardsContext?.cashbackHistory;

    const [displayedCashbackHistory, setDisplayedCashbackHistory] = useState(cashbackHistory);

    useEffect(() => {
        setDisplayedCashbackHistory(cashbackHistory);
    }, [cashbackHistory])

    const sortOptions = ['transactionDate', 'amountEarned', 'transactionCost'];
    const [currentSortOption, setCurrentSortOption] = useState(sortOptions[0])
    const [currentFilterOption, setCurrentFilterOption] = useState('')

    const [currentPage, setCurrentPage] = useState(1);
    const cashbacksPerPage = 10;
    // const currentCashbacks = displayedCashbackHistory?.slice(firstPostIndex, lastPostIndex);
    
    const updateCurretCashbacks = () => {
        const lastPostIndex = currentPage * cashbacksPerPage;
        const firstPostIndex = lastPostIndex - cashbacksPerPage;
        return displayedCashbackHistory?.slice(firstPostIndex, lastPostIndex);
    }

    const [currentCashbacks, setCurrentCashbacks] = useState(updateCurretCashbacks())

    useEffect(() => {
        setCurrentCashbacks(updateCurretCashbacks())
    }, [displayedCashbackHistory, currentPage]);

    const sortCashbacks = (sortOption: string) => {
        const sortedCashbacks = [...(displayedCashbackHistory || [])].sort((a, b) => {
            if (sortOption === 'transactionDate') {
                return new Date(a[sortOption]).getTime() - new Date(b[sortOption]).getTime()
            }
            // @ts-expect-error have to do indexing with what is available
            return a[sortOption] - b[sortOption]
        });
        setDisplayedCashbackHistory(sortedCashbacks)
        setCurrentPage(1)
    };

    const filterCashbacks = (filterOption: string) => {
        const filteredCashbacks = displayedCashbackHistory?.filter((cashback) => {
            if (filterOption === 'used') {
                return cashback.cashbackState === 'used';
            } else if (filterOption === 'not used') {
                return cashback.cashbackState === 'not used'
            }
            return true;
        })
        setDisplayedCashbackHistory(filteredCashbacks);
        setCurrentPage(1)
    }

    // useEffect(() => {
    //     filterCashbacks(currentFilterOption);
    // }, [displayedCashbackHistory, currentFilterOption]);


    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedOption = e.target.value;
        setCurrentSortOption(selectedOption)
        if (selectedOption === '') {
            setDisplayedCashbackHistory(cashbackHistory)
        } else {
            sortCashbacks(selectedOption)
        }
    }

    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedOption = e.target.value;
        setCurrentFilterOption(selectedOption)
        if (selectedOption === '') {
            setDisplayedCashbackHistory(cashbackHistory)
        } else {
            filterCashbacks(selectedOption)
        }
    }

    return ( 
        <div className="">
            <div className="block sm:flex justify-between items-center py-8 border-b border-gray-200 px-8 bg-gradient-to-r from-[#fff] to-[#7ab2d0]">
                <div className="flex sm:block gap-6">
                    <div className="py-4">
                        <div className="flex gap-2 items-center">
                            <LiaCoinsSolid className="text-[#0870a7]"/>
                            <p>My Earnings</p>
                        </div>
                        <p className="lg:text-3xl text-2xl ml-6 py-2 text-[#0870a7] font-bold">
                            {earningsOverview?.totalCashbackEarned}
                        </p>
                    </div>
                    <div className="py-4">
                        <div className="flex gap-2 items-center">
                            <BiCoinStack className="text-[#0870a7]"/>
                            <p>My Balance</p>
                        </div>
                        <p className="lg:text-2xl text-xl ml-6 py-2 text-[#58abd8] font-bold">
                            {earningsOverview?.currentCashbackBalance}
                        </p>
                    </div>
                </div>
                <div className="mt-6 sm:mt-0 animate-pulse hover:animate-none">
                    <Link to={'/dashboard/rewards-summary/cashout-rewards'} className="flex w-fit border bg-[#0870a7] hover:bg-[#0A7ABF] text-[#fff] justify-center items-center gap-3 px-6 hover:px-[1.55rem] py-4 hover:py-[1.05rem] rounded-md">
                        Cashout Rewards
                        <FaCoins />
                    </Link>
                </div>
            </div>

            <div className="p-8 block">
                <h2>Cashback History</h2>

                <div className="lg:flex gap-4 items-center md:gap-7 lg:gap-12 mt-5">
                    <div className="flex gap-3 items-center">
                        <label htmlFor="sortOption">Sort By</label>
                        <select name="" id="" onChange={handleSortChange} value={currentSortOption}>
                            <option value={''} selected>None</option>
                        {
                            sortOptions.map((sortOption) => {
                                return (
                                        <option 
                                            value={sortOption} 
                                            key={sortOption}
                                        >
                                            {sortOption == 'transactionDate' && 'Date'}
                                            {sortOption == 'amountEarned' && 'Amount Earned'}
                                            {sortOption == 'transactionCost' && 'Transaction Cost'}
                                        </option>
                                )
                            })
                        }
                        </select>
                    </div>
                    
                    <div className="mt-5 lg:mt-0 flex gap-3 items-center">
                        <label htmlFor="filterOption">Filter By</label>
                        <select 
                            name="" 
                            id="filterOption"
                            onChange={handleFilterChange}
                            value={currentFilterOption}
                        >
                            <option value="">
                                All
                            </option>
                            <option value="used">
                                Used
                            </option>
                            <option value="not used">
                                Not Used
                            </option>
                        </select>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-[10px] md:text-[12px] bg-white-100 text-left min-w-[500px] divide-y">
                        <thead className="bg-white-100 text-gray-450 py-4 font-light rounded-t-lg">
                            <tr className="">
                                <th className="hidden md:block py-4 px-2 text-gray-350 tracking-wider"></th>
                                <th className="py-4 px-2 text-gray-350 tracking-wider">Cashback ID</th>
                                <th className="py-4 px-2 text-gray-350 tracking-wider">Repair Type</th>
                                <th className="py-4 px-2 text-gray-350 tracking-wider">Transaction Cost</th>
                                <th className="py-4 px-2 text-gray-350 tracking-wider">Cashback Earned</th>
                                <th className="py-4 px-2 text-gray-350 tracking-wider">Cashback Status</th>
                            </tr>
                        </thead>

                        <tbody className="py-4 min-w-full">
                        {
                            currentCashbacks?.map((cashback) => {
                                const displayCost = Math.round(cashback.transactionCost/500) * 500
                                return (
                                    <tr key={cashback.cashbackId} className="">
                                        <td className="py-4 px-2 text-gray-350 tracking-wider whitespace-nowrap capitalize"><PiCoinVerticalFill className="text-yellow-400 animate-spinY"/></td>
                                        <td className="py-4 px-2 text-gray-350 tracking-wider whitespace-nowrap capitalize">{cashback.cashbackId}</td>
                                        <td className="py-4 px-2 text-gray-350 tracking-wider whitespace-nowrap capitalize">{cashback.bookingDetails.repairType}</td>
                                        <td className="py-4 px-2 text-gray-350 tracking-wider whitespace-nowrap capitalize">{displayCost}</td>
                                        <td className="py-4 px-2 text-gray-350 tracking-wider whitespace-nowrap capitalize">{cashback.amountEarned}</td>
                                        <td className={`"w-fit py-4 px-2 text-gray-350 tracking-wider whitespace-nowrap"`}><span className={`${cashback.cashbackState == 'not used' ? 'bg-green-500 p-2 rounded-md text-white' :  'bg-yellow-200 p-2 rounded-md'} uppercase`}>{cashback.cashbackState}</span></td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                </div>

                
                <div className="">
                        <Pagination noOfCashbacks={displayedCashbackHistory?.length} cashbacksPerPage={cashbacksPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
                </div>
            </div>
        </div>
     );
}
 
export default CashbackHistory;