import React from "react";
import { RelogioContainer, Titulo } from "./CountdowTimerElements";

class CountdownTimer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { setTempo: <>00:00:00</> };
  }

  componentDidMount() {
    this.temporizador();
  }

  componentDidUpdate() {
    this.temporizador();
  }

  componentWillUnmount() {
    clearInterval(this.temporizador());
  }

  temporizador = () => {
    setTimeout(this.tempoAtual, 1000);
  };

  tempoAtual = () => {
    const data = new Date();
    let horas = 23 - data.getHours();
    let minutos = 59 - data.getMinutes();
    let segundos = 59 - data.getSeconds();
    this.setState({
      setTempo: (
        <>
          {`${horas < 10 ? "0" + horas : horas}:${
            minutos < 10 ? "0" + minutos : minutos
          }:${segundos < 10 ? "0" + segundos : segundos}`}
        </>
      ),
    });
  };

  render() {
    return (
      <>
        <Titulo>As promoções acabam em:</Titulo>
        <RelogioContainer>{this.state.setTempo}</RelogioContainer>
      </>
    );
  }
}
export default CountdownTimer;
