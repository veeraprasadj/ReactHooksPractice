import React, { Component } from 'react'
import { UserProvider } from './userContext'
import UserContextConsumer from './UserContextConsumer'

class UserContextProvider extends Component {
  render() {
    return (
        <div>
            <UserProvider value="Prasad">
            <div>UserContextProvider</div>
                <UserContextConsumer />
            </UserProvider>
        </div>
     
    )
  }
}

export default UserContextProvider;