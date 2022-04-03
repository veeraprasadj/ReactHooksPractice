import React, { Component } from 'react'

export default class ClassCompoRef extends Component {
constructor(props) {
  super(props)

  this.inputRef = React.createRef();
  
}

focusInputRef(){
    this.inputRef.current.focus();
}

  render() {
      
    return (
        <div>
           <div>ClassCompoRef</div>
           <div>
               <input type="text" ref={this.inputRef}/>
           </div>
        </div>
     
      
    )
  }
}
