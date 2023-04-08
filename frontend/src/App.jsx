import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Import pages
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Services from './pages/Services';
import Software from './pages/Software';
import Page404 from "./pages/Error404";
import RGPD from './pages/RGPD';
import JoinUs from './pages/JoinUs';
import Offers from './pages/Offers';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';

// Import components
import Navbar from './components/Navbar';
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App scroll-smooth">
    <Navbar />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<AboutUs/>} />
        <Route path="/Services" element={<Services/>} />
        <Route path="/Software" element={<Software/>} />
        <Route path="/Team" element={<Team/>} />
        <Route path="/Signin" element={<Signin/>} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/RGPD" element={<RGPD/>} />
        <Route path="/Joinus" element={<JoinUs/>} />
        <Route path="/Offers/:id" element={<Offers/>} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  <Footer />
</div>
  );
}

export default App;
