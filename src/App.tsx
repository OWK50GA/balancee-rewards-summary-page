import { 
  Route, 
  RouterProvider, 
  createBrowserRouter, 
  createRoutesFromElements
} from 'react-router-dom'
import './App.css'

import RootLayout from './layouts/RootLayout'
import RewardsSummary from './pages/rewards-page/RewardsSummary'
import CashbackHistory from './pages/rewards-page/CashbackHistory'
import CashoutRewards from './pages/rewards-page/CashoutRewards'
import RewardsContextProvider from './contexts/RewardsContext'
import NotRequired from './pages/NotRequired'



function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/'>
        <Route index element={<NotRequired />}/>
        <Route path='dashboard' element={<RootLayout />}>
          <Route index element={<NotRequired />}/>
          <Route path='rewards-summary'>
            <Route index element={<RewardsSummary />}/>
            <Route path='cashback-history' element={<CashbackHistory />}/>
            <Route path='cashout-rewards' element={<CashoutRewards />}/>
          </Route>
        </Route>
        <Route path='*' element={<NotRequired />}/>
      </Route>
    )
  )

  return (
    <>
      <RewardsContextProvider>
        <RouterProvider router={router}/>
      </RewardsContextProvider>
    </>
  )
}

export default App
