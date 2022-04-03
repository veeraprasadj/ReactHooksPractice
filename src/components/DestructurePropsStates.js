import React, { Component } from 'react'

export default class DestructurePropsStates extends Component {
  render() {

    // Props destructuring
    const {fname, lname} = this.props;

    // States destructuring
    //const {state1, state2} = this.state;

    return (
        
      <div>
          <h1>DestructurePropsStates</h1>
          <div>Welcome to destructuring {fname +' '+ lname}</div>
      </div>
    )
  }
}
