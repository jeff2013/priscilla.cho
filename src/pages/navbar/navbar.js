import './navbar.css';
import { Outlet, Link } from "react-router-dom";
import logo from '../img/pc-logo.png';
import logoHover from '../img/pc-logo-blue.png';


const Navbar = () => {
  return (
    <>
      <nav>
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
              <Link className="nav-link highlight" to="/hoochyboochkombucha">RECENT WORK</Link>
            </li>
            <li className="nav-li">
              <Link className="nav-link highlight" to="/about">ABOUT</Link>
            </li>
            <li className="nav-li">
              <a className="nav-link highlight" href="https://drive.google.com/file/d/1KJHWejpTliuZ-jPi47t_y25JvBtcH2OT/view?usp=share_link">RESUME</a>
            </li>
          </div>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Navbar;