import '../footer/footer.css';
import { Outlet, Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <ul className="footer-ul">
                <div className='flex-gap'>
                    <div>
                        <p className='footer-p'>Let's Connect</p>
                        <li className="footer-li">
                            <a className="footer-link highlight" href="mailto:priscilla_cho@hotmail.com">priscilla_cho@hotmail.com</a>
                        </li>
                    </div>
                    <div className='footer-col-two'>
                        <div>
                            <p className='footer-p'>Here's my resume :)</p>
                            <li className="footer-li">
                                <a className="footer-link highlight" href="https://drive.google.com/file/d/1KJHWejpTliuZ-jPi47t_y25JvBtcH2OT/view?usp=share_link">Resume</a>
                            </li>
                        </div>
                    </div>
                </div>
                <li className="footer-li">
                    <a className="footer-link highlight" href="https://www.linkedin.com/in/priscilla-cho-039442205/">LinkedIn</a>
                </li>
            </ul>
        </div>
    )
};

export default Footer;