import "../home/home.css";
import "../work/work.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import TP1 from '../img/TP-1.png';
import TPB1 from '../img/TPB1.png';
import TPB2 from '../img/TPB2.png';
import TPBI from '../img/TPBI.png';
import TPC from '../img/TPC.png';
import TPFONT from '../img/TP-FONT.png';

function ThePantry() {
    useEffect(() => {
        document.title = "Priscilla Cho - The Pantry";
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className="home">
            <div className="grid">
                <div className="col-1">
                </div>
                <div className="col-2">
                    <h1 className="title">The Pantry</h1>
                    <h2 className="project-info">01.2021-04.2021</h2>
                    <p className="project-info">Interface Design - Academic Design Project</p>
                    <p className="project-info">Contributors: Bill + Raavi</p>

                    <div className="p-gap">
                        <p className="project-info-p">
                            Skills:
                        </p>
                        <p className="project-info-p">
                            Research, Brainstorming, Art Direction, 
                            Design Process, Wireframing, Prototyping, 
                            Interaction Design, User-Centered Design, Visual Design, 
                            Communication + Collaboration
                        </p>
                    </div>
                    <div className="p2-gap">
                        <p className="project-info-p">
                            Tools:
                        </p>
                        <p className="project-info-p">
                            Figma, Framer
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
                        The Pantry is an application, which allows 
                        the user to capture a photo of their pantry or 
                        refrigerator and upload it to the app. 
                        The application then identifies recipes 
                        based on the available ingredients and 
                        accommodates for any dietary restrictions or preferences. 
                        This application aims to tackle the issue 
                        of food waste among young adults.
                    </p>

                    <h3 className="role-title">Interface Designer</h3>
                    <p className="project-p">
                        Within The Pantry project, my responsibilities 
                        encompassed conceptualizing and designing a functional
                        prototype in the form of a mobile application. 
                        I also lead the development of the art direction, 
                        designed user interfaces and established the primary user flow.
                    </p>
                    <div className="image-display">
                        <img className="work-img" src={TP1} alt="Three phones showing the interfaces of The Pantry"/>
                        <p className="caption-p">
                            Preview of The Pantry application (landing page, recipe page and instruction/tutorial page)
                        </p>
                    </div>
                </div>
            </div>
            <div className="grid">
                <div className="col-1">
                    <h2 className="side-header">Part One</h2>
                    <p>Research + Ideation</p>
                </div>
                <div className="col-2">
                    <p className="project-p">
                        The scope of the project was to develop 
                        an application specifically tailored for 
                        use during the COVID-19 pandemic. After 
                        brainstorming and discussions, my two teammates 
                        and I collectively decided to move forward with 
                        the concept of addressing food waste challenges 
                        among university students.
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
                    <div className="id-grid">
                        <div className="image-grid">
                            <div className="id">
                                <img className="id-img" src={TPB1} alt="Preliminary sketches on the landing page"/>
                            </div>
                            <div className="id">
                                <img className="id-img" src={TPB2} alt="Preliminary sketches on the recipe page"/>
                            </div>
                        </div>
                        <p className="caption-p">
                            Preliminary sketches on The Pantry's landing and recipe page
                        </p>
                    </div>
                </div>
            </div>
            <div className="grid">
                <div className="col-1">
                    <h2 className="side-header">Part Two</h2>
                    <p>Brand Identity</p>
                </div>
                <div className="col-2">
                    <p className="project-p">

                    </p>
                    <p className="project-p">
                        I led the creation and design of the art direction for the application. 
                        I managed the entire process of designing the logo, 
                        selecting fonts, and choosing a suitable color palette.
                        Poppins was selected as one of the two fonts 
                        for The Pantry application due to its contemporary 
                        and geometric sans-serif design. Paired with Open Sans, 
                        which contrasts Poppins with its humanist and neutral 
                        design, it complements Poppins to achieve a readable 
                        and friendly appearance.
                    </p>
                    <div className="image-display">
                        <img className="work-img" src={TPFONT} alt="Poppins and Open Sans"/>
                        <p className="caption-p">
                            Poppins and Open Sans displayed and how 
                            these fonts were used within the application
                        </p>
                    </div>
                    <p className="project-p">
                        I opted for a red monochromatic colour palette, 
                        as red is widely recognized as an appetite-stimulating 
                        colour. Research confirmed its ability to excite and 
                        stimulate the appetite, aligning seamlessly with the 
                        application's goal of encouraging users to step into 
                        the kitchen. Additionally, the colours contrasts against 
                        the white background, which creates visual balance.
                    </p>
                    <div className="image-display">
                        <img className="work-img" src={TPC} alt="Outline of four colours used within the application"/>
                        <p className="caption-p">
                            Outlining all the colours and its usage within The Pantry application
                        </p>
                    </div>
                    <p className="project-p">
                        coming soon!
                    </p>
                    <div className="image-display">
                        <img className="work-img" src={TPBI} alt="The Pantry logo in three different colours on three different backgrounds"/>
                        <p className="caption-p">
                            The Pantry logo used on three different coloured background
                        </p>
                    </div>
                </div>
            </div>
            <div className="grid">
                <div className="col-1">
                    <h2 className="side-header">Part Three</h2>
                    <p>Interface Design</p>
                </div>
                <div className="col-2">
                    <p className="project-p">
                        coming soon!
                     </p>
                </div>
            </div>
            <div className="grid">
                <div className="col-1">
                    <h2 className="side-header">Reflection</h2>
                </div>
                <div className="col-2">
                    <p className="project-p">
                        coming soon!
                    </p>
                </div>
            </div>
            <div className="next-project grid">
                <div className="col-1">
                </div>
                <div className="col-2">
                    <Link className="next-project-link" to="/kalmontmountain">Next Project: Kalmont Mountain Rescue + Safety &rarr;</Link>
                </div>
            </div>
        </div>
    )
}

export default ThePantry; 