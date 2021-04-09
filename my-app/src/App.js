import './App.css';
import React, {Component} from 'react';
import {Chat} from './components/Chat';
import {VideoPlayer} from './components/VideoPlayer';
import {Voting} from './components/Voting';


export class App extends React.Component {    

  render() {
    return (
      <div className="App">
        <div id="video-vote">
          <VideoPlayer />
          <Voting />
        </div>
        <Chat />
      </div>
    );
  }
}

