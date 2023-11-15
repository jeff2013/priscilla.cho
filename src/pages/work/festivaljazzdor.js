import "../home/home.css";
import "../work/work.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function ThePantry() {
    useEffect(() => {
        document.title = "Priscilla Cho - Festival Jazzdor";
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className="home">
            <div className="grid">
                <div className="col-1">
                </div>
                <div className="col-2">
                    <h1 className="title">Festival Jazzdor</h1>
                    <h2 className="project-info">01.2023 - 04.2023</h2>
                    <p className="project-info">Graphical Experimentation - Academic Design Project</p>
                    <p className="project-info">Contributors: Kelly, Grace, Sarah + Kiara</p>

                    <div className="p-gap">
                        <p className="project-info-p">
                            Skills:
                        </p>
                        <p className="project-info-p">
                            Research, Brainstorming, Art Direction, 
                            Design Process, Typography,  Wireframing, Prototyping, 
                            Graphic Design, Interaction Design, Visual Communication, 
                            Communication + Collaboration
                        </p>
                    </div>
                    <div className="p2-gap">
                        <p className="project-info-p">
                            Tools:
                        </p>
                        <p className="project-info-p">
                            Figma, ProtoPie, Google Workspace, Adobe Creative Cloud
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid">
                <div className="col-1">
                    <h2 className="side-header">Introduction</h2>
                </div>
                <div className="col-2">
                    <p className="project-p">
                        Jazzdor is a music festival that showcases 
                        emerging musicians with innovative projects. 
                        The mission is to challenge prevailing misconceptions surrounding jazz 
                        and its contemporary iterations. Through these efforts, 
                        Jazzdor aims to broaden and invigorate its audience base.
                    </p>
                    <h3 className="role-title">Graphic + Interface Designer</h3>
                    <p className="project-p">
                        //
                    </p>
                </div>
            </div>

            <div className="grid">
                <div className="col-1">
                    <h2 className="side-header">Part One</h2>
                    <p>Graphical Experimentation</p>
                </div>
                <div className="col-2">
                    <p className="project-p">coming soon!</p>
                </div>
            </div>

            <div className="grid">
                <div className="col-1">
                    <h2 className="side-header">Part Two</h2>
                    <p>Mircosite + Interaction Experimentation</p>
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

export default ThePantry; 