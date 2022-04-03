import React, { Component } from "react";

class StatesInClass extends Component{

    constructor(){
        super();
        this.state = {
            message: 'Initial State'
        }
    }

    ChangeState(){
        this.setState({
            message: '***State is changed!***'
        })
    }
    render(){

        return <div>
            <h1>This is States example in Class</h1>
            <h2>This is state message: {this.state.message}</h2>
            <button onClick={()=>{this.ChangeState()}}>ClickToChangeState</button>
            <div><br/>*****End*********</div>
        </div>
    }
}

export default StatesInClass;