import React, { Component } from 'react'
import ClassCompoRef from './ClassCompoRef';

export default class RefsDemo extends Component {

    constructor(props) {
      super(props)
    
      this.inputRef = React.createRef();
      this.classRef = React.createRef();
      //CallBack refs
      this.cbRef = null;

      this.setcbRef = element =>{
          this.cbRef = element;
      }
      
    }

    handleButtonClick =(event) =>{
        this.classRef.current.focusInputRef();
    }

  componentDidMount(){

    this.inputRef.current.focus();
    this.cbRef.focus();
  }
  render() {
    return (
        <div>
            <div>RefsDemo</div>
            <input type="text" ref={this.inputRef}></input>
            <input type="text" ref={this.setcbRef}></input>
            <ClassCompoRef ref={this.classRef}></ClassCompoRef>
            <button onClick={this.handleButtonClick}>SetFocusOnClassComp</button>
        </div>
      
    )
  }
}
