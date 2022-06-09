import { BtnNav } from "./Styles/navigation.styles.js";
export const Navigation = ({topic, id, type,  handlingComponent })=>{
    return <BtnNav onClick={()=> handlingComponent({ type: type, number: id})}>{topic}</BtnNav>
}