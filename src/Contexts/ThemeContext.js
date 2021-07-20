import React,{createContext,Component} from 'react';
export const ThemeContext=createContext();
class ThemeContextProvider extends Component {
    state = { isLight:true,
    light:{syntax:"#555",ui:"#ddd",bg:"#eee"},
    dark:{syntax:"#ddd",ui:"#333",bg:"#555"}
    
    }
    toggletheme=()=>{
        this.setState({
            isLight:!this.state.isLight
        })
    }
    render() { 
        return ( 
<ThemeContext.Provider value={{...this.state,toggle:this.toggletheme}}>
{this.props.children}
</ThemeContext.Provider>
// props.children diplays the components on the screen, w/o it the components are not displayed.
         );
    }
}
 
export default ThemeContextProvider;