import React, { Component } from 'react'

export default class ConditionalRendering extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }

  render() {

    // if(this.state.isLoggedIn)
    // return <div>Welcome Prasad!</div>
    // else 
    // return <div>Please Login</div>
    return this.state.isLoggedIn && <div>Welcome Prasad!</div>;

    // if(this.state.isLoggedIn)
    // return <div>Welcome Prasad!</div>
    // else 
    // return <div>Please Login</div>

    // return (
    //   <div>ConditionalRendering</div>
    // )
  }
}
