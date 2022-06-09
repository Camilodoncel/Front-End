import "./Navigation.css";
const Navigation = ({displayHandler})=>{
    return (
        <nav>
            <button className="btn" onClick={()=> displayHandler(1)}>Session 1</button>
            <button className="btn" onClick={()=> displayHandler(2)}>Session 2</button>
            <button className="btn" onClick={()=> displayHandler(3)}>Session 3</button>
        </nav>
    )
}

export default Navigation;