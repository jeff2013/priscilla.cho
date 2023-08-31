import "../home/home.css";
import "../work/work.css";
import TPBanner from '../img/TP-1512.png';
import { useEffect } from "react";

function ThePantry() {
    useEffect(() => {
        document.title = "Priscilla Cho - The Pantry";
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
                <p>Research + Ideation</p>
            </div>
            <div className="col-2">
                <p className="project-p">coming soon!</p>
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
    </div>
    )
}

export default ThePantry; 