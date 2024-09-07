import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

// type directCashoutDetails = {
//     pointsToCashout: string,
//     equivalentAmount: number,
//     bank?: string,
//     withdrawalVerificationMode?: string,
//     checkbox: boolean
// }

const DirectCashout = () => {

    const directCashoutOptionValues = ['Withdraw', 'Add To Future Booking']
    const [directCashoutOption, setDirectCashoutOption] = useState(directCashoutOptionValues[0]);
    const navigate = useNavigate();

    const baseCashoutSchema = z.object({
        pointsToCashout: z.string().min(4, 'Minimum of 1000 points'),
        equivalentAmount: z.number(),
        cashoutOption: z.enum(['Withdraw', 'Add To Future Booking']),
        checkbox: z.literal(true),
    })

    const bankWithdrawalSchema = z.object({
        cashoutOption: z.literal('Withdraw'),
        bankAccountNumber: z.string(),
        bankName: z.string(),
    });

    const AddToDiscountSchema = z.object({
       cashoutOption: z.literal('Add To Future Booking'),
       discountCode: z.string().length(6, 'Must be 6 Characters'),
    });

    const cashoutSchema = z.discriminatedUnion('cashoutOption', [
        baseCashoutSchema.merge(bankWithdrawalSchema), baseCashoutSchema.merge(AddToDiscountSchema)
    ])

    type Cashout = z.infer<typeof cashoutSchema>;

    const sampleBankDetails = {
        name: 'Palmpay',
        number: '1234567890'
    }

    const {
        watch,
        setValue,
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid },
      } = useForm<Cashout>({
        resolver: zodResolver(cashoutSchema),
        mode: "all"
    });

    const submitCashoutData = (data: Cashout) => {
        reset();
        console.log(data);
        navigate('/dashboard/rewards-summary')
      };

      const pointsToCashout = watch('pointsToCashout')

    //   const [equivalentAmount, setEquivalentAmount] = useState(0)

      useEffect(() => {
        setValue('equivalentAmount', Number((0.55 * Number(pointsToCashout)).toFixed(2)))
      }, [pointsToCashout, setValue])

    // const formComplete = Boolean(errors.pointsToCashout) && Boolean(!errors.checkbox) && Boolean(!errors.equivalentAmount) && Boolean(!errors.pointsToCashout) && Boolean(!errors.cashoutOption) == true;

    return ( 
        <div className="bg-white rounded-md w-full lg:w-2/3 m-auto text-sm sm:text-base">
            <form action="" className="mt-12 py-8 px-6 sm:px-12" onSubmit={handleSubmit(submitCashoutData)}>
                <div className="gap-2 p-3">
                    <label htmlFor="pointsToCashout" className="block">Points to Cashout</label>
                    <input type="number" 
                        className="w-full border-gray-300 rounded-[0.25rem] mt-2"
                        placeholder="Minimum of 1000"
                        {...register("pointsToCashout")}
                    />
                    {errors.pointsToCashout && <p className="text-red-400">{errors.pointsToCashout.message}</p>}
                </div>

                <div className="gap-2 p-3">
                    <label htmlFor="equivalentAmount" className="block">Equivalent Amount</label>
                    <input type="number" 
                        className="w-full border-gray-300 rounded-[0.25rem] mt-2"
                        placeholder="Fraction of Points Being Cashed"
                        readOnly
                        {...register("equivalentAmount")}
                    />
                    {errors.equivalentAmount && <p className="text-red-400">Invalid value</p>}
                </div>
                
                <div className="gap-2 p-3">
                    <label htmlFor="directCashoutOption" className="block">Direct Cashout Option</label>
                    <select id="" 
                        className="w-full border-gray-300 rounded-[0.25rem] mt-2"
                        {...register('cashoutOption')}
                        onChange={(e) => setDirectCashoutOption(e.target.value)}
                    >
                    {   
                        directCashoutOptionValues.map((optionValue) => {
                            return (
                                    <option value={optionValue}
                                    >
                                        {optionValue}
                                    </option>
                            )
                        })
                        
                    }
                    </select>
                    {errors.cashoutOption && <p>{errors.cashoutOption.message}</p>}
                </div>
                
                
                {
                    directCashoutOption == 'Withdraw' ? (
                    <div>
                        <div className="gap-2 p-3">
                            <label htmlFor="" className="block">Select Bank</label>
                            <select id="" 
                                className="w-full border-gray-300 rounded-[0.25rem] mt-2"
                                {...register("bankName")}
                            >
                                <option>
                                    {sampleBankDetails.name}
                                </option>
                                <option>
                                    +
                                    <span>Add New Bank</span>
                                </option>
                            </select>
                        </div>

                    
                        <div className="gap-2 p-3">
                        <label htmlFor="" className="block">Account Number</label>
                        <input type="text" 
                            defaultValue={sampleBankDetails.number}
                            className="w-full border-gray-300 rounded-[0.25rem] mt-2"
                            {...register('bankAccountNumber')}
                        />
                    </div>
                </div>
            ): (
                <div className="gap-2 p-3">
                    <label htmlFor="discountCode" className="block">Discount Code</label>
                    <input type="text"
                        className="w-full border-gray-300 rounded-[0.25rem] mt-2"
                        placeholder="e.g. ACD278"
                        pattern="[a-zA-Z0-9]{6}"
                        {...register('discountCode')}
                    />
                </div>
            )
            }

                <div className="flex items-center gap-2 p-3 w-fit mx-auto text-xs sm:text-base">
                    <label htmlFor="" className="block">Are you sure you want to proceed?</label>
                    <input type="checkbox" id="" {...register("checkbox")} className=""/>
                </div>
                {errors.checkbox && <p className="w-fit mx-auto text-red-500 mb-5">Are you sure?</p>}

                <div>
                    <button 
                        className={`flex border ${isValid ? 'bg-[#0870a7] hover:bg-[#054B83] cursor-pointer' : 'bg-[#a0a0a0] cursor-not-allowed'} text-[#fff] justify-center items-center gap-3 px-12 py-3 rounded-md w-fit mx-auto"`}
                        disabled={!isValid}
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
     );
}
 
export default DirectCashout;