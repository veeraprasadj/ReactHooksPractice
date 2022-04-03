import React, { useState } from 'react'

function UseStateHook() {

   const initialCount =0;
   const [count, setCount] = useState(initialCount);
   const [name, setName] = useState({fName:'', lName:''});

   const IncrementFive = ()=> {
    for(let i = 0; i < 5 ; i++){
        setCount(prevCount => prevCount+1)
    }   
   }

  const  DecrementFive = () => {
    for(let i = 0; i < 5 ; i++){
        setCount(prevCount => prevCount-1)
    }  
   }



  return (
      <div>
        <div>UseStateHook</div>
        <button onClick={()=>{setCount(count+1)}}>Click Count {count}</button>
        <button onClick={()=>{setCount(count+1)}}>Reset</button>
        <button onClick={IncrementFive}>Increment 5</button>
        <button onClick={DecrementFive}>Decrement 5 {count}</button>
        <div>
            <input type="text" value= {name.fName} 
            onChange={e=>setName({...name, fName: e.target.value})}></input>
            <input type="text" value= {name.lName} 
            onChange={e=>setName({...name, lName: e.target.value})}></input>
        </div>
        <div>
            FirstName: {name.fName}
            <div>
            Last Name: {name.lName}
            </div>
            
        </div>
      </div>
    
  )
}

export default UseStateHook