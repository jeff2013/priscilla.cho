import './contact.css';
import email from '../img/email.png';
import linkedin from '../img/linkedin.png'

function Contact() {
    return (
        <div className="contact">
            <h1 className="intro-header">Let's Chat</h1>
            <div className='contact-item'>
                <a className='email' href='mailto:pjcho@sfu.ca'><img className='contact-img' src={email} alt="email"/></a>
                <div className='contact-content'>
                    <h2 className='contact-h2'>Email</h2>
                    <a href='mailto:pjcho@sfu.ca' className='contact-link'>pjcho@sfu.ca</a>
                </div>
            </div>
            <div className='contact-item'>
                <a className='linkedin' href='https://www.linkedin.com/in/priscilla-cho-039442205/'><img className='contact-img' src={linkedin} alt="email"/></a>
                <div className='contact-content'>
                    <h2 className='contact-h2'>LinkedIn</h2>
                    <a href='https://www.linkedin.com/in/priscilla-cho-039442205/' className='contact-link'>priscilla-cho</a>
                </div>
            </div>
        </div>
    )
}

export default Contact;