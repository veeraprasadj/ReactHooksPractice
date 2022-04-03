import React from "react";

const NoJsx = ()=>{
    return React.createElement(
        'div', 
        {id:'hello', className:'dummyClass'}, 
        React.createElement('h1', null, 'No Jsx Example')
        )
}

export default NoJsx;