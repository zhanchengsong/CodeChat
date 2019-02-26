import React, { Component } from 'react';
import MessageBullet from "./messageBullet";
import faker from "faker";
import socketIOClient from "socket.io-client";

class ChatPanel extends Component {
    constructor(props) {
        super(props);


        this.state = {
            messages: [],
            socketUrl: 'localhost:3000',
            socket: socketIOClient('http://localhost:3000'),
            textMessage: ""

        }
        this.updateMsgText = this.updateMsgText.bind(this);


    }



    renderMessages(){

        let messageList = this.state.messages.map(function(message) {
            return (
                <div className="comments">
                    <div href="/" className="comment">
                        <a href="/" className="avatar">
                            <img alt="avatar" src={faker.image.avatar()}/>
                        </a>

                        <div className="content">
                            <a href="/" className="author"> {message.author} </a>
                        </div>
                        <div className="metadata">
                            <span className="date">Today at 6:00PM</span>
                        </div>
                        <div className="text"> {message.message} </div>
                    </div>

                </div>
            );
        })
        return messageList;
    }
    componentDidMount = () => {

        let self = this;
        this.state.socket.on('message', (message) => {
            console.log("Client got message: " + message);
            var msgList = self.state.messages;
            msgList.push(JSON.parse (message));
            this.setState({
                messages: msgList // Do this to allow refresh component
            })
            console.log(this.state.messages);
        })

    }
    render(){

        return (

            <div className="ui container comments">
                {this.renderMessages()}
                <form>
                    <input id="m" autoComplete="off" onChange={this.updateMsgText}/>
                    <button onClick={e => {this.sendMessage(e)} } >Send</button>
                </form>
            </div>


        );
    }

    updateMsgText(e){
        this.setState ({
            textMessage: e.target.value
        })
    }

    sendMessage(e) {
        e.preventDefault();
        var newMsg = {
            'author':'Random Crab',
            'message' : this.state.textMessage
        }


        this.state.socket.emit('clientMsg', JSON.stringify(newMsg) );

    }



}

export default ChatPanel;
