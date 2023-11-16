import '../footer/footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className='footer-grid'>
                <div className='footer-col-1'>
                    <p className='footer-p'>Where I’m located</p>
                    <p className='footer-link footer-text'>Vancouver, Canada</p>
                </div>
                <div className='footer-col-2'>
                    <div>
                        <p className='footer-p'>Let's Connect</p>
                        <a className="footer-link highlight" href="mailto:pjcho@sfu.ca">pjcho@sfu.ca</a>
                    </div>

                    <div>
                        <p className='footer-p'>Here's my resume :)</p>
                        <a className="footer-link highlight" href="https://acrobat.adobe.com/id/urn:aaid:sc:US:9178f702-0683-4829-84fd-6054d6570055">Resume</a>
                    </div>
                    <div>
                        <p className='footer-p'>Digital Social Spheres</p>
                        <a className="footer-link highlight" href="https://www.linkedin.com/in/priscilla-cho-039442205/">LinkedIn</a>
                        {/* <p className='footer-p-2'>/</p>
                        <a className="footer-link highlight" href="https://www.instagram.com/designingwithp">Instagram</a> */}
                    </div>
                </div>


            </div>
        </div>
    )
};

export default Footer;