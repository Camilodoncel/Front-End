import React from "react";
import ChildOne from "./Components/ChildOne";
import ChildTwo from "./Components/ChildTwo";

class ParentCount extends React.Component{
    
    state = {
        number: 23
    }

    addition = ()=>{
        this.setState((prevState)=>({ number: prevState.number + 1}))
    }

    substraction = ()=>{
        this.setState((prevState)=>({ number: prevState.number - 1}))
    }

    render(){
        return (
            <div>
                <p>Parental Class Component</p>
                <ChildOne count={this.state.number} additionFn={this.addition} substractionFn={this.substraction}/>
                <ChildTwo count={this.state.number} additionFn={this.addition} substractionFn={this.substraction}/>
            </div>
        );
    };
}

export default ParentCount;