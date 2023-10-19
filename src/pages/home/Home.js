import "./home.css";
import { Outlet, Link } from "react-router-dom";
import { useEffect } from "react";
import thePantry from '../img/The-Pantry.png';
import HoochyBooch from '../img/Hoochy-Booch.png';
import KMRS from '../img/Kalmont-Mountain.png';
import FJ from '../img/fj.png';

function Home() {
    useEffect(() => {
        document.title = "Priscilla Cho";
    }, [])

    return (
        <div className="home">
            <h1 className="intro-header">
                Hello! I'm Priscilla, an aspiring UI/UX designer currently studying at Simon Fraser University's 
                School of Interactive Arts + Technology.
            </h1> 

           {/* <div className="grid home-grid">
                <div className="col-1">
                    <h1 className="side-header">2023</h1>
                </div>

                <div className="col-2">
                    <a className="thumbnail" href="/festivaljazzdor">
                        <div className="project">
                            <h2 className="project-name">Festival Jazzdor</h2>
                            <h2 className="project-name category">— Experimental Design</h2>
                        </div>
                        <p className="project-description">
                            A mircosite to provide opportunities for past attendees to relive their festival memories, 
                            while newcomers can catch a sneak peek of the vibrant shows.
                        </p>
                        <img className="project-img" src={FJ} alt="Festival Jazzdor"/>
                    </a>
                </div> 
            </div> */}

            <div className="grid home-grid">
                <div className="col-1">
                    <h1 className="side-header">2022</h1>
                </div>

                <div className="col-2">
                    <a className="thumbnail" href="/hoochyboochkombucha"> 
                        <div className="project">
                                <h2 className="project-name">Hoochy 'Booch Kombucha</h2>
                                <h2 className="project-name category"> — User Research</h2>
                        </div>
                        <p className="project-description">
                            A research project evaluating Hoochy ‘Booch’s website in order 
                            decrease friction within users’ buying experience. 
                        </p>
                        <img className="project-img" src={HoochyBooch} alt="Hoochy 'Booch Kombucha"/>
                    </a>
                </div>

            </div>

            { /* <div className="grid home-grid">
                <div className="col-1">
                    <h1 className="side-header">2021</h1>
                </div>
                <div className="col-2">
                    <a className="thumbnail" href="/thepantry">
                        <div className="project">
                            <h2 className="project-name">The Pantry</h2>
                            <h2 className="project-name category"> — Interface Design</h2>
                        </div>
                        <p className="project-description">
                            A pandemic-responsive application tailored to university students, 
                            enabling culinary exploration while addressing food waste challenges.
                        </p>
                        <img className="project-img" src={thePantry} alt="The Pantry"/>
                    </a>
                </div>
            </div> */}

            <div className="grid home-grid">
                <div className="col-1">
                    <h1 className="side-header">2020</h1>
                </div>
                <div className="col-2">
                    <a className="thumbnail" href="/kalmontmountain">
                        <div className="project">
                            <h2 className="project-name">Kalmont Mountain Rescue + Safety Team</h2>
                            <h2 className="project-name category"> — Interface Design</h2>
                        </div>
                        <p className="project-description">
                            An academic project for a fabricated client to develop 
                            a full functioning website to effectively display details and information for 
                            users planning their visit to the mountain. 
                        </p>
                        <img className="project-img" src={KMRS} alt="Kalmont Mountain Rescue and Safety Team"/>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Home;