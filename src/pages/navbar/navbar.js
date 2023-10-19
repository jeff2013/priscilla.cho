import './navbar.css';
import { Outlet, Link } from "react-router-dom";
import logo from '../img/pc-logo.png';
import logoHover from '../img/pc-logo-blue.png';


const Navbar = () => {
  return (
    <>
      <nav className='sticky'>
        <ul className="nav-bar">
          <li className="nav-li">
            <div className='cardlogo'>
              <Link className="nav-link" to="/">
                <img className="logo no-hover" src={logo} alt="Priscilla Cho"/>
                <img className="logo logo-hover" src={logoHover} alt="Priscilla Cho"/>
              </Link>
            </div>
          </li>
          <div className='nav-gap'>
            <li className="nav-li">
              <Link className="nav-link highlight" to="/about">ABOUT</Link>
            </li>
            <li className="nav-li">
              <a className="nav-link highlight" href="https://acrobat.adobe.com/id/urn:aaid:sc:US:a01d4d19-fb25-45a3-b8dc-f5746e4be2ed">RESUME</a>
            </li>
          </div>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Navbar;