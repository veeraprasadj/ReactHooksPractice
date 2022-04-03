import React, { Component } from 'react'
import axios from 'axios'

class HttpGetComp extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
      posts:[],
      errorMsg:null
   }
 }

 componentDidMount(){

    axios.get('https://jsonplaceholder.typicode.com/posts1')
    .then(response => {
        console.log(response);
        this.setState({
            posts: response.data
        })
    })
    .catch(err => {
        console.log(err);
        this.setState({
            errorMsg: 'Error on retrieving the data'
        });
    })
 }

  render() {

    const{posts, errorMsg} = this.state;
    return (
      <div>
          <div>HttpGetComp Example</div>
          {
              posts? posts.map(post => <div key={post.id}>{post.title}</div>): null
             
          }
           {errorMsg? <div>{errorMsg}</div>: null}
      </div>
    )
  }
}

export default HttpGetComp