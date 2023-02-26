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
                        <p className="small-intro-title">I'm a designer + student</p>
                        <p className="small-intro-body">
                            My skills as a designer are grounded in visual and graphic design, but my growing sense of passion for creating practical tools and improving user experiences stem from many academic projects and case studies.
                            I constantly seeking new ways to improve upon existing designs and to create innovative solutions that solve real-world problems
                        </p>
                    </div>
                    <div className='about-info-div'>
                        <p className="small-intro-title">I'm an athlete</p>
                        <p className="small-intro-body">
                            Volleyball is more than just a game to me, it's a true passion that has been a significant part of my life for 12 years. 
                            Playing volleyball has not only been a source of enjoyment but also a valuable learning experience. 
                            I developed important life skills such as teamwork, communication, and discipline through the sport. 
                            Volleyball has taught me the value of hard work, persistence, and determination. 
                            It's a sport that has brought me countless hours of joy and personal growth, and I can't imagine my life without it.
                        </p>
                    </div>
                    <div className='about-info-div'>
                        <p className="small-intro-title">Other things I find pleasure in...</p>
                        <p className="small-intro-body">
                            Drinking overly sweet latte + reading
                        </p>
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