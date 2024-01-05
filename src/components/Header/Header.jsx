import React, { useEffect, useRef, useState } from 'react';
import Nav from '../Nav/Nav';
import SocialIcons from '../Social-icons/Social-icons';
import Typed from 'typed.js';
import './Header.styles.css';

function Header() {

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

    return (
        <div id="header">
            <div className="container">
                <Nav />
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
