import React, { Component } from 'react'

export default class EventBinding extends Component {
 
 constructor(props) {
   super(props)
 
   this.state = {
      message: 'Welcome'
   }

   //this.ClickHandler = this.ClickHandler.bind(this);
 }

//  ClickHandler(){
//      this.setState({
//          message:'State changed'
//      });
//      console.log('ClickHanlder gets called')
//  }

ClickHandler = () => this.setState({message: 'State Changed in lambda expression'});

  render() {
    return (
      <div>
         <h1>EventBinding Example</h1> 
         <h2>Message on EventBinding: {this.state.message}</h2>
         {/* <button onClick={this.ClickHandler.bind(this)}>ClickMe</button> */}
         {/* <button onClick={()=> this.ClickHandler()}>ClickMe</button> */}
         <button onClick={ this.ClickHandler}>ClickMe</button>
        </div>
    )
  }
}
