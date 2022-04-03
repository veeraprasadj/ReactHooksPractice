import React, { Component } from 'react'
import ForwardRefCompo from './ForwardRefCompo';

export default class ForwardRefParent extends Component {
constructor(props) {
  super(props)

  
  this.inputRef = React.createRef();
}

clickHandler = ()=>{
    this.inputRef.current.focus();
}

  render() {
    return (
    <div>
      <div>ForwardRefParent</div>
      <ForwardRefCompo ref={this.inputRef}/>
      <button onClick={this.clickHandler}>FocusChildText</button>
    </div>
    )
  }
}
