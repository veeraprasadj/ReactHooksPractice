import React, { Component } from 'react'

export default class LifeCycleB extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         surname:'Jadapalli'
      }
      console.log('LifeCycleB Constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifeCycleB getDeriveStateFromProps');
        return null;
    }

    componentDidMount(){
        console.log('LifeCycleB ComponentDidMount');
    }
    
  render() {
    console.log('LifeCycleB render')
    return (
      <div>LifeCycleB</div>
    )
  }
}
