import React, { Component } from 'react'

export default class Counter extends Component {
    
constructor(props) {
  super(props)

  this.state = {
     count: 0
  }
}

IncrementCount(){
    // this.setState({
    //     count: this.state.count+1
    // }, ()=>{
    //     console.log('Callback state value', this.state.count);
    // });

    this.setState((prevState, props) => ( {
        count: prevState.count+1
    } ), ()=>{console.log('Callback state value', this.state.count)})
    console.log('Counter value', this.state.count);
}

IncrementFive(){
    this.IncrementCount();
    this.IncrementCount();
    this.IncrementCount();
    this.IncrementCount();
    this.IncrementCount();
}
  render() {
    return (

      <div>
          <h1>Counter Example with states</h1>
          <h2>Counter {this.state.count}</h2>
          <button onClick={()=>{this.IncrementFive()}}>Increment Count</button>
        </div>
    )
  }
}
