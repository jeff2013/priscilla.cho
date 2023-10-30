import "../home/home.css";
import "../work/work.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import HBAF1 from '../img/HB-AF1.png';
import HBMR1 from '../img/HB-MR-1.png';
import HBMR2 from '../img/HB-MR-4.gif';
import HBMR3 from '../img/HB-MR-2.gif';
import HB1 from '../img/HB-1.png';

function HoochyBoochKombucha() {
    useEffect(() => {
        document.title = "Priscilla Cho - Hoochy 'Booch Kombucha";
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className="home">
            <div className="grid">
                <div className="col-1">
                    
                </div>
                <div className="col-2">
                    <h1 className="title">Hoochy 'Booch Kombucha</h1>
                    <h2 className="project-info">09.2022 - 12.2022</h2>
                    <p className="project-info">Academic Research Study</p>
                </div>
            </div>
            <div className="grid">
                <div className="col-1">
                    <h2 className="side-header">Introduction</h2>
                </div>

                <div className="col-2">
                    <p className="project-p">
                        Hoochy 'Booch is a local small business based in Vancouver, B.C., 
                        that produces and sells kombucha beverages. Hoochy 'Booch 
                        also provides other services such as subscriptions, 
                        home delivery, and growler refill programs.
                    </p>
                    <p className="project-p">
                        Along my four classmates, I conducted initial research, 
                        which prompted the intervention of Hoochy 'Booch's e-commerce site redesign. 
                        Based on my findings, I created data-based recommendations to improve 
                        the browsing and purchasing journey for existing and potential customers.
                    </p>

                    <div className="image-display">
                        <img className="work-img" src={HB1} alt="Redesign home page of Hoochy 'Booch Kombucha"/>
                        <div>
                            <p className="caption-p">
                                Home page redesign for Hoochy 'Booch Kombucha's site. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid">
                <div className="col-1">
                    <h2 className="side-header">Part One</h2>
                    <p className="sub-header">Approach and Process</p>
                </div>

                <div className="col-2">
                    <p className="project-p">
                        We opted to use Heuristic Evaluation and Usability Testing. 
                        Heuristic Evaluation helped to identify any surface-level  
                        issues on the website, since each group member has exceptional 
                        knowledge of usability. Usability Testing was conducted to discover and 
                        understand any underlying pain points experienced by both existing and 
                        potential users.
                    </p>
                
                    <p className="project-p">
                       Based on my Heuristic Evaluation findings, I created recommendations 
                       to enhance the user experience by making all product images clickable 
                       and removing hover feedback on images that are not clickable. 
                       Furthermore, to simplify user interaction and reduce cognitive load, 
                       it's advised to organize all products under a single "Shop" tab instead of the current 
                       multi-step process. I have also identified outdated pages on the website 
                       that are not aligned with the current business model.
                    </p>

                    <p className="project-p">
                        In our initial research, my team and I interviewed 
                        a total of 10 individuals — 6 current customers and 4 
                        potential customers. By employing scenario-driven activities 
                        and thoroughly analyzing pre- and post-interview surveys, 
                        I was able to streamline our interview approach. This adjustment allowed 
                        us to identify pain points and discover areas for improvement 
                        on product and service pages.
                    </p>
                </div>
            </div>


            <div className="grid">
                <div className="col-1">
                    <h2 className="side-header">Part Two</h2>
                    <p className="sub-header">Discovering Key Findings</p>
                </div>

                <div>
                    <p className="project-p"> 
                        Affinity diagramming helped me to organize participant feedback efficiently. 
                        This process clarified relationships between issues, 
                        leading me to a better understanding of key pain 
                        points and areas for improvement.
                    </p>
                    <p className="project-p">
                        Through Affinity diagramming, I effectively categorized 
                        issues based on research, gaining a clearer understanding 
                        of the most critical ones. The results enabled me to allocate my 
                        time and effort more efficiently when brainstorming for recommendations.
                    </p>
                    <p className="project-p">
                        My findings encompassed two critical areas of concern. 
                        Firstly, the high cognitive load experienced 
                        by prospective customers while navigating the site
                        was due to an inefficient navigation bar and categorization 
                        of pages. Additionally, a lack of clarity 
                        between interactive elements was identified, resulting 
                        in user confusion regarding appropriate actions.
                    </p>

                    <div className="image-display">
                        <img className="work-img" src={HBAF1} alt="Examples of Affinity diagramming process"/>
                        <p className="caption-p">
                            A partial snapshot of the affinity diagramming 
                            process involved generating comments from 
                            participants and organizing similar comments 
                            into distinct sections. 
                        </p>
                    </div>
                </div>
            </div>


            <div className="grid">
                <div className="col-1">
                    <h2 className="side-header">Part Three</h2>
                    <p className="sub-header">Main Recommendations</p>
                </div>
                <div className="col-2">
                    <p className="project-p">
                        A significant user concern was related to the inconsistent 
                        interactive elements causing user confusion. 
                        I recommended enabling click functionality for all product 
                        images and eliminating hover feedback on non-clickable images. 
                    </p>
                    <p className="project-p">  
                        Another significant issue raised by participants was the 
                        challenge of efficiently locating products. 
                        They noted that navigating between tabs and pages 
                        was burdensome and placed undue strain on their 
                        cognitive capacity. To address this, I propose 
                        simplifying the navigation bar to alleviate user 
                        confusion when browsing products or services.
                    </p> 
                    <p className="project-p"> 
                        Initially, product listings were displayed across 
                        various subpages, adding to the cognitive load 
                        experienced by users. Therefore, the recommendation 
                        is to centralize all products under a single tab labelled "Shop" 
                        to help further reduce the user's cognitive load.
                    </p> 
                    <p className="project-p">
                        Lastly, I've identified numerous outdated pages 
                        related to old products during the research phase. 
                        The recommendation is to remove or disable these 
                        pages to prevent additional confusion in the user's 
                        browsing experience.
                    </p>
                    <div className="image-display">
                        <div>
                            <Carousel>
                                <Carousel.Item>
                                    <img className="work-img" src={HBMR3} alt="Enabling click functionality for all product images and elimiating hover feedback on non-clickable images"/>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="work-img" src={HBMR1} alt="Redesign of navigation bar"/>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="work-img" src={HBMR2} alt="Centralize products under one tab called 'Shop'"/>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                        <div>
                            <p className="caption-p">
                                Main mock up examples for the recommended e-commerce site redesign for Hoochy 'Booch.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid">
                <div className="col-1">
                    <h2 className="side-header">Reflection</h2>
                </div>
                <div className="col-2">
                    <p className="project-p"> 
                        Engaging in participant research has been an 
                        enlightening experience. Through varied approaches to 
                        explore, I have discovered a nuanced understanding 
                        of their pain points. It has become evident that 
                        participants may sometimes face difficulty 
                        articulating their thoughts. However, 
                        by diligently observing and documenting their 
                        responses and behavior, I have found that I can 
                        discover a deeper understanding of their underlying concerns.
                    </p> 
                </div>
            </div>
            <div className="next-project grid">
                <div className="col-1">
                </div>
                
                <div className="col-2">
                    <Link className="next-project-link" to="/thepantry">Next Project: The Pantry &rarr;</Link>
                </div>
            </div>
        </div>
    )
}

export default HoochyBoochKombucha; 