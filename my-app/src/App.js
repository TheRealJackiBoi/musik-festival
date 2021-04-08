import './App.css';
import React, {Component} from 'react';
import {Chat} from './Chat';
import {Video} from './Video';



export class App extends React.Component {    
  hej
  

  render() {
    return (
      <div className="App">
        <Video />
        <Chat />
      </div>
    );
  }
}

