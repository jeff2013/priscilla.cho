import { Outlet, Link } from "react-router-dom";
import logo from '../img/pc-logo.png';

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/"><img src={logo} alt="priscilla cho"/></Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Navbar;