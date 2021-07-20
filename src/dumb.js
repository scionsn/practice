import React from 'react';
import './dumb.css';
const Dumb=({jim,deletedata})=>{
    // v can pass more than one prop in a func. comp
    // like shown above but within curly brack.
        // const{jim}=props;
        //the above step is called destructuring,therefore
        // the const name should match with the object name which is passed as props
        const praclist=jim.map(prac=>{
            return prac.age>20? ( 
                <div key={prac.id}> 
                {/* key is provided so as each member of array can have unique key, for react to make changes in dom */}
            <div>name:{prac.name} </div>
                <div>age:{prac.age}</div>
            <div>designation:{prac.designation}</div>
            <button onClick={()=>{deletedata(prac.id)}}>del_data</button>
                </div>
            ):null;
            // after return ternery operatr has been used.
        })
        
        // props is an object passed from app.js
        return(
<div>
{praclist}
</div>
        )
    }
    export default Dumb
