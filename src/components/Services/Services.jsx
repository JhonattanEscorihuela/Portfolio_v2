// Services.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain,  faCalendarCheck, faCode} from '@fortawesome/free-solid-svg-icons';


function Services() {
    return (
        <div id="services">
            <div className="container">
                <h1 className="sub-title">My Services</h1>
                <div className="services-list">
                    <div>
                        <FontAwesomeIcon icon={faCode} className='i' />
                        <h2>Full Stack Web</h2>
                        <p>
                            have a solid experience in creating complete web applications, covering both Frontend and Backend. My domain includes technologies such as HTML, CSS, JavaScript, React.js and Node.js. I have contributed significantly in more than three real projects for clients in Costa Rica, Argentina and Colombia, applying these skills to provide effective and quality solutions.
                        </p>
                        {/* <a href="#"><FontAwesomeIcon icon={faLink} /> Learn more</a> */}
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faCalendarCheck} className='i' />
                        <h2>Rollout Manager</h2>
                        <p>With over 5 years of experience, I have led telecommunications projects from their initial phase to final delivery to the client. In previous roles, I supervised a multidisciplinary team of more than 40 professionals. My agile approach adapts to the changing nature of technology projects, ensuring timely and efficient delivery of deliverables while maintaining high quality standards at every stage of the project.
                        </p>
                        {/* <a href="#"><FontAwesomeIcon icon={faLink} /> Learn more</a> */}
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faBrain} className='i' />
                        <h2>Tech Consulting</h2>
                        <p>
                            I participated in the creation of training materials and guides for technical personnel in telecommunications infrastructure projects. I implemented the Kaizen methodology to improve the quality and efficiency of the work in the radio bases. In addition, I advised associated contractors, attending direct requests from end clients, achieving continuous improvement and optimization of operations.
                        </p>
                        {/* <a href="#"><FontAwesomeIcon icon={faLink} /> Learn more</a> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

import './Services.styles.css'

export default Services;
