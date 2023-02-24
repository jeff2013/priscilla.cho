import "../home/home.css";
import "../work/work.css";
import TPBanner from '../img/TP-1512.png';

function ThePantry() {
    return (
        <div className="work-home">
            <img className="hero-img" src={TPBanner} alt="The Pantry"/>

            <div className="home-margins">
                <div className="work-intro">
                    <div className="work-gap">
                        <div className="work-brief">
                            <h1 className="intro">The Pantry</h1>
                            <p className="work-intro-p grey">Academic Case Study</p>
                            <p className="work-intro-p grey">01.2021-04.2021</p>
                        </div>
                        <div>
                            <p className="work-intro-p"> 
                                A design project, ideating, wire framing and prototyping an application for 
                                university students during the pandemic for culinary exploration and reduce food waste.
                            </p>
                        </div>
                    </div>
                    <div className="work-cc">
                        <div className="contributions">
                                <p className="work-cc-title">Contributions</p>
                                <p className="work-cc-content">Interaction Design</p>
                                <p className="work-cc-content">Content Design</p>
                                <p className="work-cc-content">Quality Assurance</p>
                                <p className="work-cc-content">Prototyping</p>
                                <p className="work-cc-content">Wireframing</p>
                                <p className="work-cc-content">Copywriting</p>
                                <p className="work-cc-content">Ideation</p>
                        </div>
                        <div className="collaborators">
                            <p className="work-cc-title">Collaborators</p>
                            <p className="work-cc-content">Bill Gao</p>
                            <p className="work-cc-content">Raavi Vick</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="work-subheader">Coming Soon!</h3>
                </div>

            </div>
        </div>
    )
}

export default ThePantry; 