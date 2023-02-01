import "../home/home.css";
import "../work/work.css";
import HBBanner from '../img/HB-1512.png';

function HoochyBoochKombucha() {
    return (
        <div className="work-home">
            <img className="hero-img" src={HBBanner} alt="Hoochy 'Booch"/>

            <div className="home-margins">
                <div className="work-intro">
                    <div className="work-gap">
                        <div className="work-brief">
                            <h1 className="intro">Hoochy 'Booch Kombucha</h1>
                            <p className="work-intro-p"> A 7-week academic research project using various research methods to evaluate and provide 
                            design recommendations for Hoochy ‘Booch’s website to decrease friction within users’ buying experience.</p>
                        </div>
                        <div className="contributions">
                                <p className="work-cc-title">Contributions</p>
                                <p className="work-cc-content">User Research</p>
                                <p className="work-cc-content">Usability Testing</p>
                                <p className="work-cc-content">Data Analysis</p>
                                <p className="work-cc-content">Prototyping</p>
                        </div>
                    </div>
                    <div className="work-cc">
                        <div className="collaborators">
                            <p className="work-cc-title">Contributors</p>
                            <p className="work-cc-content">Anna Chi</p>
                            <p className="work-cc-content">Chris Chan </p>
                            <p className="work-cc-content">Gracie Gu</p>
                            <p className="work-cc-content">Julia Nguyen</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HoochyBoochKombucha; 