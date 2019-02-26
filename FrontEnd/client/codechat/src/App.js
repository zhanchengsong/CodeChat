import React, { Component } from 'react';
import MessageBullet from './Components/messageBullet'
import ReactDOM from 'react-dom';
import ChatPanel from "./Components/chatPanel"
import './App.css';
import socketIOClient from 'socket.io-client';

class App extends Component {
  render() {
        return (
            <div>
                <ChatPanel/>
            </div>
        )
  }
}

export default App;
