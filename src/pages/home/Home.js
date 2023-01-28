import "./home.css";
import { Outlet, Link } from "react-router-dom";
import thePantry from '../img/The-Pantry.png';
import HoochyBooch from '../img/Hoochy-Booch.png';

function Home() {
    return (
        <div className="home">
            <div>
                <h1 className="intro-header">welcome! I'm Priscilla, nice to meet you :)</h1>
                <p className="intro">currently under construction, good stuff coming soon.</p>
            </div>
            <div className="small-intro">
                <div className="small-intro-gap">
                    <div>
                        <p className="small-intro-title">Who I am</p>
                        <p className="small-intro-body">Aspiring UX/UI designer and design student</p>
                    </div>
                    <div>
                        <p className="small-intro-title">Where I’m located</p>
                        <p className="small-intro-body">Vancouver, B.C.</p>
                    </div>
                </div>
                <div className="small-intro-col-two">
                    <p className="small-intro-title">Things I find pleasure in...</p>
                    <p className="small-intro-body">Drinking coffee, playing volleyball + reading</p>
                </div>
            </div>
            <div className="work">
                <div className="work-container first">
                    <div className="work-banner">
                        <Link to="/hoochyboochkombucha">
                            <img className="work-img" src={HoochyBooch} alt="Hoochy 'Booch"/>
                        </Link>
                    </div>
                    <div className="work-info">
                        <div className="work-title-info">
                            <p className="w-title">Hoochy ‘Booch Kombucha</p>
                            <p className="w-date">User Research + User Experience (2022)</p>
                        </div>
                        <div>
                            <p className="work-info-body">
                            A 7-week academic research project using various research methods to evaluate and provide 
                            design recommendations for Hoochy ‘Booch’s website to decrease friction within users’ buying experience. 
                            </p>
                        </div>
                    </div>
                </div>
                <div className="work-container">
                    <div className="work-banner">
                        <Link to="/thepantry">
                            <img className="work-img" src={thePantry} alt="The Pantry"/>
                        </Link>
                    </div>
                    <div className="work-info">
                        <div className="work-title-info">
                            <p className="w-title">The Pantry</p>
                            <p className="w-date">User Interface (2021)</p>
                        </div>
                        <div>
                            <p className="work-info-body">
                            A 6-week academic design project, ideating, wire framing and prototyping an application for 
                            university students during the pandemic for culinary exploration and reduce food waste.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;