import React,{useContext} from 'react';
import {ThemeContext} from "../Contexts/ThemeContext"
import {auth} from '../Contexts/AuthContext';
// class NavContext extends React.Component {
// // static contextType=ThemeContext;

//     render() {
        
        
//         // this.context stores the value given in the provider 
//         return ( 
//             <auth.Consumer>{authcontext=>( 
//             <ThemeContext.Consumer>{(themecontext)=>{
//                 const{isAuth,toggleauth}=authcontext;
//                 const{isLight,light,dark}=themecontext
//                 //destructuring done above
//                 const theme=isLight?light:dark;
//                 console.log(themecontext)
//                 return(
//                     <nav style={{background:theme.ui,color:theme.syntax}}>
//                     <h1>context in  react</h1>
//                     <div onClick={toggleauth}> 
//                         {isAuth?"logged in":"logged out"}
//                     </div>
//                     <ul>
//                         <li>home</li>
//                         <li>about</li>
//                         <li>contact</li>
        
//                     </ul>
//                 </nav>
//                 )
                
//             }}
//                 </ThemeContext.Consumer> )}
           
//                 </auth.Consumer>
            
//           );
//     }
// }
 const NavContext = () => {
     console.log(auth);
    const{isAuth,toggleauth}=useContext(auth)
     const{isLight,light,dark}=useContext(ThemeContext)
    const theme=isLight?light:dark
     return (  <nav style={{background:theme.ui,color:theme.syntax}}>
        <h1>context in  react</h1>
        <div onClick={toggleauth}> 
            {isAuth?"logged in":"logged out"}
        </div>
        <ul>
            <li>home</li>
            <li>about</li>
            <li>contact</li>

        </ul>
    </nav> );
 }
  
 export default NavContext;
