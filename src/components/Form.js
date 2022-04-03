import React, { Component } from 'react'

export default class Form extends Component {

constructor(props) {
  super(props)

  this.state = {
     userName:'',
     comments: '',
     technology:''
  }
}

handleUserNameChange = (event)=>{
    this.setState({
        userName: event.target.value
    });
}

handleCommentsChange = event => {
    this.setState({
        comments: event.target.value
    })
}

handleTechnologyChange = event => {

    this.setState({
        technology: event.target.value
    })
}

handleSubmit = event => {
    alert(`${this.state.userName} ${this.state.comments} ${this.state.technology}`)
    event.preventDefault();
}
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          <br></br>
          <div>
              UserName
              <input type='text' value={this.state.userName} onChange={this.handleUserNameChange}></input>
          </div>
          <br/>
          <div>
              Comments
              <textarea value={this.state.comments} onChange={this.handleCommentsChange}></textarea>
          </div>
          <br/>
          <div>
              Select Technology
              <select value={this.state.technology} onChange={this.handleTechnologyChange}>
                  <option value='React'>React</option>
                  <option value='Angular'>Angular</option>
                  <option value='Vue'>Vue</option>
              </select>
          </div>
          <br/>
          <button type='submit'>Submit</button>
      </form>
      
    )
  }
}

