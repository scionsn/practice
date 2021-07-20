import React, { useState ,useEffect} from 'react'
import uuid from "uuid/v4";
import NewSongForm from './NewSongForm';
// uuid is a module to give  a unique id .
// state and setstate are obtained by destructuring of usestate and 
// they both perform different functions.
export function SongList ()
{
    const [state, setstate] = useState([{
        title:"munni badnam",id:1
    },{ title:"shiela ki jawani",id:2}])
    function addsong(song){
        console.log(...state)
        setstate([...state,{ title:song,id:uuid()}])

    }
    const[age,setage]=useState(20)

    useEffect(()=>{
        console.log("useeffect hook called  for songs")
    },[state])
    useEffect(()=>{
        console.log("useeffect hook called for age ")
    },[age])
    // the two seperate useeffect are called for their respective states.
    return (<div>
        <ul>
           {state.map(song=>{
               return(<li key={song.id}>{song.title}</li>)
           })}
        </ul>
        <NewSongForm addsong={addsong}/>
        <button onClick={()=>{setage(age+1)}}>increase age </button><strong>  {age}</strong>
        {/* <button onClick={addsong}>add song</button> */}
    </div>)
}