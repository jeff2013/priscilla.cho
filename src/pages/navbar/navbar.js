import './navbar.css';
import { Outlet, Link } from "react-router-dom";
import logo from '../img/pc-logo.png';

const Navbar = () => {
  return (
    <>
      <nav>
        <ul className="nav">
          <li className="nav-li">
            <Link className="nav-link" to="/"><img className="logo" src={logo} alt="priscilla cho"/></Link>
          </li>
          <li className="nav-li">
            <Link className="nav-link" to="/projects">projects</Link>
          </li>
          <li className="nav-li">
            <Link className="nav-link" to="/contact">contact</Link>
          </li>
          <li className="nav-li">
            <Link className="nav-link" to="/resume">resume</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Navbar;