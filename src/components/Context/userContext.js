import React from 'react'

const userContext = React.createContext();
const UserProvider = userContext.ContextProvider;
const UserConsumer = userContext.ContextConsumer;

export {UserProvider, UserConsumer};