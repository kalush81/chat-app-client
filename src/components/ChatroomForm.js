import React, { Component } from "react";
import * as request from 'superagent';
import { url } from '../constans';

export default class ChatroomForm extends Component {
    state = {
        newMessage: 'Type here ...'
    }
    onChange = (event) => {
        console.log('onchange called')
        this.setState({
            newMessage: event.target.value
        })
    }
    onSubmit = (event) => {
        event.preventDefault();

        request.post(`${url}/message`)
        .send({message: this.state.newMessage})
        .catch(console.error)
        this.setState({
            newMessage: ''
        })
    }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            name="newMessage"
            type="text"
            onChange={this.onChange}
            value={this.state.newMessage}
          ></input>
          <input type="submit" />
        </form>
      </div>
    );
  }
}
