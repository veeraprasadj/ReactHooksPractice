import React from 'react'

// function ForwardRefCompo() {
//   return (
//     <div>ForwardRefCompo</div>
//   )
// }

const ForwardRefCompo = React.forwardRef((props, ref)=>{
    return(
        <div>
            <input type="text" ref={ref}></input>
        </div>
    )
})
export default ForwardRefCompo