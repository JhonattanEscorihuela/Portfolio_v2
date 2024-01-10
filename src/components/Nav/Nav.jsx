// Nav.jsx
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimesCircle } from "@fortawesome/free-solid-svg-icons";

import './Nav.styles.css'

function Nav() {

    const [menuVisible, setMenuVisible] = useState(false);
    const sideMenuRef = useRef(null);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };


    const openMenu = () => {
        setMenuVisible(true);
    };

    const closeMenu = () => {
        setMenuVisible(false);
    };

    useEffect(() => {
        if (sideMenuRef.current) {
            sideMenuRef.current.style.right = menuVisible ? '0' : '-200px';
        }
    }, [menuVisible]);

    return (
        <nav id="nav">
            <img src="images/logoJE.png" className="logo" />
            <ul ref={sideMenuRef} id="sidemenu">
                <li>
                    <Link to={'/'} onClick={() => scrollToSection('header')}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to={'/'} onClick={() => scrollToSection('about')}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to={'/'} onClick={() => scrollToSection('services')}>
                        Services
                    </Link>
                </li>
                <li>
                    <Link to={'/'} onClick={() => scrollToSection('portfolio')}>
                        Portfolio
                    </Link>
                </li>
                <li>
                    <Link to={'/'} onClick={() => scrollToSection('contact')}>
                        Contact
                    </Link>
                </li>
                <FontAwesomeIcon icon={faTimesCircle} className="fa-icon" onClick={closeMenu} />
            </ul>
            <FontAwesomeIcon icon={faBars} className="fa-icon" onClick={openMenu} />
        </nav>
    )
}



export default Nav;

