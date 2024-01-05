// Portfolio.jsx
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import './Portfolio.styles.css'

function Portfolio() {
    return (
        <div id="portfolio">
            <div className="container">
                <h1 className="sub-title">My Work</h1>
                <div className="work-list">
                    <div className="work">
                        <img src="images/work-1.png" />
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
                        <img src="images/work-2.png" />
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
                        <img src="images/work-3.png" />
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

export default Portfolio;