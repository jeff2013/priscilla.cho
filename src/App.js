import { BrowserRouter, Link, Route, Router, Routes} from 'react-router-dom';
import './App.css';
import Home from './pages/home/home';
import Projects from './pages/projects/projects';
import Navbar from './components/Navbar';
import Resume from './pages/resume/resume';

function App() {
    return (
        <BrowserRouter forceRefresh={false}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/resume" element={<Resume />} />
            </Routes>
        </BrowserRouter>
      );
}

export default App;
