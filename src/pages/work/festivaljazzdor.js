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