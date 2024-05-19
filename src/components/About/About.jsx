// About.js
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import userJE from '../../images/userJE.jpg'



function About() {

    const { pathname } = useLocation();
    console.log(pathname);

    const [activeTab, setActiveTab] = useState('skills');

    const openTab = (tabName) => {
        setActiveTab(tabName);
    };

    


    return (
        <div id="about">
            <div className="container">
                <div className="row">
                    <div className="about-col-1">
                        <img src={userJE} />
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
                                        HTML, CSS, JavaScript, TypeScript, Talwindcss, React.js, GraphQl
                                        Next.js, Redux, Node.js, Express.js, PostgreSQL, MongoDB, Sequelize, 
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
                                        February 2024 – Current
                                    </span>
                                    <div>
                                        Developer FrontEnd
                                    </div>
                                </li>
                                <li>
                                    <Link to={'/experienceWork'} onClick={() => scrollToSection('experienceWork')}>
                                        <button type="button" className="text-[#9783C2] hover:text-white border border-[9783C2] hover:bg-[#9783C2] focus:ring-4 focus:outline-none focus:ring-[#9783C2] font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-[#9783C2] dark:text-[#9783C2] dark:hover:text-white dark:hover:bg-[#9783C2] dark:focus:ring-[#9783C2]">
                                            See More
                                        </button>
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

import './About.styles.css'

export default About;
