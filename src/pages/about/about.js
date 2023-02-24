import './about.css';
import '../home/home.css';
import aboutimg from '../img/priscilla-1.jpg';

function About() {
    return (
        <div className='home'>
            <div className='about-bio'>
                <h1 className="about-title">
                    Hi, I'm Priscilla!
                </h1> 
                <div className='about-info'>
                    <div className='about-info-div'>
                        <p className="small-intro-title">A designer + student</p>
                        <p className="small-intro-body">Aspiring UX/UI designer and design student</p>
                    </div>
                    <div className='about-info-div'>
                        <p className="small-intro-title">An athlete</p>
                        <p className="small-intro-body">Vancouver, B.C.</p>
                    </div>
                    <div className='about-info-div'>
                        <p className="small-intro-title">Other things I find pleasure in...</p>
                        <p className="small-intro-body">Drinking coffee, playing volleyball + reading</p>
                    </div>
                </div>
            </div>


            <div className="contact">
                <div>
                    <p className='sub-header'>Contact</p>
                </div>
                <div>
                    <div className='contact-item'>
                        <div className='contact-content'>
                            <a href='mailto:pjcho@sfu.ca' className='contact-link'>Email</a>
                        </div>
                    </div>
                    <div className='contact-item'>
                        <div className='contact-content'>
                            <a href='https://www.linkedin.com/in/priscilla-cho-039442205/' className='contact-link'>LinkedIn</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;