import React, { Component } from 'react'
import { UserConsumer } from './userContext'

 class UserContextConsumer extends Component {
  render() {
    return (
        <UserConsumer>
        {
            userName => {
                return 
                <div>
                    <div>UserContextConsumer</div>
                     {userName}
                </div>
            }
        }
        </UserConsumer>
        
      
    )
  }
}

export default UserContextConsumer;