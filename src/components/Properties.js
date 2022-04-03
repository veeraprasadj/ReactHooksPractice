import React from "react";

// const PropertiesComponent = (props) => <h1>My Name is {props.firstName +' '+ props.lastName}</h1>

const PropertiesComponent = (props) => {

    return(  
    <div>
        <h1>My Name is {props.firstName +' '+ props.lastName}</h1>
        {props.children}
     </div>
    )
}


export default PropertiesComponent;