import React, { Component } from 'react';

import faker from 'faker';

class MessageBullet extends Component{
    render() {
        return (
            <div className="comment">
                <div href="/" className="comment">
                    <a href="/" className="avatar">
                        <img alt="avatar" src={faker.image.avatar()}/>
                    </a>

                    <div className="content">
                        <a href="/" className="author"> {this.props.author} </a>
                    </div>
                    <div className="metadata">
                        <span className="date">Today at 6:00PM</span>
                    </div>
                    <div className="text">Nice Post ! </div>
                </div>

            </div>


        );
    }
}
export default MessageBullet;