import { Component } from "react";
import { Container, Wrapper, ButtonPlus, ButtonMinus, CountWrapper} from "./CounterStyles.js";

class CounterComponent extends Component{
    state = {
        value: 1
    }

    addition = ()=>{
        this.setState(prevState => ({ value: prevState.value + 1}));
    }

    substraction = ()=>{
        this.setState(prevState => ({ value: prevState.value >= 1 ? prevState.value - 1 : prevState.value}));
    }

    render(){
        return (
            <Container>
                <Wrapper>
                    <ButtonMinus onClick={()=> this.substraction()}>-</ButtonMinus>
                    <CountWrapper>
                        <h1>{this.state.value}</h1>
                    </CountWrapper>
                    <ButtonPlus onClick={()=> this.addition()}>+</ButtonPlus>
                </Wrapper>
            </Container>
        )
    }

}

export default CounterComponent;