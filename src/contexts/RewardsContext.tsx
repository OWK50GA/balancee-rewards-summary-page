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

    const endpoint = 'https://dummyjson.com/c/98d8-d52d-4eb0-840b/'

    const fetchRewards = () => {
        setLoading(true)
        fetch(endpoint)
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