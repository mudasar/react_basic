import React from 'react'

export const Footer = (props) => {
    return (
        <div className="container">
            <hr/>
            <div className="row align-center">
                <h3>
                    Footer...
                </h3>
            </div>
            <div className="row align-center">

                <div className="column small-4">Aligned to</div>
                <div className="column small-4">in Foooter</div>
            </div>

            {props.children}
        </div>
    )
}

export default Footer;