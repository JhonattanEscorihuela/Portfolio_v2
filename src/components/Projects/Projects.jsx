// Projects.jsx

import React from "react";
import { Projects } from '../../utils/Utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faLink, } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import './Projects.styles.css'


function ProjectsC() {

    return (
        <div id="projects">
            <div className="project-list">
                {
                    Projects.map(p => (
                        <div className="project" key={p.id}>
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
            <div>
                <Link to={'/'} onClick={() => scrollToSection('header')} >
                    <button type="button" className="btn">Back</button>
                </Link>
            </div>

        </div>
    )
}

export default ProjectsC;