import React from 'react'; 
import '../App.css';

class Decrement extends React.Component{

constructor(props) 
{
    super(props)
    this.state = {counter:0}
   
}

Decrement = (event) =>
{
    event.preventDefault(); 
    this.setState({
    counter: this.state.counter-1
    }); 
}

render()
{
    return (
    <button href="#" class="myButton" onClick={this.Decrement}> Decrement value is {this.state.counter} </button>
    )
}

}

export default Decrement; 