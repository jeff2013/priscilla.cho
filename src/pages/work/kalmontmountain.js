import "../home/home.css";
import "../work/work.css";
import KMBanner from '../img/KM-1512.png';

function KalmontMountainResureAndSafety() {
    return (
        <div className="work-home">
            <img className="hero-img" src={KMBanner} alt="The Pantry"/>

            <div className="home-margins">
                <div className="work-intro">
                    <div className="work-gap">
                        <div className="work-brief">
                            <h1 className="intro">Kalmont Mountain Resure + Safety</h1>
                            <p className="work-intro-p grey">Academic Case Study</p>
                            <p className="work-intro-p grey">01.2020-04.2020</p>
                        </div>
                        <div>
                            <p className="work-intro-p"> 
                                A research and design project ideating, wireframing and developing a full functioning and reactive website 
                                for a fabricated client to effectively display details and information for users planning their visit to the mountain. 
                            </p>
                        </div>
                    </div>
                    <div className="work-cc">
                        <div className="contributions">
                                <p className="work-cc-title">Contributions</p>
                                <p className="work-cc-content">Front-End Web Development (HTML + CSS)</p>
                                <p className="work-cc-content">Website Architecture</p>
                                <p className="work-cc-content">User Interaction</p>
                                <p className="work-cc-content">Content Design</p>
                                <p className="work-cc-content">Quality Assurance</p>
                                <p className="work-cc-content">Copywriting</p>
                                <p className="work-cc-content">Wireframing</p>
                        </div>
                        <div className="collaborators">
                            <p className="work-cc-title">Collaborators</p>
                            <p className="work-cc-content">Bill Gao</p>
                            <p className="work-cc-content">Jarrod Pan</p>
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

export default KalmontMountainResureAndSafety; 