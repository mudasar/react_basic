import React from 'react';
import {NavLink, Link} from 'react-router-dom';

export const Header = (props) => {
    return (
        <div className="top-bar" id="responsive-menu">
            <div className="top-bar-left">
                <ul className="dropdown menu" data-dropdown-menu>
                    <li className="menu-text">TX Terminal</li>
                    <li className="has-submenu">
                        <NavLink to="/" activeClassName="button" exact >Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" activeClassName="button" >About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login"  activeClassName="button" >Login</NavLink>
                    </li>
                    <li>
                        <NavLink to="/other"  activeClassName="button" >Other</NavLink>
                    </li>
                </ul>
            </div>
            <div className="top-bar-right">
                <ul className="menu">
                    <li>
                        <input type="search" placeholder="Search"/></li>
                    <li>
                        <button type="button" className="button">Search</button>
                    </li>
                </ul>
            </div>
            {props.children}
        </div>
    )
}

export default Header;