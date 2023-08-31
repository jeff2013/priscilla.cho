import './about.css';
import '../home/home.css';
import { useEffect } from "react";
import aboutimg from '../img/priscilla-1.jpg';

function About() {
    useEffect(() => {
        document.title = "Priscilla Cho - About";
    }, [])

    return (
        <div className='home'>
            <div className='grid space'>
                <div className='col-1'>
                    <h1 className='side-header'>Hi again!</h1>
                </div>

                <div className='col-2 contact-info'>
                    <a className='contact-link' href='mailto:pjcho@sfu.ca'>Email</a>
                    <a className='contact-link' href='https://www.linkedin.com/in/priscilla-cho-039442205/'>LinkedIn</a>
                </div>
            </div>
            <div className='grid space'>
                <div className='col-1'>
                    <h2 className='side-header'>I'm a designer + student</h2>
                </div>
                <div className='col-2'>
                    <p className='about-p'>
                        My skills as a designer are grounded in visual and graphic design, but my growing sense of passion for creating practical tools and improving user experiences stem from many academic projects and case studies.
                        I constantly seeking new ways to improve upon existing designs and to create innovative solutions that solve real-world problems.
                    </p>
                </div>
            </div>

            <div className='grid space'>
                <div className='col-1'>
                    <h2 className='side-header'>I'm an athlete</h2>
                </div>
                <div className='col-2'>
                    <p className="about-p">
                        Volleyball is more than just a game to me, it's a true passion that has been a significant part of my life for 12 years. 
                        Playing volleyball has not only been a source of enjoyment but also a valuable learning experience. 
                        I developed important life skills such as teamwork, communication, and discipline through the sport. 
                        Volleyball has taught me the value of hard work, persistence, and determination. 
                        It's a sport that has brought me countless hours of joy and personal growth, and I can't imagine my life without it.
                    </p>
                </div>
            </div>

            <div className='grid space'>
                <div className='col-1'>
                    <h2 className='side-header'>Other things I find pleasure in...</h2>
                </div>
                <div className='col-2'>
                    <p className="about-p">
                        Drinking overly sweet coffees, watching animal documentaries (especially the ones about penguins) + reading.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;