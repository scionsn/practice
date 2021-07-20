import React,{Component} from 'react';
import axios from  'axios';
class Axiosprac extends Component{
    state={
    mobile:[]
    }
    componentDidMount(){
    axios.get('https://raw.githubusercontent.com/brainmentorspvtltd/myserverdata/master/mobiles.json')
    .then(items=>{
        console.log(items);
    this.setState({
        mobile:items.data.mobiles
    })
console.log(this.state)
}
    
    ).catch(err=>console.log(err))
    }
    render(){
        const{mobile}=this.state;
        const list=mobile.length?(
            mobile.map(item=>{
            
return(<div key={item.id}>
    <div>{item.name}</div>

    <img src={item.url}></img>
<div>the price of the phone is:-{item.price}</div>

</div>)
            })
        ):(<div><p>no list found!!</p></div>)
        return(<div>
{list}
        </div>)
    }
}
export default Axiosprac;