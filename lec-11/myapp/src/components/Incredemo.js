import React, { Component } from 'react'

class Incre extends Component {
    constructor(){
        super()
        this.state = {
            count : 0,
        }
    }
    increment = () => {
        console.log("increment")
        this.setState({count: this.state.count +100})
    }
  render() {
    return (
      <div>
        <h2>Class Component</h2>
        <h2>{this.state.count}</h2>
        <button onClick={this.increment}>increment</button>
      </div>
    )
  }
}

export default Incre