import React, { Component } from "react";
import "./App.css";
import getWeather from "./weather";
import Temp from "./Temp";
import Loading from "./Loading";

class App extends Component {
  constructor(props) {
    super(props);
    this.updateDateWeather = this.updateDateWeather.bind(this);
    const tempFromStorage = localStorage.getItem("temp");
    this.state = {
      temp: tempFromStorage ? JSON.parse(tempFromStorage) : null,
    };
  }

  updateDateWeather() {
    getWeather().then((temp) => {
      localStorage.setItem("temp", JSON.stringify(temp));
      this.setState({
        temp,
      });
    });
  }

  componentDidMount() {
    this.updateDateWeather();
    setInterval(this.updateDateWeather, 1000 * 60 * 2);
  }

  componentWillLeave() {
    clearInterval(this.updateDateWeather);
  }

  render() {
    const { temp } = this.state;
    return (
      <div className="app">
        { temp ? <Temp temp={temp.current} time={temp.time} /> : <Loading />}
      </div>
    );
  }
}

export default App;
