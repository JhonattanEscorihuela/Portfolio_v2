// Portfolio.jsx
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleDown, faExternalLinkAlt, faExternalLinkSquare, faExternalLinkSquareAlt, faLightbulb, faLineChart, faLink, faLinkSlash } from '@fortawesome/free-solid-svg-icons';

import work1 from '../../images/work-1.png'
import work2 from '../../images/work-2.png'
import work3 from '../../images/work-3.png'

import { Projects } from "../../utils/Utils";


function Portfolio() {
    return (
        <div id="portfolio">
            <div className="container">
                <h1 className="sub-title">My Work</h1>
                <div className="work-list">
                    {
                        Projects.slice(0, 2).map(p => (
                            <div className="work" key={p.id}>
                                <img src={p.img} />
                                <div className="layer">
                                    <h3>{p.name}</h3>
                                    <p>{p.despription}</p>
                                    <div className="icon-list">
                                        <a href={p.repository} target="_blank">
                                            <FontAwesomeIcon icon={faLink} />
                                        </a>
                                        <a href={p.demo} target="_blank">
                                            <FontAwesomeIcon icon={faExternalLinkAlt} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <a href="#" className="btn">See more</a>
            </div>
        </div>
    );
}

import './Portfolio.styles.css'
import { faGoogle, faWordpressSimple } from "@fortawesome/free-brands-svg-icons";

export default Portfolio;
