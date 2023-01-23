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
                            <Link className="footer-link highlight" to="mailto:priscilla_cho@hotmail.com">priscilla_cho@hotmail.com</Link>
                        </li>
                    </div>
                    <div>
                        <p className='footer-p'>Here my resume :)</p>
                        <li className="footer-li">
                            <Link className="footer-link highlight" to="/https://drive.google.com/file/d/1_u2HnJtjHxYwUCidt6yo4BBbAs9eBnlF/view?usp=sharing">Resume</Link>
                        </li>
                    </div>
                </div>
                <li className="footer-li">
                    <Link className="footer-link highlight" to="https://www.linkedin.com/in/priscilla-cho-039442205/">LinkedIn</Link>
                </li>
            </ul>
        </div>
    )
};

export default Footer;