import React ,{Component}from 'react';
import {BrowserRouter,Route} from "react-router-dom";
import Prac from './prac'
import 'bootstrap/dist/css/bootstrap.min.css';
import Dumb from './dumb';
import Form from './form';
import Axiosprac from './axiosprac';
import NavContext from './ContextComp/NavContext';
import ThemeContextProvider from './Contexts/ThemeContext';
import ThemeToggle from './ContextComp/ThemeToggle';
import AuthContext from './Contexts/AuthContext';
import { SongList } from './HookComp/SongList';
import BookContextProvider from './Contexts/BookContextHook';
import BookList from './ContextComp/BookList';
import Navbar from './RouteComp/navbar';
import Contact from "./RouteComp/contact";
import About from "./RouteComp/about";
import Home from "./RouteComp/home";


export default class App extends Component {
    state={
        name:"santa singh",
        age:20,
        id:1,
        list:[{name:"sana",age:10,designation:"manager",id:1},
        {name:"suna",age:20,designation:"clerk",id:2},
        {name:"saba",age:30,designation:"advisor",id:3}]
    }
    adddata=(data)=>{
        console.log(data);
        data.id=Math.random();
        // form.id adds a key named as id in the state object of form.
        let lists=[...this.state.list,data]
        console.log(lists)
        //... is spread operator.
        //in this function we take the value from the form in form.js
        // and we update the  list array by the value added in the form
this.setState({
list:lists
})
console.log(this.state.list)
// in the above func we are to add the state object of form to
// the  state of above object,basically to the list of above object.
    }
    deletedata=(id)=>{
       let data=this.state.list.filter(item=>{
           return item.id!==id
        //    we dont want the id of form to be = to id in list arr. thus v use !==
        //    filter works on true -false cond. preferably.
       }) 
       this.setState({
        list:data   
       })
        
    }
    componentDidMount(){
        console.log(`component mounted`);
    }
    componentDidUpdate(PrevProps,PrevState){
console.log(    `component updated`);
console.log(    PrevProps);
console.log(PrevState);
    }
    componentWillMount(){

    }
    handleclick=(event)=>{
        //the event parameter is handled by js autom.
this.setState({
    name:"scion singh"
})
//setstate() used to change the state .
        console.log(this.state.name);
        //the above code is used to access the state.
console.log(event.target);
//here target is the button
    }
    handlemouseover(event){
console.log(event.target,event.pageX);
//pagex gives the position of pointer on x coordinate.

    }
    handlecopy(event){
console.log(event.target);
alert("dont copy bitch");
    }
    handlechange=(event)=>{
this.setState({
    name:event.target.value
})
//event.target.value gives the value inside the target tag.
console.log(event.target)
    }
    handlesubmit=(event)=>{
        event.preventDefault()
        // pevent default prevents the page from being reloaded.
        console.log("form submitted by",this.state.name);
    }
    render() {
        return (

            <div>
                 <BrowserRouter>
        <Navbar/>
        <Route exact path="/"  component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
</BrowserRouter>
<br></br>
            
                <h3 className="text-center">TodoItem
                </h3>
        <h2>{this.state.name}</h2>
        <h2>{this.state.age}</h2>
        <button onClick={this.handleclick}>simple click</button>
        <button onMouseOver={this.handlemouseover}>mouseover</button>
        <p onCopy={this.handlecopy}>example of copy event</p>
        <form onSubmit={this.handlesubmit}>
        <input type="text" onChange={this.handlechange}></input>
                {/* the onchange event is triggered when a key in pressed in text box */}
        <button>submit</button>
        </form>
        {/* <Prac  prac={this.state.list}/>   */}
        {/* <Prac name="scion" age="21" hobby="coding and badmn."/> */}

        {/* above element imported from prac.js, name age and hobby are props that are passed to prac.js */}
        {/* <Dumb  deletedata={this.deletedata} jim={this.state.list}/> */}
        {/* <Form  form={this.adddata}/> */}
        <br></br>
        {/* <Axiosprac/> */}
       
        <ThemeContextProvider>
            <AuthContext>
        <NavContext/>
        <BookContextProvider>
        <BookList/>
        </BookContextProvider>
        <ThemeToggle/>
        </AuthContext>
        </ThemeContextProvider>
        <br></br>
        <h2>hooks</h2>
        <SongList/>
        <br></br>
        </div>
        );
    }
}
