// Services.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faCrop, faLink } from '@fortawesome/free-solid-svg-icons';
import './Services.styles.css'
import { faAppStore } from '@fortawesome/free-brands-svg-icons';

function Services() {
    return (
        <div id="services">
            <div className="container">
                <h1 className="sub-title">My Services</h1>
                <div className="services-list">
                    <div>
                        <FontAwesomeIcon icon={faCode} className='i' />
                        <h2>Web Design</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda atque rem at molestiae
                            ipsa
                            omnis vel voluptate consequatur fugiat sequi quisquam, eaque odio quod placeat minus! Ullam
                            illum eligendi maiores!</p>
                        <a href="#"><FontAwesomeIcon icon={faLink} /> Learn more</a>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faCrop} className='i' />
                        <h2>UI/UX Design</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda atque rem at molestiae
                            ipsa
                            omnis vel voluptate consequatur fugiat sequi quisquam, eaque odio quod placeat minus! Ullam
                            illum eligendi maiores!</p>
                        <a href="#"><FontAwesomeIcon icon={faLink} /> Learn more</a>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faAppStore} className='i' />
                        <h2>App Design</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda atque rem at molestiae
                            ipsa
                            omnis vel voluptate consequatur fugiat sequi quisquam, eaque odio quod placeat minus! Ullam
                            illum eligendi maiores!</p>
                        <a href="#"><FontAwesomeIcon icon={faLink} /> Learn more</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
