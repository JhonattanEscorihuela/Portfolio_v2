import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Social-icons.styles.css'

function SocialIcons() {
    return (
        <div className="social-icons">
            <a href="https://www.facebook.com/JhonattanEscorihuela">
                <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://twitter.com/Jrescorihuela">
                <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.instagram.com/jhonattanescorihuela/">
                <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.linkedin.com/in/jhonattanescorihuela/">
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/JhonattanEscorihuela">
                <FontAwesomeIcon icon={faGithub} />
            </a>
        </div>
    );
}

export default SocialIcons;
