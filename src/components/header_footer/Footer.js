import React from 'react';
import Fade from 'react-reveal/Fade'

const Footer = () => {
    return (
        <footer className="bcl_red">
            <Fade delay={500}>

                <div className="font_righteous footer_logo_venue">der Platz</div>
                <div className="footer_copyright">Made by Anushka Jadhav</div>
            </Fade>

        </footer>
    );
};

export default Footer;