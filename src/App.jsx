import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import  Sidebar  from './components/SIdebar'
import { BrowserRouter ,Routes,Route} from 'react-router-dom'
import Dashboard from "./pages/Dashboard"
import Home from './pages/Home'
import Cohorts from './pages/Cohorts'
import Hackathon from './pages/Hackathon'
import CrowdfundCampaigns from './pages/CrowdfundCampaigns'
import Profile from './pages/Profile'
import Wallet from './pages/Wallet'
function App() {
  const [count, setCount] = useState(0)

  return (
 

  
   <BrowserRouter>
    <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/home" element={<Home />} />
    <Route path="/Cohorts" element={<Cohorts />} />
    <Route path="/Hackathon" element={<Hackathon />} />
    <Route path="/CrowdfundCampaigns" element={<CrowdfundCampaigns />} />
    <Route path="/Profile" element={<Profile />} />
    <Route path="/Wallet" element={<Wallet />} />
  </Routes>
</BrowserRouter>

  )
}

export default App
