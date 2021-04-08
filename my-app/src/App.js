import './App.css';
import React, {Component} from 'react';
import {Chat} from './components/Chat';
import {VideoPlayer} from './components/VideoPlayer';
import {Voting} from './components/Voting';


export class App extends React.Component {    

  render() {
    return (
      <div className="App">
        <VideoPlayer />
        <Chat />
        <Voting />
      </div>
    );
  }
}

