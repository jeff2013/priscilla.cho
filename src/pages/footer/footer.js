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
                    <div>
                        <p className='footer-p'>Here my resume :)</p>
                        <li className="footer-li">
                            <a className="footer-link highlight" href="https://drive.google.com/file/d/1_u2HnJtjHxYwUCidt6yo4BBbAs9eBnlF/view?usp=sharing">Resume</a>
                        </li>
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