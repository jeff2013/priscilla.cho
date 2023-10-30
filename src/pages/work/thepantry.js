import "../home/home.css";
import "../work/work.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import TP1 from '../img/TP-1.png';

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
                    <p className="project-info">Academic Design Project</p>
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
                            Preview of The Pantry application (landing page, recipe page and instruction/tutorial page).
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
                </div>
            </div>

            <div className="grid">
                <div className="col-1">
                    <h2 className="side-header">Part Two</h2>
                    <p>Brand Identity</p>
                </div>
                <div className="col-2">
                    <p className="project-p">
                        coming soon!
                    </p>
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