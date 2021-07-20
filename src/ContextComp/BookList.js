import React ,{useContext} from 'react';
import ThemeContextProvider, {ThemeContext} from "../Contexts/ThemeContext"
import { BookContextHook } from '../Contexts/BookContextHook';
// class BookContext extends React.Component {
//     static contextType=ThemeContext;
//     render() { 
//         const{isLight,light,dark}=this.context;
//                 //destructuring done above

//         const theme=isLight?light:dark;

//         console.log(this.context)
//         return ( <div style={{background:theme.ui,color:theme.syntax}}>
//             <ul>
//                 <li style={{color:theme.syntax}}>home</li>
//                 <li style={{color:theme.syntax}}>about</li>
//                 <li style={{color:theme.syntax}}>contact</li>

//             </ul>
//         </div> );
//     }
// }
const BookList = () => {
    console.log(ThemeContext)
    const{state}=useContext(BookContextHook)
   const{isLight,light,dark}= useContext(ThemeContext)
//    the above line helps us to consume the context w/o using this.context as in above code.
   const theme=isLight?light:dark;
 return(<div style={{background:theme.ui,color:theme.syntax}}>
{state.map(book=>{
    return( 
        <li key={book.id}>{book.title}</li>
       )
})}
 </div>)
}
 
export default BookList;
 
