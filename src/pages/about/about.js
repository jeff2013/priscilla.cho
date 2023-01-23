import './about.css';

function About() {
    return (
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
    )
}

export default About;