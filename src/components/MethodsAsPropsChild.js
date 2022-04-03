import React from 'react'

export default function MethodsAsPropsChild(props) {


  return (
    <div>
        <h1>MethodsAsPropsChild</h1>
        <button onClick={()=> props.GreetParent('Child Message')}>SendMessageToParent</button>
    </div>

  )
}
