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
                    <div>
                        <img className="rounded-full size-12 mb-4" src="images/perfil.jpg" alt="midudev photo" />
                    </div>
                    <h4 className='gap-x-4'>Hello, It's me <a className="flex justify-center items-center" href="https://www.linkedin.com/in/jhonattanescorihuela/" target="_blank">
                        <span className="text-xs font-medium me-2 px-2.5 py-0.5 rounded bg-blue-600 text-white dark:bg-blue-900 dark:text-blue-300">Available for work</span>
                    </a></h4>
                    <h2>Jhonattan Escorihuela</h2>
                    <h5>+5 years of experience in Telecommunications
                        <span> and starting this involving world of web development.
                        </span> I would like to specialize in developing unique applications.
                        <div>
                            And I'm a <span ref={textRef} className="text">
                            </span>
                        </div>
                    </h5>
                </div>
                <SocialIcons />
            </div>
        </div>
    );
}

export default Header;
