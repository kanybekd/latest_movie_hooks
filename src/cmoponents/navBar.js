import React from 'react'
import { Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom"
function NavBar() {
    return (
        <div>
            <Nav pills>
                <NavItem>
                    <NavLink
                        active
                    >
                        <Link to="/" style={{ color: "white" }}>
                            Home
                        </Link>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink >
                        <Link to="/about">
                            About
                        </Link>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink >
                        <Link to="/contacts">
                            Contacts
                        </Link>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                    >
                        <Link to="/article-list">
                            Article list
                        </Link>
                    </NavLink>
                </NavItem>
            </Nav>
        </div>
    )
}

export default NavBar