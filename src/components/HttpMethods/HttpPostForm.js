import axios from 'axios'
import React, { Component } from 'react'

class HttpPostForm extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         userId:'',
         title:'',
         body:''
      }
    }

  onChangeHandler = e => { this.setState({
      [e.target.name]: e.target.value
  })
}
    
  submitHanlder = (e) =>{
    console.log('data is posting...', this.state)
    e.preventDefault();
    axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
    .then(response =>{
        console.log('Data posted successfully', response);
    })
    .catch(error => console.log(error))
   
  } 


  render() {
      const{userId, title, body} = this.state;
    return (
        <div>
        <div>HttpPostForm</div>
        <form onSubmit={this.submitHanlder}>
            <div>
                <input type="text" placeholder='UserId' name="userId" value={userId} onChange={this.onChangeHandler}/>
            </div>
            <div>
                <input type="text" placeholder='Title' name="title" value={title} onChange={this.onChangeHandler}/>
            </div>
            <div>
                <input type="text" placeholder='Body' name="body" value={body} onChange={this.onChangeHandler}/>
            </div>
            <div>
                <button type='submit'>SubmitData</button>
            </div>
        </form>
      </div>
    )
  }
}

export default HttpPostForm