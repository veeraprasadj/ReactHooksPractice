import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';

export default class LifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Prasad'
      }
      console.log('LifeCycleA constructor');
    }

    static getDerivedStateFromProps(props, state){

        console.log('LifeCycleA getDerivedStateFromProps');
        
        return null;
    }

    componentDidMount(){
        console.log('LifeCycleA ComponentDidMount');
    }

  render() {
      console.log('LifeCycleA render');

    return (
      <div>
          <h1>LifeCycleA</h1>
          <div>
              <LifeCycleB/>
          </div>

      </div>
    )
  }
}
