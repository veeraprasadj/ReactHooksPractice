import React, { Component } from 'react'
import MethodsAsPropsChild from './MethodsAsPropsChild';

export default class MethodsAsPropsParent extends Component {

  GreetHandler(message){
    alert(`Message received from child: ${message}`);
  } 

  render() {
    return (
      <div>
          <h1>MethodsAsPropsParent</h1>
          <MethodsAsPropsChild GreetParent={this.GreetHandler}/>
        </div>
    )
  }
}
