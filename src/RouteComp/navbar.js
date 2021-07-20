import React from 'react';
import {NavLink,Link,withRouter} from "react-router-dom";
const Navbar=(props)=>{
    return(<nav>
        <div>
<ul>
    <li><Link to="/">HOME</Link></li>
    <li><NavLink to="/contact">CONTACT</NavLink></li>
    <li><NavLink to="/about">ABOUT</NavLink></li>

</ul>
</div>
    </nav>)
}
// withrouter is a higher order component.
export default withRouter(Navbar);