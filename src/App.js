import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Music is why you are here..
          </p>
          
          <p>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/obzqga8BnSo?controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </p>
        </header>
      </div>
    );
  }
}
// eslint-disable-next-line
export default withAuthenticator(App, true);
