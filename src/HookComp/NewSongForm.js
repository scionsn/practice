import React,{useState} from 'react';
const NewSongForm = ({addsong}) => {
   const[state,setstate]= useState("")
   const handlesubmit=(event)=>{
event.preventDefault();
console.log("updated state is ",state);
addsong(state);
setstate("")
   }

    return (<form onSubmit={handlesubmit}>
<input type="text" value={state} placeholder="enter your new song" onChange={(event)=>{
setstate(event.target.value)
}}></input>
<button >add song</button>
    </form>  );
}
 
export default NewSongForm;