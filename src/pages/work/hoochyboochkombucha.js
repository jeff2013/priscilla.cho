import "../home/home.css";
import "../work/work.css";
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
    return (
        <div className="work-home">
            <img className="hero-img" src={HBBanner} alt="Hoochy 'Booch Kombucha"/>

            <div className="home-margins">
                <div className="work-intro">
                    <div className="work-gap">
                        <div className="work-brief">
                            <h1 className="intro">Hoochy 'Booch Kombucha</h1>
                            <p className="work-intro-p grey">Academic Case Study</p>
                            <p className="work-intro-p grey">09.2022-01.2023</p>
                        </div>
                        <div>
                            <p className="work-intro-p">
                                A research project using various research methods to evaluate and provide 
                                design recommendations for Hoochy ‘Booch’s website to decrease friction 
                                within users’ buying experience. 
                            </p>
                        </div>
                    </div>
                    <div className="work-cc">
                        <div className="contributions">
                                <p className="work-cc-title">Contributions</p>
                                <p className="work-cc-content">User Research</p>
                                <p className="work-cc-content">Usability Testing</p>
                                <p className="work-cc-content">Data Analysis</p>
                                <p className="work-cc-content">Prototyping</p>
                        </div>
                        <div className="collaborators">
                            <p className="work-cc-title">Collaborators</p>
                            <p className="work-cc-content">Anna Chi</p>
                            <p className="work-cc-content">Chris Chan</p>
                            <p className="work-cc-content">Gracie Gu</p>
                            <p className="work-cc-content">Julia Nguyen</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="work-sub work-row">
                        <div className="first-col">
                            <h3 className="work-subheader">fun + good for you</h3>
                            <p className="work-p">
                                Hoochy 'Booch is a Vancouver-based company that produces and sells kombucha beverages and also, 
                                offers services such as subscriptions, home delivery, and growler refill programs. 
                            </p>
                        </div>
                        <div className="div-img">   
                            <img className="bus-goal" src={HB1} alt="Redesign of Hoochy 'Booch's home page"/>
                            <figcaption className="fig-cap">Our team's re-design of Hoochy 'Booch's home page</figcaption>
                        </div>
                    </div>
                   <div className="work-sub work-row">
                        <div className="first-col">
                            <h3 className="work-subheader">business goal</h3>
                            <p className="work-p"> 
                                Hoochy 'Booch aims to increase its e-commerce site's product 
                                subscriptions and sales to expand its brand exposure and customer loyalty.
                            </p>
                            <h4 className="work-subheader four">framing question</h4>
                            <p className="work-p more">
                                By developing a question that would help align our focus and exploration. 
                                By having a clear and well-defined question, the team could work more effectively and efficiently in 
                                addressing the problem at hand. This approach helped to streamline the research process and 
                                improve the overall quality of our findings.
                            </p>
                        </div>
                        <div className="div-img">
                            <img className="bus-goal" src={HB12} alt="Hoochy 'Booch Kombucha"/>
                            <figcaption className="fig-cap">Framing question for our following research</figcaption>
                        </div>
                   </div>
                   <div className="work-sub">
                        <h3 className="work-subheader">project timeline</h3>
                        <img className="bus-goal" src={HBTL} alt="project timeline"/>
                   </div>
                   <div className="work-sub work-row">
                        <div className="first-col">   
                            <h3 className="work-subheader">approach + process</h3>
                            <p className="work-p"> 
                                The team choose 2 research methods, Heuristic Evaluation and Usability Testing. Heuristic Evaluation helped to identify any surface-level usability 
                                issues on the website. Usability Testing was conducted to discover and 
                                understand any underlying pain points experienced by both exisiting and potential users.
                            </p>
                            <h4 className="work-subheader four">heuristic evaluation</h4>
                            <p className="work-p"> 
                                Following the guidelines of  <a className="work-link" href="https://www.nngroup.com/articles/ten-usability-heuristics/">Nielsen Norman Group's</a> principles to interaction design, 
                                we gathered after to share our findings and assign severity ratings to the issues.
                            </p>
                            <p className="work-p p-space"> 
                                Some of my main findings included: 

                            </p>
                            <p className="work-p p-space"> 
                                1. Product and hero images provided feedback on hover to users, but were not clickable. 
                                As a recommendation, making these elements clickable or eliminating feedback on hover and navigating the user solely with the already existing button. 
                            </p>  
                            <p className="work-p p-space"> 
                                2. Additionally, there were too many steps required to access a full product listing page, as the user needed to go from the "Shop" tab to "Explore Can" 
                                and then to "Can List" to view all the cans offered. To reduce the user's cognitive load, a simple solution would be to streamline all products, including cans, 
                                growlers, and the starter kit, into one "Shop" tab. This would also improve the user's ability to view different sets of products without the need to navigate back and forth.
                            </p>
                            <h4 className="work-subheader four">usability testing</h4>
                            <p className="work-p"> 
                                We gain valuable insights into the needs and behaviors of both existing and potential customers. 
                                By performing scenario-based tasks and conducting pre- and post-interview questionnaires, we identified key pain points and areas for improvement in 
                                the products and services. These insights enabled us to create more meaningful experiences for users and better meet users' needs.
                            </p>
                            <p className="work-p p-space">
                                Our study was designed with both validity and reliability in mind. We recruited appropriate target users and provided them with realistic tasks. 
                                This allowed us to collect rich, thick descriptions of data and observations that were representative of the true user experience.

                                To ensure consistency and reliability, all participants completed the same tasks and questionnaires, and all interviewers followed the same test protocols. 
                                We also took great care to analyze the data using established methods and techniques, which allowed us to draw meaningful and accurate conclusions from our findings.
                            </p>
                        </div>
                        <div className="work-carousel">
                                <Carousel>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={HBUT1}
                                            alt="First slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={HBUT2}
                                            alt="Second slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={HBUT3}
                                            alt="Third slide"
                                        />
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                   </div>
                   <div className="work-sub work-row">
                        <div>
                            <h3 className="work-subheader">discovering key findings</h3>
                            <p className="work-p"> 
                                We used affinity diagramming to organize all of the meaningful comments provided by our study participants. 
                                By creating relationships between issues, the process helped us better understnad key pain points and areas for improvement.
                            </p>
                            <p className="work-p p-space">
                                Once we had identified the issues, we then grouped them based on their occurrence on the site. 
                                This allowed us to gain a better understanding of the most critical issues and prioritize our efforts accordingly. 
                                By leveraging this approach, we were able to gain a more comprehensive understanding of the user experience and develop actionable 
                                insights that will guide our product development efforts moving forward.
                            </p>
                            <h4 className="work-subheader four sub-four">lack of clarity</h4>
                            <p className="work-p sub-p"> 
                                Insufficient information regarding product and service, causing obstacles for users during the browsing and buying process.
                            </p>
                            <h4 className="work-subheader four sub-four">lack of efficiency</h4>
                            <p className="work-p sub-p"> 
                                Lack of clarity with interactable elements on the site, leading to user confusion and loss of trust.
                            </p>
                        </div>
                        <div className="work-carousel">
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={HBAD1}
                                        alt="Snapshots of affinity diagramming process - part one"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={HBAD2}
                                        alt="Snapshots of affinity diagramming process - part two"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={HBAD3}
                                        alt="Results of affinity diagramming and uncovering key findings"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </div>
                   </div>
                   
                   <div className="work-sub  work-row">
                        <div>
                            <h3 className="work-subheader">main recommendations</h3>
                            <p className="work-p">  
                                1. By simplifying the navigation bar, we can reduce user's confusion when searching for products or services.  
                            </p> 
                            <p className="work-p p-space"> 
                                2. Instead of have product listings speard out on multiple different subpages where users are needed to navigate back and forth between.
                                Streamlining all products under "Shop" tab can reduce user's cognitive load when browsering for products on the site. 
                            </p> 
                            <p className="work-p p-space"> 
                                3. Reworking the product pages by improving the product and service copywriting, allows clear communicate to users when looking for 
                                important information such as product ordering, flavour tones and delivery schedule. Product listing image was also changed to reflect the product itself. 
                                The addition of subscription discount was added to notify users without demanding cognitive load to perform mental math.  
                            </p> 
                            <p className="work-p p-space"> 
                                4. Elements are repsonsive to user's clicking, which can reduce confusions, also "quantity" section is changed from keyboard input to buttons to create a smoother experience compared to manually entering information.
                                Finally the main call-to-action button is filled to be more prominent on the page. 
                            </p> 
                        </div>
                        <div className="work-carousel">
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={HBMR1}
                                        alt="Recommandtion 1"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={HBMR2}
                                        alt="Recommandtion 2"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={HBMR3}
                                        alt="Recommandtion 3"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={HBMR4}
                                        alt="Recommandtion 4"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </div>
                   </div>

                   <div className="work-sub">
                        <h3 className="work-subheader">learning takeways</h3>
                        <p className="work-p"> 
                            I have developed strong communication skills by collaborating with business stakeholders and 
                            effectively explaining design concepts and terminology in a way that is meaningful to them. 
                            I have gained extensive experience working with brand guidelines and designing within their 
                            established art direction. This has allowed me to develop a deep understanding of the importance 
                            of maintaining brand consistency while also incorporating design best practices and creating engaging 
                            user experiences.
                        </p> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HoochyBoochKombucha; 