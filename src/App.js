import { BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Work from './pages/work/work';
import Navbar from './components/Navbar';

function App() {
    return (
        <BrowserRouter forceRefresh={false}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/work" element={<Work />} />
                
            </Routes>
        </BrowserRouter>
      );
}

export default App;
