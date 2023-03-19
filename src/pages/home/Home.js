import "./home.css";
import { Outlet, Link } from "react-router-dom";
import { useEffect } from "react";
import thePantry from '../img/The-Pantry.png';
import HoochyBooch from '../img/Hoochy-Booch.png';
import KMRS from '../img/Kalmont-Mountain.png';

function Home() {
    useEffect(() => {
        document.title = "Priscilla Cho";
    }, [])

    return (
        <div className="home">
            <div className="me-intro">
                <div>
                    <h1 className="intro-header">
                        Hello! I'm Priscilla Cho, an aspiring UX/UI designer and 
                        design student at Simon Fraser University's 
                        School of Interactive Art + Technology.
                    </h1> 
                </div>
            </div>

            <div className="location">
                <p className="small-intro-title">Where I’m located</p>
                <p className="small-intro-body">Vancouver, British Columbia</p>
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

            <div  className="work half">
                <div className="work-container">
                    <div className="work-banner">
                        <Link to="/kalmontmountain">
                            <img className="work-img" src={KMRS} alt="The Pantry"/>
                        </Link>
                    </div>
                    <div className="work-info">
                        <div className="work-title-info">
                            <p className="w-title">Kalmont Mountain Resure And Safety</p>
                            <p className="w-date">User Interface (2020)</p>
                        </div>
                        <div>
                            <p className="work-info-body">
                                A 7 week academic research and design project ideating, wireframing and developing a full functioning and reactive website 
                                for a fabricated client to effectively display details and information for users planning their visit to the mountain. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;