import React,{useState, createContext} from 'react';
export const BookContextHook=createContext();

const BookContextProvider  = (props) => {
   const[state,setstate]= useState([
        {  title:"call center",id:1 },
        { title:"2 states",id:2}
    ])
    return (  
        <BookContextHook.Provider value={{state}}>
{props.children}
        </BookContextHook.Provider>
    );
}
 
export default BookContextProvider ;