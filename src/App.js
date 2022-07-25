import { BrowserRouter, Link, Route, Router, Routes} from 'react-router-dom';
import './App.css';
import Home from './pages/home/home';
import Navbar from './pages/navbar/navbar';
import Projects from './pages/projects/projects';
import Resume from './pages/resume/resume';

function App() {
    return (
        <BrowserRouter forceRefresh={false}>
            <Routes>
                <Route path="/" element={<Navbar />}>
                    <Route index element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/resume" element={<Resume />} />
                </Route>
            </Routes>
        </BrowserRouter>
      );
}

export default App;
