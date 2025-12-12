import { Component } from 'react'
import './App.css'

class App extends Component {
  state = {
    current: "0",
  }

  buttonArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "+", "-", "x", "/", "="]

  handleClick = (butText) => {
    let but =butText.toString();
    if (but === "+" || but === "-" || but === "x" || but === "/") {

      this.setState({
        total: this.state.current,
        operator: but,
        current: "",
      })
    }

    else if (but === "=") {
      let final = 0;
      switch (this.state.operator) {
        case "+":
          final = Number(this.state.current) + Number(this.state.total)
          break
        case "-":
          final =Number(this.state.total) - Number(this.state.current) 
          break
        case "x":
          final = Number(this.state.total) * Number(this.state.current) 
          break
        case "/":
          final = Number(this.state.total) / Number(this.state.current) 
          break
      }
      
      this.setState({
        total: 0,
        current: final,
        operator: ""
      })
    }

    else {
      console.log(typeof(but))
      this.setState({
        current: this.state.current === "0" ? but : this.state.current + but,
      })
    }

  }

  render() {
    return (
      <>
        <div id='calcu'>
          <div id='window'>{this.state.current}</div>
          <div id='button-div'>
            {this.buttonArray.map((but) =>
              <button key={but} onClick={this.handleClick.bind(this, but)}>{but}</button>
            )}
          </div>
        </div>
      </>
    )
  };
}
export default App;


