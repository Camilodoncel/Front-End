import { ButtonAdd, ButtonSub } from "./Styles";
const CounterTwo = ()=>{
    let count = 23;
    return (
        <div>
            <p>The Count is: {count}</p>

            <section>
                <ButtonAdd>Add</ButtonAdd>
                <ButtonSub>Substract</ButtonSub>
            </section>
        </div>
    )
}

export default CounterTwo;