import React from 'react'
import logo from '../../assets/logo.svg';

export const Home = (props) => {
    return(
        <div>
            <h1>Home Component</h1>
            {props.children}
            <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Some text
        </p>
      </div>
        </div>
    )
}

export default Home;