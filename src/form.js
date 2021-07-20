import React,{Component} from 'react';
class Form extends Component{
    state={
name:null,
age:null,
designation:null
    };
    handlechange=(event)=>{
this.setState({
[event.target.id]:event.target.value
})
// event.target.id match with the key of state object,
// thus we are able to make changes to state obj properly
console.log(event.target)
    }
    handlesubmit=(e)=>{
    e.preventDefault();

this.props.form(this.state);
// here the state of the form is being sent to the parent i.e
// app .js which is then displayed in the browser by addform func.

}
render(){
    return(
        <div>
            <form onSubmit={this.handlesubmit}>
        <label>name:</label>   
        <input type="text" id="name" onChange={this.handlechange}></input>
        <label>age:</label>
        <input type="text" id="age" onChange={this.handlechange}></input>

        <label>designation:</label>
        <input type="text" id="designation" onChange={this.handlechange}></input> 
       <br></br> <button>Submit</button>
        
        </form>
        </div>
    )
}
}
export default Form;