import "../home/home.css";
import "../work/work.css";
import { useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel';
import KMB1 from '../img/KM-B1.1.png';
import KMB2 from '../img/KM-B1.2.png';
import KMB3 from '../img/KM-B1.3.png';
import KMB4 from '../img/KM-B2.1.png';
import KMB5 from '../img/KM-B2.2.png';
import KMHP from '../img/KM-HP.png';

function KalmontMountainResureAndSafety() {
    useEffect(() => {
        document.title = "Priscilla Cho - Kalmont Mountain";
    }, [])

    return (
        <div className="home">
            <div className="grid">
                <div className="col-1">
                </div>
                <div className="col-2">
                    <h1 className="title">Kalmont Mountain Rescue + Safety</h1>
                    <h2 className="project-info">01.2020 - 04.2020</h2>
                    <p className="project-info">Academic Design Project</p>
                </div>
            </div>

            <div className="grid">
                <div className="col-1">
                    <h1 className="side-header">Introduction</h1>
                </div>
                <div className="col-2">
                    <p className="project-p">
                        The Kalmont Mountain Rescue and Safety 
                        Team is a volunteer-driven, community-based 
                        search and rescue organization dedicated to 
                        delivering life-saving services to the public 
                        24/7, year-round.
                    </p>
                    <p className="project-p">
                        In the Kalmont Mountain project, I played a 
                        key role in conceptualizing, designing, and 
                        implementing a comprehensive web and mobile platform. 
                        I developed the art direction and led the team 
                        in crafting an intuitive, visually appealing interface 
                        to entice and educate users.
                    </p>
                    <div className="image-display">
                        <img className="work-img" src={KMHP} alt="Offical landing page for Kalmont Mountain Safety + Rescue Team"/>
                        <p className="caption-p">
                            Offical landing page for Kalmont Mountain Safety + Rescue Team
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid">
                <div className="col-1">
                    <h2 className="side-header">Part One</h2>
                    <p>Brainstorming + Wireframing</p>
                </div>
                <div className="col-2">
                    <p className="project-p">
                        The platform aims to empower travellers 
                        with crucial information, including emergency 
                        events and updates on mountain conditions, 
                        as well as essential knowledge and resources 
                        mainly tailors for winter climates on the mountain.
                    </p>
                    <p className="project-p">
                        
                    </p>
                    <div className="image-display">
                        <div>
                            <Carousel>
                                <Carousel.Item>
                                    <img className="work-img" src={KMB1} alt="Landing page wireframe"/>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="work-img" src={KMB2} alt="Landing page and side menu wireframe"/>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="work-img" src={KMB3} alt="Map, About Us and Discover page wireframes"/>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                        <div>
                            <p className="caption-p">
                                Initial brainstorm and development of web and mobile wireframes.
                            </p>
                        </div>
                    </div>
                    <p className="project-p">
                        coming soon!
                    </p>
                    <div className="image-display">
                        <div>
                            <Carousel>
                                <Carousel.Item>
                                    <img className="work-img" src={KMB4} alt="Second round web page iterations"/>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="work-img" src={KMB5} alt="More iterations of web pages"/>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                        <div>
                            <p className="caption-p">
                                Additional wireframes for web and mobile displays.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            <div className="grid">
                <div className="col-1">
                    <h2 className="side-header">Part Two</h2>
                    <p>Brand Identity</p>
                </div>
                <div className="col-2">
                    <p className="project-p">coming soon!</p>
                </div>
            </div>

            <div className="grid">
                <div className="col-1">
                    <h2 className="side-header">Part Three</h2>
                    <p>Web Development</p>
                </div>
                <div className="col-2">
                    <p className="project-p">coming soon!</p>
                </div>
            </div>

            <div className="grid">
                <div className="col-1">
                    <h2 className="side-header">Reflection</h2>
                </div>
                <div className="col-2">
                    <p className="project-p">coming soon!</p>
                </div>
            </div>
        </div>
    )
}

export default KalmontMountainResureAndSafety; 