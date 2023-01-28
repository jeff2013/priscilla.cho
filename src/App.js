import { BrowserRouter, Link, Route, Router, Routes} from 'react-router-dom';
import './App.css';
import Home from './pages/home/home';
import Navbar from './pages/navbar/navbar';
import Work from './pages/work/work';
import About from './pages/about/about';
import Resume from './pages/resume/resume';
import HoochyBoochKombucha from './pages/work/hoochyboochkombucha';
import ThePantry from './pages/work/thepantry';
import KalmontMountainResureAndSaftey from './pages/work/kalmontmountain';
import Footer from './pages/footer/footer';

function App() {
    return (
        <BrowserRouter forceRefresh={false}>
            <Routes>
                <Route path="/" element={<Navbar />}>
                    <Route index element={<Home />} />
                    <Route path="/work" element={<Work />} />
                    <Route path="/kalmontmountain" element={<KalmontMountainResureAndSaftey />} />
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
