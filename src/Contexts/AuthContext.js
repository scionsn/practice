import React, { Component, createContext } from 'react';
export const auth=createContext();

class AuthContext extends Component {
    state = { 
        isAuth:true
     }
     toggleauth=()=>{
this.setState({
    isAuth:!this.state.isAuth
})
     }
    render() { 
        return (

            <auth.Provider value={{...this.state,toggleauth:this.toggleauth}}>
                 {this.props.children}
            </auth.Provider>
          );
    }
}
 
export default AuthContext;