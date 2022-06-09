import React, {Component} from "react";
// El componente solo se rendeiza cundo su estado es modificado.
class ChildOne extends Component {

    state = {
        value: 1
    }

    add = ()=>{
        this.setState({ value: this.props.count}, ()=>{this.props.additionFn()})
    }

    sub = ()=>{
        this.setState({ value: this.props.count}, ()=>{this.props.substractionFn()})
    }

    render(){
        return (
            <div>
                <p>Component Child One</p>
                <h1>The count goes at: {this.state.value}</h1>
                <button onClick={()=> this.add()}>Add</button>
                <button onClick={()=> this.sub()}>Sub</button>
            </div>
        );
    };
};

export default ChildOne;