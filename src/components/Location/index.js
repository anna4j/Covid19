import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2349.292640207094!2d2.2943922908561607!3d48.85594701554089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6702219eadc43%3A0xb7764685dcef7ac5!2sPullman%20Paris%20Tour%20Eiffel!5e0!3m2!1sen!2sin!4v1592057019938!5m2!1sen!2sin"
                width="100%"
                height="500px"
                frameBorder="0"
                allowFullScreen
            ></iframe>

            <div className="location_tag">
                <div>Location</div>
            </div>

        </div>
    );
};

export default Location;