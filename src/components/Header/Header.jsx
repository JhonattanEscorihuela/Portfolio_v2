import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faTimesCircle, faBars } from '@fortawesome/free-solid-svg-icons';
import SocialIcons from '../Social-icons/Social-icons';
import Typed from 'typed.js';
import './Header.styles.css';

function Header() {
    const [menuVisible, setMenuVisible] = useState(false);
    const sideMenuRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const typed = new Typed(textRef.current, {
            strings: [
                'Back-End Developer',
                'Front-End Developer',
                'Full Stack Web Developer',
                'Telecommunications Engineer'
            ],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 100,
            loop: true
        });

        return () => {
            typed.destroy();
        };
    }, []);

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
        <div id="header">
            <div className="container">
                <nav>
                    <img src="images/logoJE.png" className="logo" />
                    <ul ref={sideMenuRef} id="sidemenu">
                        <li><a href="#header">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <FontAwesomeIcon icon={faTimesCircle} className="fa-icon" onClick={closeMenu} />
                    </ul>
                    <FontAwesomeIcon icon={faBars} className="fa-icon" onClick={openMenu} />
                </nav>
                <div className="header-text">
                    <h3>Hello, It's me</h3>
                    <h1>Jhonattan Escorihuela</h1>
                    <h3>And I'm a <span ref={textRef} className="text"></span></h3>
                </div>
                <SocialIcons />
            </div>
        </div>
    );
}

export default Header;
