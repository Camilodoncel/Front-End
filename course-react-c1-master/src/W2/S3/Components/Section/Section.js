import "./Section.css";
import LoginBtn from "../Login/LoginBtn";
import { logos } from "../../../../assets/logos";
const twitterLogo = "https://icon-library.com/images/twitter-icon-white/twitter-icon-white-17.jpg";
const twitterLogoInfo = "https://www.lter-europe.net/document-archive/image-gallery/albums/logos/TwitterLogo_55acee.png/image";
const Section = ({ title, subTitle })=>{
    if(title && subTitle){
        return (
            <div className="section_information_container">
                <div className="logo_info_container">
                    <img className="logo_info_image" src={twitterLogoInfo} alt="twitter logo"/>
                </div>
                <div className="information_container">
                    <h1>{title}</h1>
                    <h3>{subTitle}</h3>
                </div>
                <div className="section_btn_wrapper">
                    <LoginBtn 
                        text="Sign up with Google" 
                        logo={logos.logo_google}
                    />
                    <LoginBtn 
                        text="Sign up with Apple" 
                        logo={logos.logo_apple}
                    />
                    <div className="orContainer">
                        <div>
                            <span>or</span>
                        </div>
                    </div>
                    <LoginBtn 
                        text="Sign up with phone, or email"
                    />
                    <div className="additional_info_container">
                        <span>
                            By signing up, you agree to the <a href="/">Terms of Service</a>  and <a href="/">Privacy Policy</a>, including <a href="/">Cookie use</a>.
                        </span>
                    </div>
                    <div className="additional_info_question">
                        <span>
                            Already have an account?
                        </span>
                    </div>
                    <LoginBtn
                        text="Sign in"
                    />
                </div>
                
            </div>
        )
    }else{
        return (
            <div className="section_main_logo_container">
                <div className="section_main_image_container">
                    <img src={twitterLogo} alt="twitter logo"/>
                </div>
            </div>
        )
    }
}

export default Section;