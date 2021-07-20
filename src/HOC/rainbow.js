import React from 'react';
const Rainbow=(Wrappedcomp)=>{
    const colors=["white","blue","blue"];
    const random=colors[Math.floor(Math.random()*5)]
    const className=random + "-text"
    // the function below changes the color of the text of the comp.
    return(props)=>{
return(<div className={className}><Wrappedcomp {...props} /></div>)
    }
    // the props passed above make sure that changes occur in the props as well of the 
    // wrapper comp
}
export default Rainbow;