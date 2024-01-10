import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';


function SocialIcons() {
    return (
        <div className="social-icons">
            <a href="https://www.facebook.com/JhonattanEscorihuela" target="_blank">
                <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://twitter.com/Jrescorihuela" target="_blank">
                <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.instagram.com/jhonattanescorihuela/" target="_blank">
                <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.linkedin.com/in/jhonattanescorihuela/" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/JhonattanEscorihuela" target="_blank">
                <FontAwesomeIcon icon={faGithub} />
            </a>
        </div>
    );
}

import './Social-icons.styles.css'

export default SocialIcons;
