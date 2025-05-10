import logo from './logo.svg';
import './App.css';
import LoginPage from './Pages/LoginPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import MarketplacePage from './Pages/MarketPlace';
import SchedulePickupPage from './Pages/SchedulePickupPage';
import TradeInPage from './Pages/TradeInPage';
import LearnPage from './Pages/LearnPage';
import AboutPage from './Pages/AboutPage';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/marketplace" element={<MarketplacePage />} />
        <Route path="/schedulepickup" element={<SchedulePickupPage/>}/>
        <Route path="/tradein" element={<TradeInPage/>}/>
        <Route path="/learn" element={<LearnPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>


        
      </Routes>
    </Router>
  );
}

export default App;
