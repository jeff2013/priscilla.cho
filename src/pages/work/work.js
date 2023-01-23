import '../work/work.css';
import { Outlet, Link } from "react-router-dom";
import kalmont from '../img/KMRS.png'
import kalmontHighlight from '../img/KMRS-HL.png'
import ease from '../img/EASE.png'
import easeHighlight from '../img/EASE-HL.png'
import reverie from '../img/REVERIE.png'
import reverieHighlight from '../img/REVERIE-HL.png'
import pantry from '../img/PANTRY.png'
import pantryHighlight from '../img/PANTRY-HL.png'

function Work() {
    return (
        <div className="home">
            <h1 className="intro-header">Projects</h1>
            <div className='projects'>
                <div className="card">
                    <Link to="/ease">
                        <img className="project-preview" src={ease} alt="Ease Magazine"/>
                        <img className="project-preview img-top" src={easeHighlight} alt="Ease Magazine"/>
                    </Link>
                </div>
                <div className="card">
                    <Link to="/pantry">
                        <img className="project-preview" src={pantry} alt="The Pantry"/>
                        <img className="project-preview img-top" src={pantryHighlight} alt="The Pantry"/>
                    </Link>
                </div>
                <div className="card">
                    <Link to="/reverie">
                        <img className="project-preview" src={reverie} alt="Reverie Magazine"/>
                        <img className="project-preview img-top" src={reverieHighlight} alt="Reverie Magazine"/>
                    </Link>
                </div>
                <div className="card">
                    <Link to="/kalmont-mountain">
                        <img className="project-preview" src={kalmont} alt="Kalmont Mountain Rescure and Safety Team"/>
                        <img className="project-preview img-top" src={kalmontHighlight} alt="Kalmont Mountain Rescure and Safety Team"/>
                    </Link>
                </div>
                <div>
                    <p>Hoochy 'Booch</p>
                </div>
            </div>
        </div>
    )
}

export default Work;