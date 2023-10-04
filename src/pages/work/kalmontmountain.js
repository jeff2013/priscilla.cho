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
import KMWF1 from '../img/KM-WF1.png';
import KMWF2 from '../img/KM-WF2.png';
import KMWF3 from '../img/KM-WF3.png';
import KMWF4 from '../img/KM-WF4.png';
import KMBI1 from '../img/KM-BI1.png';
import KMBI2 from '../img/KM-BI2.png';

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
                            Offical landing page for Kalmont 
                            Mountain Safety + Rescue Team
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
                        The platform aims to empower travelers 
                        with crucial information, including emergency 
                        events and updates on mountain conditions, 
                        as well as essential knowledge and resources 
                        mainly tailors for winter climates on the mountain.
                    </p>
                    <p className="project-p">
                        I produced preliminary sketches, beginning with the 
                        landing page, my aim was to highlight 
                        the critical elements of emergency updates and educational 
                        resources. To achieve this, I envisioned incorporating 
                        a sidebar menu for the web, and a banner for moblie devices 
                        where users could access live updates 
                        and be informed to potential delays.
                    </p>
                    <p className="project-p">
                        Additionally, my aim was to incorporate a weather 
                        feature to serve as a valuable reference, 
                        facilitating a smoother planning experience 
                        for users intending to visit Kalmont Mountain.
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
                        Following the initial iterations of sketches, 
                        I continued to explore different options and 
                        placements of elements, including the navigation bar, 
                        hero image, grid system and produced more mobile iterations.
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
                                Additional low-fidelity sketches for web and mobile displays.
                            </p>
                        </div>
                    </div>
                    <p className="project-p">
                        Following team discussions and selecting 
                        my wireframes from the available options, 
                        I developed medium-fidelity wireframes. 
                        These wireframes denote the possible interactive elements, 
                        providing placeholder images and showcasing the main flow 
                        through the website's overall structure. 
                    </p>
                    <div className="image-display">
                        <div>
                            <Carousel>
                                <Carousel.Item>
                                    <img className="work-img" src={KMWF3} alt="Medium level fidelity web wireframes for landing page, news and map pages"/>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="work-img" src={KMWF4} alt="Medium level fidelity web wireframes for about us, team/member and guides"/>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="work-img" src={KMWF1} alt="Medium level fidelity mobile wireframes for landing page, side menu and guide/learn pages"/>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="work-img" src={KMWF2} alt="Medium level fidelity mobile wireframes for about us, educational and news pages"/>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                        <div>
                            <p className="caption-p">
                                Medium level fidelity wireframes for web and mobile displays.
                            </p>
                        </div>
                    </div>
                    <p className="project-p">
                        Based on feedback, I incorporated left-aligned 
                        text to enhance readability across all pages, with 
                        the goal of facilitating a smoother learning 
                        experience. Additionally, content was presented 
                        in a maximum of two columns to avoid overwhelming 
                        the user with excessive information in the limited 
                        screen space.
                    </p>
                </div>
            </div>

            <div className="grid">
                <div className="col-1">
                    <h2 className="side-header">Part Two</h2>
                    <p>Brand Identity</p>
                </div>
                <div className="col-2">
                    <p className="project-p">coming soon!</p>
                    <div className="image-display">
                        <div>
                            <Carousel>
                                <Carousel.Item>
                                    <img className="work-img" src={KMBI1} alt="Style guide highlight the colours used in this project"/>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="work-img" src={KMBI2} alt="Style guide containing the font, logo and image treatment used in this project"/>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                        <div>
                            <p className="caption-p">
                                Style guide of colours, fonts and image treatments used on Kalmont Mountain's website
                            </p>
                        </div>
                    </div>
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
                    <p className="project-p">
                        This project has been a learning experience, 
                        particularly in building a web platform and 
                        delving into the complexities of front-end development. 
                        It has familiarized me with the terminology and 
                        processes for creating accessible web platforms, 
                        as well as effectively communicating design 
                        components to team members. In retrospect, 
                        if I were to approach this project differently 
                        post-brainstorming, I would allocate more time to 
                        develop a comprehensive style guide. This step would have 
                        contributed to a more cohesive and polished appearance for the website.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default KalmontMountainResureAndSafety; 