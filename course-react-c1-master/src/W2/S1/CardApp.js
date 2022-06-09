import Header from "./Header";
import PersonalInformation from "./PersonalInformation";
import SectionInfo from "./SectionInfo";
import { Info } from "./Data";

const CardApp = ()=>{
    return (
        <div className="App">
          <Header/>
          <PersonalInformation
            name={Info.personalData.name}
            lastName={Info.personalData.lastname}
            age={Info.personalData.age}
            nationality={Info.personalData.nationality}
            avatar={Info.personalData.avatar}
          />
          <SectionInfo career={Info.career}/>
          <SectionInfo education={Info.education}/>
          <SectionInfo bio={Info.bio}/>
        </div>
      );
}

export default CardApp;