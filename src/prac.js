import React,{Component} from 'react';
 class Prac extends Component{

    render(){
        // const{name,age}=this.props
        // the values in name ,age  are recieved from app.js and used directly with their names, this is destructuring.
        const{prac}=this.props
        const praclist=prac.map(prac=>{
            return prac.age>20? ( 
                <div key={prac.id}> 
                {/* key is provided so as each member of array can have unique key, for react to make changes in dom */}
            <div>name:{prac.name} </div>
                <div>age:{prac.age}</div>
            <div>designation:{prac.designation}</div>
                </div>
            ):null;
            // after return ternery operatr has been used.
        })
                        return(
<div>
{praclist}
</div>
        )
    }
    }
    export default Prac
