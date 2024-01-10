// Portfolio.jsx
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

import work1 from '../../images/work-1.png'
import work2 from '../../images/work-2.png'
import work3 from '../../images/work-3.png'


function Portfolio() {
    return (
        <div id="portfolio">
            <div className="container">
                <h1 className="sub-title">My Work</h1>
                <div className="work-list">
                    <div className="work">
                        <img src={work1} />
                        <div className="layer">
                            <h3>Social Media App</h3>
                            <p>The app connects you yo the talented people around the world.
                                Download it fro play store.
                            </p>
                            <a href="#">
                                <FontAwesomeIcon icon={faLink} />
                            </a>
                        </div>
                    </div>
                    <div className="work">
                        <img src={work2} />
                        <div className="layer">
                            <h3>Music App</h3>
                            <p>The app connects you yo the talented people around the world.
                                Download it fro play store.
                            </p>
                            <a href="#">
                                <FontAwesomeIcon icon={faLink} />
                            </a>
                        </div>
                    </div>
                    <div className="work">
                        <img src={work3} />
                        <div className="layer">
                            <h3>Online Shopping App</h3>
                            <p>The app connects you yo the talented people around the world.
                                Download it fro play store.
                            </p>
                            <a href="#">
                                <FontAwesomeIcon icon={faLink} />
                            </a>
                        </div>
                    </div>
                </div>
                <a href="#" className="btn">See more</a>
            </div>
        </div>
    );
}

import './Portfolio.styles.css'

export default Portfolio;
