import "../home/home.css";
import "../work/work.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function ThePantry() {
    useEffect(() => {
        document.title = "Priscilla Cho - Festival Jazzdor";
    }, [])

    return (
        <div className="home">
            <div className="grid">
                <div className="col-1">
                </div>
                <div className="col-2">
                    <h1 className="title">Festival Jazzdor</h1>
                    <h2 className="project-info">01.2023 - 04.2023</h2>
                    <p className="project-info">Academic Design Project</p>
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
                    <p className="project-p">
                        
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