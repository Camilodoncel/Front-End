import { Navigation } from "./Navigation.js";
const Topic = ({week, data, handlingComponent })=>{
    return (
        <div>
            <h3>Week {week}</h3>
            {
               data.map((item)=>
                <Navigation
                    key={item.id}
                    topic={item.class_name}
                    id={item.id}
                    handlingComponent={handlingComponent}
                    type={data}
                />   
               )
            }
        </div>
    )
}

export default Topic;