import { BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Work from './pages/Work/Work';

function App() {
    return (
        <BrowserRouter forceRefresh={false}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Work" element={<Work />} />
            </Routes>
        </BrowserRouter>
      );
}

export default App;
