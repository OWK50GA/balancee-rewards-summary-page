import { useState } from "react";
// import { RewardsContext } from "../../contexts/RewardsContext";
// import { LiaCoinsSolid } from "react-icons/lia";
import { Link } from 'react-router-dom'
import { FaHistory } from 'react-icons/fa'
import DirectCashout from "../../components/rewards-summary/DirectCashout";
import PromoCode from "../../components/rewards-summary/PromoCode";

const CashoutRewards = () => {
    
    // const { earningsOverview } = useContext(RewardsContext) || {}
    const options = ['Direct Cashout', 'Get Promo Code'];
    const [currentOption, setCurrentOption] = useState<string>(options[0]);

    return ( 
        <div>
            <div className="py-5 font-semibold text-base sm:text-xl w-full mx-auto flex justify-between items-center px-3 sm:px-8">
                <p>Cashout Reward</p>
                <Link to={'cashback-history'} className="hidden sm:flex border border-[#0870a7] text-base text-[#0870a7] justify-center items-center gap-3 px-4 py-2 rounded-md">
                    See Cashback History
                    <FaHistory />
                </Link>
            </div>

            <div className="px-6 sm:px-20">
                <select name="" id=""
                    className="flex w-fit mt-8"
                    onChange={(e) => setCurrentOption(e.target.value)}
                >
                    {
                        options.map((option) => {
                            return (
                                <option value={option} key={option}>{option}</option>
                            )
                        })
                    }
                </select>

                <div>
                    {currentOption == options[0] && <DirectCashout />}
                    {currentOption == options[1] && <PromoCode />} 
                </div>
            </div>
        </div>
     );
}
 
export default CashoutRewards;