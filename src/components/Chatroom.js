import React, { Component } from "react";
import { url } from "../constans";
import ChatroomForm from './ChatroomForm';

export default class Chatroom extends Component {
  source = new EventSource(`${url}/stream`);
  state = {
      messages: []
  }

  componentDidMount() {
      //console.log('cdm workd', this.source)
      this.source.onmessage = (event) => {
        //console.log('got an eveny', event.data) // this doesn't
        const messages = JSON.parse(event.data);
        console.log(messages);
        this.setState({
            messages
        })
      }
  }

  render() {
    return (
      <>
        <h2>Hello In My Chat App</h2>
        <h3>some text</h3>
        {this.state.messages.length > 0 ? 
        this.state.messages.map(msg => <li key={msg.id}>{msg.message}</li>) :
        "...loading"
        }
        <ChatroomForm />
      </>
    );
  }
}
