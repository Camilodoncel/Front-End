import "./Login.css";
const LoginBtn = ({text, logo})=>{
    const isFound = text.includes("in");
    if(logo){
        return <button className="btn_log"> <img src={logo} alt="logo"/> <span>{text}</span> </button>
    }else{
        return <button className={ isFound ? "btn_final" : "btn_blue"}><span>{text}</span> </button>
    }
}

export default LoginBtn;