import React from 'react';
import './AboutPage.scss';

export const AboutPage = (props) => {
    return(
        <div>
            <h1>About Page</h1>
            <p className="about">THis is some text about us</p>
            {props.children}
        </div>
    )
}

export default AboutPage;