import { createContext, useEffect, useState } from "react";

type EarningsOverview = {
    totalCashbackEarned: number,
    currentCashbackBalance: number,
    completedBookings: number,
} | null

type CashbackHistory = {
    cashbackId: string,
    transactionDate: string,
    transactionCost: number,
    amountEarned: number,
    bookingDetails: {
        repairId: string,
        repairType: string,
        bookingId: string,
    },
    cashbackState: 'used' | 'not used',
}

type RewardsContextProps = {
    earningsOverview: EarningsOverview,
    cashbackHistory: CashbackHistory[],
    isLoading: boolean,
    updateCashbackBalance: (removedPoints: number) => void,
} | null

export const RewardsContext = createContext<RewardsContextProps>(null);

const RewardsContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [earningsOverview, setEarningsOverview] = useState<EarningsOverview>(null)
    const [cashbackHistory, setCashBackHistory] = useState<CashbackHistory[]>([])
    const [isLoading, setLoading] = useState<boolean>(false)

    const getEndpoint = 'https://dummyjson.com/c/bcc8-496b-476b-835a'
    // const postEndpoint = 'https://dummyjson.com/c/cff8-d39a-45a4-a3bd'
    // const putEndpoint = 'https://dummyjson.com/c/79ef-4921-4a16-a280'
    // const deleteEndpoint = 'https://dummyjson.com/c/02ef-a679-415f-8018'
    // const patchEndpoint = 'https://dummyjson.com/c/6d37-5766-4688-b1bd'

    const fetchRewards = () => {
        setLoading(true)
        fetch(getEndpoint)
        .then(res => res.json())
        .then(data => {
            setEarningsOverview(data.earningsOverview);
            setCashBackHistory(data.cashbackHistory);
            setLoading(false)
        })
        .catch((err) => {
            setLoading(false)
            console.error(err)
        })
    }

    const updateCashbackBalance = (removedPoints: number) => {
        const currentCashbackBalance = earningsOverview?.currentCashbackBalance
        if (!earningsOverview) return;
        const updatedEarningsOverview = {
            ...earningsOverview,
            currentCashbackBalance: (currentCashbackBalance ?? 0) - removedPoints
        }
        if (removedPoints >= 1000) {
            setEarningsOverview(updatedEarningsOverview);
        }
        console.log(updatedEarningsOverview)
    }

    useEffect(() => {
        fetchRewards();
    }, [])

    return ( 
        <RewardsContext.Provider value={{earningsOverview, cashbackHistory, isLoading, updateCashbackBalance}}>
            {children}
        </RewardsContext.Provider>
     );
}
 
export default RewardsContextProvider;