import "../home/home.css";
import "../work/work.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
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
import KMFONT from '../img/KM-FONT.png';
import KMLOGO from '../img/KM-LOGO.png';
import KMIM from '../img/KM-IM.png';
import KMC1 from '../img/KM-COLOR1.png';
import KMC2 from '../img/KM-COLOR2.png';
import KMCODE from '../img/KMCODE.png';

function KalmontMountainResureAndSafety() {
    useEffect(() => {
        document.title = "Priscilla Cho - Kalmont Mountain";
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className="home">
            <div className="grid">
                <div className="col-1">
                </div>
                <div className="col-2">
                    <h1 className="title">Kalmont Mountain Rescue + Safety</h1>
                    <h2 className="project-info">01.2020 - 04.2020</h2>
                    <p className="project-info">Interface Design - Academic Design Project</p>
                    <p className="project-info">Contributors: Bill + Jarrod</p>

                    <div className="p-gap">
                        <p className="project-info-p">
                            Skills:
                        </p>
                        <p className="project-info-p">
                            Research, Brainstorming, Art Direction, 
                            Design Process, Wireframing, Prototyping, 
                            Responsive Design, Graphic Design,
                            Web Development, Interaction Design, 
                            Communication + Collaboration
                        </p>
                    </div>
                    <div className="p2-gap">
                        <p className="project-info-p">
                            Tools:
                        </p>
                        <p className="project-info-p">
                            Figma, VS Code (HTML + CSS)
                        </p>
                    </div>
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
                    <h3 className="role-title">Interface Designer</h3>
                    <p className="project-p">
                        In the Kalmont Mountain project, I played a 
                        role in conceptualizing, designing, and 
                        implementing a comprehensive web and mobile platform. 
                        I developed the art direction and led the team 
                        in crafting an intuitive, visually appealing interface 
                        to entice and educate users.
                    </p>
                </div>
            </div>

            <div className="grid">
                <div className="col-1">
                </div>
                <div className="col-2">
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
                    <p>Ideation + Wireframing</p>
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
                    <div className="image-display">
                        <img className="work-img" src={KMB1} alt="Landing page wireframe"/>
                        <p className="caption-p">
                            Initial landing page wireframe
                        </p>
                    </div>
                    <p className="project-p">
                        Additionally, my aim was to incorporate a weather 
                        feature to serve as a valuable reference, 
                        facilitating a smoother planning experience 
                        for users intending to visit Kalmont Mountain.
                    </p>

                    <div className="id-grid">
                        <div className="image-grid">
                            <div className="id">
                                <img className="id-img" src={KMB2} alt="Landing page and side menu wireframe"/>
                            </div>
                            <div className="id">
                                <img className="id-img" src={KMB3} alt="Map, About Us and Discover page wireframes"/>
                            </div>
                        </div>
                        <p className="caption-p">
                            Initial brainstorm and development of web and mobile wireframes
                        </p>
                    </div>

                    <p className="project-p">
                        Following the initial iterations of sketches, 
                        I continued to explore different options and 
                        placements of elements, including the navigation bar, 
                        hero image, grid system and produced more mobile iterations.
                    </p>

                    <div className="id-grid">
                        <div className="image-grid">
                            <div className="id">
                                <img className="id-img" src={KMB4} alt="Second round web page iterations"/>
                            </div>
                            <div className="id">
                                <img className="id-img" src={KMB5} alt="More iterations of web pages"/>
                            </div>
                        </div>
                        <p className="caption-p">
                            Additional low-fidelity sketches for web and mobile displays
                        </p>
                    </div>

                    <p className="project-p">
                        Following team discussions and selecting 
                        my wireframes from the available options, 
                        I developed medium-fidelity wireframes. 
                        These wireframes denote the possible interactive elements, 
                        providing placeholder images and showcasing the main flow 
                        through the website's overall structure. 
                    </p>

                    <div className="id-grid">
                        <div className="image-grid">
                            <div className="id">
                                <img className="id-img" src={KMWF3} alt="Medium level fidelity web wireframes for landing page, news and map pages"/>
                            </div>
                            <div className="id">
                                <img className="id-img" src={KMWF4} alt="Medium level fidelity web wireframes for about us, team/member and guides"/>
                            </div>
                        </div>
                        <p className="caption-p">
                            Medium level fidelity wireframes for web displays
                        </p>
                    </div>

                    <div className="id-grid">
                        <div className="image-grid">
                            <div className="id">
                                <img className="id-img" src={KMWF1} alt="Medium level fidelity mobile wireframes for landing page, side menu and guide/learn pages"/>
                            </div>
                            <div className="id">
                                <img className="id-img" src={KMWF2} alt="Medium level fidelity mobile wireframes for about us, educational and news pages"/>
                            </div>
                        </div>
                        <p className="caption-p">
                            Medium level fidelity wireframes for mobile displays
                        </p>
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
                    <p className="project-p">
                        I chose Sofia Pro because of its enhanced 
                        readability due to its geometric shape, which communicates 
                        a friendly and contemporary composition. Given that 
                        the website's primary objective is to inform users 
                        about recurrent news and updates, selecting a legible 
                        font which can be displayed in multiple weights was essential.
                    </p>
                    <div className="image-display">
                        <img className="work-img" src={KMFONT} alt="Sofia Pro bold and regular displayed and an example of the font used within the site"/>
                        <p className="caption-p">
                            Displaying Sofia Pro font and how the font was applied throughout the website.
                        </p>
                    </div>
                    <p className="project-p">
                        The logo was created using Sofia Pro, 
                        resulting in a straightforward and functional design 
                        that can be easily recognized and understood 
                        across multiple platforms. 
                    </p>
                    <div className="image-display">
                        <img className="work-img" src={KMLOGO} alt=""/>
                        <p className="caption-p">
                            The logo was created in white and black to be used on multiple different displays.
                        </p>
                    </div>
                    <p className="project-p">
                        A purple monochromatic colour palette was selected because 
                        purple symbolizes qualities of leadership and honour, 
                        which aligns seamlessly with the organization's 
                        values and commitment to its work. Furthermore, 
                        the colour contrasts 
                        against the white background, which creates 
                        visual balance. 
                    </p>

                    <div className="id-grid">
                        <div className="image-grid">
                            <div className="id">
                                <img className="id-img" src={KMC1} alt="Hightlighting dark and muted purple and how the colours are featured"/>
                            </div>
                            <div className="id">
                                <img className="id-img" src={KMC2} alt="Hightlighting bright purple and black, how the colours are featured"/>
                            </div>
                        </div>
                        <p className="caption-p">
                            Outlining all the colours of the site and how these colours were applied on the website
                        </p>
                    </div>

                    <p className="project-p">
                        A purple overlay was applied to all images 
                        to achieve balance and maintain a 
                        consistent appearance across all pages.
                    </p>
                    <div className="image-display">
                        <img className="work-img" src={KMIM} alt="A purple overlay on an image, including an example."/>
                        <p className="caption-p">
                            Illustrating how image treatment was applied to images
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid">
                <div className="col-1">
                    <h2 className="side-header">Part Three</h2>
                    <p>Web Development</p>
                </div>
                <div className="col-2">
                    <p className="project-p">
                        In the web development phase, I was responsible 
                        for structuring the HTML pages and generating CSS files, 
                        which were then linked to multiple pages. 
                        This process ultimately culminated in the current 
                        design displayed on the website. I was also responsible 
                        for quality control ensuring that all elements adhered 
                        to the style guide.  
                    </p>
                    <div className="image-display">
                        <img className="work-img" src={KMCODE} alt="A purple overlay on an image, including an example."/>
                        <p className="caption-p">
                            Snapshot of HTML and CSS code to create the home page design
                        </p>
                    </div>
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
                        develop a comprehensive style guide and higher quality image searching. 
                        This step would have contributed to a more cohesive 
                        and polished appearance.
                    </p>
                </div>
            </div>
            <div className="next-project grid">
                <div className="col-1">
                </div>
                
                <div className="col-2">
                    <Link className="next-project-link" to="/hoochyboochkombucha">Next Project: Hoochy 'Booch Kombucha &rarr;</Link>
                </div>
            </div>
        </div>
    )
}

export default KalmontMountainResureAndSafety; 