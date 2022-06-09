import React, {Component} from "react";

class ChildTwo extends Component {

    state = {
        value: 1
    }

    sumar = ()=>{
        this.setState({ value: this.props.count}, ()=>{this.props.additionFn()})
        
    }

    restar = ()=>{
        this.setState({ value: this.props.count}, ()=>{this.props.substractionFn()})
        
    }

    render(){ 
        return (
            <div>
                <p>Component Child Two</p>
                <h1>The count goes at: {this.state.value}</h1>
                <button onClick={()=> this.sumar()}>Add</button>
                <button onClick={()=> this.restar()}>Sub</button>
            </div>
        );
    };
};

export default ChildTwo;