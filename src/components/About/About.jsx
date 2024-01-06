// About.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './About.styles.css'

function About() {

    const [activeTab, setActiveTab] = useState('skills');

    const openTab = (tabName) => {
        setActiveTab(tabName);
    };


    return (
        <div id="about">
            <div className="container">
                <div className="row">
                    <div className="about-col-1">
                        <img src="images/userJE.jpg" />
                    </div>
                    <div className="about-col-2">
                        <h1 className="sub-title">About Me</h1>
                        <p className="sub-title-p">I am a Full Stack Developer with a background in telecommunications
                            engineering and hands-
                            on experience in development projects. My expertise spans HTML, CSS, JavaScript, React.js,
                            Next.js, Redux on the frontend, and Node.js, Express.js, PostgreSQL, MongoDB, Sequelize on
                            the backend. Working within agile teams like Scrum, I've honed soft skills such as technical
                            problem-solving and effective communication. I prioritize efficient delivery and
                            collaborative
                            development in demanding environments.🌐</p>

                        <div className="tab-titles">
                            <p className={activeTab === 'skills' ? 'tab-links active-link' : 'tab-links'} onClick={() => openTab('skills')}>Skills</p>
                            <p className={activeTab === 'experience' ? 'tab-links active-link' : 'tab-links'} onClick={() => openTab('experience')}>Experience</p>
                            <p className={activeTab === 'education' ? 'tab-links active-link' : 'tab-links'} onClick={() => openTab('education')}>Education</p>
                        </div>
                        <div className={activeTab === 'skills' ? 'tab-contents active-tab' : 'tab-contents'} id="skills">
                            <ul>
                                <li>
                                    <span>
                                        Full Stack Web Development
                                    </span>
                                    <div>
                                        HTML, CSS, JavaScript, React.js,
                                        Next.js, Redux, Node.js, Express.js, PostgreSQL, MongoDB, Sequelize
                                    </div>
                                </li>
                                <li>
                                    <span>
                                        Project Management
                                    </span><div>
                                        Planning and execution, Identification and
                                        resolution
                                    </div>
                                </li>
                                <li>
                                    <span>
                                        Software
                                    </span>
                                    <div>
                                        Microsoft Office (Intermediate), Power BI, Power Query
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className={activeTab === 'experience' ? 'tab-contents active-tab' : 'tab-contents'} id="experience">
                            <ul>
                                <li>
                                    <span>
                                        August 2023 - Current
                                    </span>
                                    <div>Network Support Engineer | WAN Networks and Telecommunications Equipment Specialist
                                    </div>
                                </li>
                                <li>
                                    <span>
                                        March 2023 – May 2023
                                    </span>
                                    <div>
                                        Rollout Manager
                                    </div>
                                </li>
                                <li>
                                    {/* <span>
                                        September 2019 - December 2021
                                    </span>
                                    <div>Telecommunications Project Coordinator
                                    </div> */}
                                    <Link to={'/experienceWork'} onClick={() => scrollToSection('experienceWork')}>
                                        See More
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className={activeTab === 'education' ? 'tab-contents active-tab' : 'tab-contents'} id="education">
                            <ul>
                                <li>
                                    <span>
                                        Jul 2023 – Nov 2023
                                    </span>
                                    <div>Full Stack Developer
                                    </div>
                                </li>
                                <li>
                                    <span>
                                        2012 - 2018
                                    </span>
                                    <div>
                                        B.S in Telecommunications Engineer
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
