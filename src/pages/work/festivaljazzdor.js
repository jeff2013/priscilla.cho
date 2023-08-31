import "../home/home.css";
import "../work/work.css";
import FJBanner from '../img/FJ-1512.png';
import { useEffect } from "react";

function ThePantry() {
    useEffect(() => {
        document.title = "Priscilla Cho - Festival Jazzdor";
    }, [])

    return (
        <div className="home">
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
        </div>
    )
}

export default ThePantry; 