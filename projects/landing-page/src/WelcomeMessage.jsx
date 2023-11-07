import React, { Component } from "react";
import './WelcomeMessage.css';

class WelcomeMessage extends Component {
  state = {
    title: "Hola",
    messages: [ 
      "Bienvenidos a TECH CHEF!",
      "Aqui comienza la transformación y digitalización de la Hostelería",
      "¡Únete a la revolución tecnológica de la hostelería!",
      "¿Deseas ser parte de ella?",
      "Unete al cambio.",
      "Contactanos."
    ],
    index: 0,
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        title: prevState.messages[prevState.index],
        index: (prevState.index + 1) % prevState.messages.length,
      }));
    }, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        <h1 className="message-animation">{this.state.title}</h1>
      </div>
    );
  }
}

export default WelcomeMessage;