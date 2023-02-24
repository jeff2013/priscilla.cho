import '../work/work.css';
import '../home/home.css';
import { Outlet, Link } from "react-router-dom";


function Work() {
    return (
        <div className="home">
            <h1 className="intro-header">Projects</h1>
            <div className='projects'>
            </div>
        </div>
    )
}

export default Work;