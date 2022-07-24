import React from "react";
import {
    Nav,
    NavLink,
    Bars, 
    NavMenu} from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <h1>logo</h1>
                </NavLink>
                <Bars /> 
                <NavMenu>
                    <NavLink to="/projects" activeStyle>
                        Projects
                    </NavLink>
                    <NavLink to="/resume" activeStyle>
                        Resume
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    )
}

export default Navbar;