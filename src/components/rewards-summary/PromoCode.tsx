import { useNavigate } from "react-router-dom";

const PromoCode = () => {

    const navigate = useNavigate()

    return ( 
        <div className="bg-white rounded-md w-full sm:w-2/3 m-auto">
            <form action="" className="mt-12 py-8 px-6 sm:px-12">
                <div className="flex flex-col gap-2 p-3">
                    <label htmlFor="" className="block">Select Promo Codes Category</label>
                    <select name="" id="" className="w-full border-gray-300 rounded-[0.25rem]">
                        <option value="">20,000 points</option>
                        <option value="">40,000 points</option>
                        <option value="">60,000 points</option>
                        <option value="">80,000 points</option>
                        <option value="">100,000 points</option>
                    </select>
                </div>
                <div>
                    <button 
                        className="flex border bg-[#0870a7] hover:bg-[#054B83] text-[#fff] justify-center items-center gap-3 ml-2 mt-2 px-12 py-3 rounded-md w-fit"
                        onClick={() => navigate('/dashboard/rewards-summary')}
                    >
                        Get Code
                    </button>
                </div>
            </form>
        </div>
     );
}
 
export default PromoCode;