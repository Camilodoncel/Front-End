import counterStyles from "./Counter.module.css";
const Counter = ()=>{
    let count = 0;
    return (
        <div>
            <p>The Count is: {count}</p>

            <section>
                <button className={counterStyles.btnOperation}>Add</button>
                <button className={counterStyles.btnSub}>Substract</button>
            </section>
        </div>
    )
}

export default Counter;