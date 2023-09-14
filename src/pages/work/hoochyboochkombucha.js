import "../home/home.css";
import "../work/work.css";
import { useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel';
import HBBanner from '../img/HB-1512.png';
import HB12 from '../img/HB-12.png';
import HB1 from '../img/HB-1.png';
import HBTL from '../img/HB-TL.png';
import HBMR1 from '../img/HB-MR-1.png';
import HBMR2 from '../img/HB-MR-2.gif';
import HBMR3 from '../img/HB-MR-3.gif';
import HBMR4 from '../img/HB-MR-4.gif';
import HBAD1 from '../img/HB-AD-1.png';
import HBAD2 from '../img/HB-AD-2.png';
import HBAD3 from '../img/HB-AD-3.png';
import HBUT1 from '../img/HB-UT-1.png';
import HBUT2 from '../img/HB-UT-2.png';
import HBUT3 from '../img/HB-UT-3.png';

function HoochyBoochKombucha() {
    useEffect(() => {
        document.title = "Priscilla Cho - Hoochy 'Booch Kombucha";
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
                        Hoochy 'Booch is a local small business based in Vancouver B.C. 
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
                        understand any underlying pain points experienced by both exisiting and 
                        potential users.
                    </p>
                
                    <p className="project-p">
                       Based on my Heuristic Evaluation findings, I created recommendations 
                       to enhance user experience by making product images clickable, 
                       removing hover feedback on hero image since there's no clickable 
                       feature, and streamlining the site's navigation. 
                       Furthermore, to simplify user interaction and reduce cognitive load, 
                       it's advised to streamline all products, including cans, growlers, 
                       and the starter kit, under a single "Shop" tab instead of the current 
                       multi-step process. 
                    </p>

                    <p className="project-p">
                        In our initial research, my team and I interviewed 
                        a total of 10 individuals—6 current customers and 4 
                        potential customers. By employing scenario-driven activities 
                        and thoroughly analyzing pre- and post-interview surveys, 
                        I streamlined our interview approach. This adjustment allowed 
                        us to pinpoint pain points and pinpoint areas for improvement 
                        on the product and services page.
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
                        Affinity diagramming efficiently organized participant feedback. 
                        This process clarified relationships between issues, 
                        leading myself to a better understanding of key pain 
                        points and areas for improvement.
                    </p>
                    <p className="project-p">
                        Through Affinity diagramming, I effectively categorized 
                        issues based on research, gaining a clearer understanding 
                        of the most critical ones. This enabled me to allocate my 
                        time and effort more efficiently when brainstorming for recommendations.
                    </p>

                    <p>lack of clarity</p>
                    <p className="project-p"> 
                        Insufficient information regarding product and service, 
                        causing obstacles for users during the browsing and buying process.
                    </p>
                    <p>lack of efficiency</p>
                    <p className="project-p"> 
                        Lack of clarity with interactable elements on the site, 
                        leading to user confusion and loss of trust.
                    </p>
                </div>
            </div>


            <div className="grid">
                <div className="col-1">
                    <h2 className="side-header">Part Three</h2>
                    <p className="sub-header">Main Recommendations</p>
                </div>
                <div className="col-2">
                    <p className="project-p">  
                        1. By simplifying the navigation bar, we can reduce user's 
                        confusion when searching for products or services.  
                    </p> 
                    <p className="project-p"> 
                        2. Instead of have product listings speard out on multiple 
                        different subpages where users are needed to navigate back and forth between.
                        Streamlining all products under "Shop" tab can reduce user's 
                        cognitive load when browsering for products on the site. 
                    </p> 
                    <p className="project-p"> 
                        3. Reworking the product pages by improving the product and 
                        service copywriting, allows clear communicate to users when looking for 
                        important information such as product ordering, flavour tones and 
                        delivery schedule. Product listing image was also changed to reflect the product itself. 
                        The addition of subscription discount was added to notify users without 
                        demanding cognitive load to perform mental math.  
                    </p> 
                    <p className="project-p"> 
                        4. Elements are repsonsive to user's clicking, 
                        which can reduce confusions, also "quantity" section is 
                        changed from keyboard input to buttons to create a smoother 
                        experience compared to manually entering information.
                        Finally the main call-to-action button is filled to be more prominent on the page. 
                    </p> 
                </div>
            </div>

            <div className="grid">
                <div className="col-1">
                    <h2 className="side-header">Reflection</h2>
                </div>
                <div className="col-2">
                    <p className="project-p"> 
                        I have developed strong communication skills by collaborating with business 
                        stakeholders and effectively explaining design concepts and 
                        terminology in a way that is meaningful to them. I have gained extensive 
                        experience working with brand guidelines and designing within their 
                        established art direction. This has allowed me to develop a 
                        deep understanding of the importance of maintaining brand consistency 
                        while also incorporating design best practices and creating engaging 
                        user experiences.
                    </p> 
                </div>
                
            </div>
        </div>
    )
}

export default HoochyBoochKombucha; 