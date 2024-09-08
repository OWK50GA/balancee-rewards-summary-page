import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { RewardsContext } from "../../contexts/RewardsContext";

const PromoCode = () => {

    const navigate = useNavigate();

    const rewardsContext = useContext(RewardsContext)
    // const { updateCashbackBalance } = useContext(RewardsContext)
    const updateCashbackBalance = rewardsContext?.updateCashbackBalance
    
    const promoCodeSchema = z.object({
        promoCodePointCategory: z.string(),
        checkbox: z.literal(true)
    })

    type PromoCodeType = z.infer<typeof promoCodeSchema>;

    const { 
        register,
        handleSubmit,
        reset,
        formState: {errors, isValid},
     } = useForm<PromoCodeType>({
        resolver: zodResolver(promoCodeSchema)
    })

    const submitPromoCodeData = (data: PromoCodeType) => {
        updateCashbackBalance?.(Number(data.promoCodePointCategory))
        reset();
        setTimeout(() => {
            navigate('/dashboard/rewards-summary');
        }, 5000)
        console.log(data)
    }

    return ( 
        <div className="bg-white rounded-md w-full sm:w-2/3 m-auto">
            <form action="" className="mt-12 py-8 px-6 sm:px-12" onSubmit={handleSubmit(submitPromoCodeData)}>
                <div className="flex flex-col gap-2 p-3">
                    <label htmlFor="" className="block">Select Promo Codes Points Category</label>
                    <select
                        id="" 
                        className="w-full border-gray-300 rounded-[0.25rem]"
                        {...register('promoCodePointCategory')}
                    >
                        <option value="">20000</option>
                        <option value="">40000</option>
                        <option value="">60000</option>
                        <option value="">80000</option>
                        <option value="">100000</option>
                    </select>
                    {errors.promoCodePointCategory && <p>{errors.promoCodePointCategory.message}</p>}
                </div>

                <div className="flex items-center gap-2 p-3 w-fit mx-auto text-xs sm:text-base">
                    <label htmlFor="" className="block">Are you sure you want to proceed?</label>
                    <input type="checkbox" id="" className="" {...register('checkbox')}/>
                    {errors.checkbox && <p>{errors.checkbox.message}</p>}
                </div>

                <div>
                    <button 
                        className={`flex border ${isValid ? 'bg-[#0870a7] hover:bg-[#054B83] cursor-pointer' : 'bg-[#a0a0a0] cursor-not-allowed'} text-[#fff] justify-center items-center gap-3 px-12 py-3 rounded-md w-fit mx-auto"`}
                        // onClick={() => }
                        disabled={!isValid}
                    >
                        Get Code
                    </button>
                </div>
            </form>
        </div>
     );
}
 
export default PromoCode;