import { BrowserRouter, Link, Route, Router, Routes} from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Navbar from './pages/navbar/navbar';
import About from './pages/about/about';
import Resume from './pages/resume/resume';
import FestivalJazzdor from './pages/work/festivaljazzdor';
import HoochyBoochKombucha from './pages/work/hoochyboochkombucha';
import ThePantry from './pages/work/thepantry';
import KalmontMountainResureAndSafety from './pages/work/kalmontmountain';
import Footer from './pages/footer/footer';

function App() {
    return (
        <BrowserRouter forceRefresh={false}>
            <Routes>
                <Route path="/" element={<Navbar />}>
                    <Route index element={<Home />} />
                    <Route path="/festivaljazzdor" element={<FestivalJazzdor />} />
                    <Route path="/kalmontmountain" element={<KalmontMountainResureAndSafety />} />
                    <Route path="/thepantry" element={<ThePantry />} />
                    <Route path="/hoochyboochkombucha" element={<HoochyBoochKombucha />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/resume" element={<Resume />} />
                </Route>
            </Routes>
            <Footer /> 
        </BrowserRouter>
      );
}

export default App;
