import { BrowserRouter, Link, Route, Router, Routes} from 'react-router-dom';
import './App.css';
import Home from './pages/home/home';
import Navbar from './pages/navbar/navbar';
import Projects from './pages/work/work';
import About from './pages/about/about';
import Resume from './pages/resume/resume';
import Kalmont from './pages/work/kalmont-mountain';
import Krave from './pages/work/krave-beauty';
import Reverie from './pages/work/reverie';
import Ease from './pages/work/ease';
import Pantry from './pages/work/pantry';
import Footer from './pages/footer/footer';

function App() {
    return (
        <BrowserRouter forceRefresh={false}>
            <Routes>
                <Route path="/" element={<Navbar />}>
                    <Route index element={<Home />} />
                    <Route path="/work" element={<Projects />} />
                    <Route path="/kalmont-mountain" element={<Kalmont />} />
                    <Route path="/krave-beauty" element={<Krave />} />
                    <Route path="/ease" element={<Ease />} />
                    <Route path="/reverie" element={<Reverie />} />
                    <Route path="/pantry" element={<Pantry />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/resume" element={<Resume />} />
                </Route>
            </Routes>
            <Footer />
        </BrowserRouter>
      );
}

export default App;
