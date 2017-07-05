import React from 'react'

export const NotFound = (props) => {
    return (
        <div className="callout alert large">
            <h5>Error</h5>
            <p>The page you are looking for can't be found.</p>
            <a href="#">It's dangerous to go alone, take this.</a>
            {props.children}
        </div>
    )
}

export default NotFound;