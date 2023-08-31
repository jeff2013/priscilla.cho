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
                    <h1 className="side-header">Introduction</h1>
                </div>

                <div className="col-2">
                    <p className="project-p">
                        Hoochy 'Booch is a local small business based in Vancouver B.C. that produces and 
                        sells kombucha beverages. Hoochy 'Booch also provides other services such as subscriptions, home delivery, and growler refill programs.
                    </p>
                    <p className="project-p">
                        Along my four classmates, I conducted user research, which prompted the intervention of Hoochy 'Booch's e-commerce site redesign. 
                        Based on my findings, I created data-based recommendations to improve the browsing and purchasing journey for existing and potential customers.
                    </p>
                </div>
            </div>

            <div className="grid">
                <div className="col-1">
                    <h2 className="side-header">Part One</h2>
                    <p>Approach and Process</p>
                </div>

                <div className="col-2">
                    <p className="project-p">
                        We decided to use Heuristic Evaluation and Usability Testing. Heuristic Evaluation helped to identify any surface-level  
                        issues on the website, since each group member has exceptional knowledge of usability. Usability Testing was conducted to discover and 
                        understand any underlying pain points experienced by both exisiting and potential users.
                    </p>
                
                    <p className="project-p">
                       Based on my Heuristic Evaluation findings, I created recommendationa to enhance user experience by making product and hero images clickable or removing hover feedback if no action is taken, and relying on the existing button for navigation. 
                       Furthermore, to simplify user interaction and reduce cognitive load, it's advised to consolidate all products, including cans, growlers, and the starter kit, under a single "Shop" tab instead of the current multi-step process. 
                       This adjustment would enable users to effortlessly access and explore different product sets without the need for excessive navigation.
                    </p>

                    <p className="project-p">
                    We gain valuable insights into the needs and behaviors of both existing and potential customers. 
                                By performing scenario-based tasks and conducting pre- and post-interview questionnaires, we identified key pain points and areas for improvement in 
                                the products and services. These insights enabled us to create more meaningful experiences for users and better meet users' needs.
                    </p>
                    <p className="project-p">
                    Our study was designed with both validity and reliability in mind. We recruited appropriate target users and provided them with realistic tasks. 
                                This allowed us to collect rich, thick descriptions of data and observations that were representative of the true user experience.

                                To ensure consistency and reliability, all participants completed the same tasks and questionnaires, and all interviewers followed the same test protocols. 
                                We also took great care to analyze the data using established methods and techniques, which allowed us to draw meaningful and accurate conclusions from our findings.
                    </p>
                </div>
            </div>


            <div className="grid">
                <div className="col-1">
                    <h2 className="side-header">Part Two</h2>
                    <p>Discovering Key Findings</p>
                </div>

                <div>
                    <p className="project-p"> 
                        We used affinity diagramming to organize all of the meaningful comments provided by our study participants. 
                        By creating relationships between issues, the process helped us better understnad key pain points and areas for improvement.
                    </p>
                    <p className="project-p">
                        Once we had identified the issues, we then grouped them based on their occurrence on the site. 
                        This allowed us to gain a better understanding of the most critical issues and prioritize our efforts accordingly. 
                        By leveraging this approach, we were able to gain a more comprehensive understanding of the user experience and develop actionable 
                        insights that will guide our product development efforts moving forward.
                    </p>

                    <h4 className="s">lack of clarity</h4>
                    <p className="project-p"> 
                        Insufficient information regarding product and service, causing obstacles for users during the browsing and buying process.
                    </p>
                    <h4 className="work-subheader four sub-four">lack of efficiency</h4>
                    <p className="project-p"> 
                        Lack of clarity with interactable elements on the site, leading to user confusion and loss of trust.
                    </p>
                </div>
            </div>


            <div className="grid">
                <div className="col-1">
                    <h2 className="side-header">Part Three</h2>
                    <p>Main Recommendations</p>
                </div>
                <div className="col-2">
                    <p className="project-p">  
                        1. By simplifying the navigation bar, we can reduce user's confusion when searching for products or services.  
                    </p> 
                    <p className="project-p"> 
                        2. Instead of have product listings speard out on multiple different subpages where users are needed to navigate back and forth between.
                        Streamlining all products under "Shop" tab can reduce user's cognitive load when browsering for products on the site. 
                    </p> 
                    <p className="project-p"> 
                        3. Reworking the product pages by improving the product and service copywriting, allows clear communicate to users when looking for 
                        important information such as product ordering, flavour tones and delivery schedule. Product listing image was also changed to reflect the product itself. 
                        The addition of subscription discount was added to notify users without demanding cognitive load to perform mental math.  
                    </p> 
                    <p className="project-p"> 
                        4. Elements are repsonsive to user's clicking, which can reduce confusions, also "quantity" section is changed from keyboard input to buttons to create a smoother experience compared to manually entering information.
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
                        I have developed strong communication skills by collaborating with business stakeholders and 
                        effectively explaining design concepts and terminology in a way that is meaningful to them. 
                        I have gained extensive experience working with brand guidelines and designing within their 
                        established art direction. This has allowed me to develop a deep understanding of the importance 
                        of maintaining brand consistency while also incorporating design best practices and creating engaging 
                        user experiences.
                    </p> 
                </div>
                
            </div>
            <p> learning takeways, wanted to conduct a round 2 usability testing, however due to time constricts of the academic course and participants availability.</p>
            
        </div>
    )
}

export default HoochyBoochKombucha; 