import "../home/home.css";
import "../work/work.css";
import { useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel';
import KMB1 from '../img/KM-B1.1.png';
import KMB2 from '../img/KM-B1.2.png';
import KMB3 from '../img/KM-B1.3.png';
import KMB4 from '../img/KM-B2.1.png';
import KMB5 from '../img/KM-B2.1.png';

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
                        Welcome to Kalmont Mountain! Kalmont 
                        Mountain Rescue and Safety Team is a 
                        voluneer community-based search and rescue 
                        team providing a life-saving service to the 
                        public, 24 hours a day, 365 days a year. 
                        This platform aims to empower travellers with 
                        essential knowledge and resources for their 
                        journey on the mountain.
                    </p>
                    <p className="project-p">
                        In the Kalmont Mountain project, I played a 
                        key role in conceptualizing, designing, and 
                        implementing a comprehensive web and mobile platform. 
                        I developed the art direction and led the team 
                        in crafting an intuitive, visually appealing interface 
                        to entice and educate users.
                    </p>
                </div>
            </div>

            <div className="grid">
                <div className="col-1">
                    <h2 className="side-header">Part One</h2>
                    <p>Brainstorming + Wireframing</p>
                </div>
                <div className="col-2">
                    <p className="project-p">coming soon!</p>
                    <div className="image-display">
                        <div>
                            <Carousel>
                                <Carousel.Item>
                                    <img className="work-img" src={KMB1} alt=""/>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="work-img" src={KMB2} alt=""/>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="work-img" src={KMB3} alt=""/>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                        <div>
                            <p className="caption-p">
                                Caption
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
                                    <img className="work-img" src={KMB4} alt=""/>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="work-img" src={KMB5} alt=""/>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                        <div>
                            <p className="caption-p">
                                Caption
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