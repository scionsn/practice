import React, { useContext } from 'react';
import { ThemeContext } from '../Contexts/ThemeContext';
// class ThemeToggle extends Component {
//     render() { 
//         return (
//             <ThemeContext.Consumer>{(context)=>{
// const{toggle}=context;
// return(
//     <div>
//         <button onClick={toggle}>toggletheme</button>
//     </div>
// )
//             }}

//             </ThemeContext.Consumer>
//           );
//     }
// }
const ThemeToggle = () => {
   const{toggle}= useContext(ThemeContext)
    return (  <div>
        <button onClick={toggle}>toggletheme</button>
    </div> );
}
 
export default ThemeToggle;
 
