import "../home/home.css";
import "../work/work.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function ThePantry() {
    useEffect(() => {
        document.title = "Priscilla Cho - The Pantry";
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
                    <p className="project-p">coming soon!</p>
                </div>
            </div>

            <div className="grid">
                <div className="col-1">
                    <h2 className="side-header">1.</h2>
                    <p>Research + Ideation</p>
                </div>
                <div className="col-2">
                    <p className="project-p">coming soon!</p>
                </div>
            </div>

            <div className="grid">
                <div className="col-1">
                    <h2 className="side-header">2.</h2>
                    <p>Brand Identity</p>
                </div>
                <div className="col-2">
                    <p className="project-p">coming soon!</p>
                </div>
            </div>

            <div className="grid">
                <div className="col-1">
                    <h2 className="side-header">3.</h2>
                    <p>Interface Design</p>
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
                    <Link className="next-project-link" to="/kalmontmountain">Next Project: Kalmont Mountain Rescue + Safety &rarr;</Link>
                </div>
            </div>
        </div>
    )
}

export default ThePantry; 