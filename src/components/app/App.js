import React, {Component} from 'react';

import Header from '../common/Header';
import Footer from '../common/Footer';
import Main from '../common/Main';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row align-center">
          <div className="column large-10">
            <Header/>
          </div>
        </div>
        <div className="container">
          <div className="row align-center">
            <div className="column large-10">
              <Main/> 
              {this.props.children}
            </div>
          </div>
          <Footer/>
        </div>

      </div>
    );
  }
}

export default App;
