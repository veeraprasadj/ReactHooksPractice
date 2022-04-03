import React, { Component } from 'react'
import MemoComp from './MemoComp'
import PureCompo from './PureCompo'
import RegularCompo from './RegularCompo'

export class ParentComp extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Prasad'
      }
    }
    componentDidMount()
    {
        setInterval(()=>{
            this.setState({
                name:'Prasad'
            })
        }, 1000)
    }

  render() {
      console.log('Parent Component');
    return (
        <div>
            <div>ParentComp</div>
            <PureCompo name={this.state.name}/>
            <RegularCompo name={this.state.name}/>
            <MemoComp name={this.state.name}/>
        </div>
    )
  }
}

export default ParentComp