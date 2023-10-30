import '../footer/footer.css';
import { Outlet, Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <div className='grid-1'>
                <div className='footer-col-1'>
                    <p className='footer-p'>Let's Connect</p>
                    <a className="footer-link highlight" href="mailto:pjcho@sfu.ca">pjcho@sfu.ca</a>
                </div>

                <div className='footer-col-2'>
                    <p className='footer-p'>Here's my resume :)</p>
                    <a className="footer-link highlight" href="https://acrobat.adobe.com/id/urn:aaid:sc:US:a01d4d19-fb25-45a3-b8dc-f5746e4be2ed">Resume</a>
                </div>

                <div className='footer-col-3'>
                    <div>
                        <p className='footer-p'>Digital Social Spheres</p>
                        <div className='grid-2'>
                            <a className="footer-link highlight" href="https://www.linkedin.com/in/priscilla-cho-039442205/">LinkedIn</a>
                            {/* <p className='footer-p-2'>/</p>
                            <a className="footer-link highlight" href="https://www.instagram.com/designingwithp">Instagram</a> */}
                        </div>
                    </div>
                    <div className='left-align'>
                        <p className='footer-p'>Where I’m located</p>
                        <p className='footer-link'>Vancouver, Canada</p>
                    </div>
                </div>


            </div>
        </div>
    )
};

export default Footer;