import Bio from "./Bio";
const SectionInfo = (props) => {
  if (props.bio) {
    return (
      <section>
        <div className='sectionContainer'>
          <div>
            <img
              className='imgAvatar'
              src='https://readgem.files.wordpress.com/2021/01/20200609-giant-rooks-studio-c2a9-by-jean-raclet-150.jpg?w=683'
              alt='second'
            />
          </div>
          <div>
            <h2 className='subTittleStyle'>Biography</h2>
            <Bio bio={props.bio} />
          </div>
        </div>
      </section>
    );
  } else {
    let sectionTitle = props.career ? "Experience" : "Education";
    let items = props.career ? props.career : props.education;
    return (
      <section>
        <div className='sectionContainer'>
          <div>
            <img
              className='imgAvatar'
              src='https://readgem.files.wordpress.com/2021/01/20200609-giant-rooks-studio-c2a9-by-jean-raclet-150.jpg?w=683'
              alt='second'
            />
          </div>
          <div>
            <h2 className='subTittleStyle'>{sectionTitle}</h2>
            <ul className='liStyle'>
              {items.map((item) => (
                <li key={item.id}>
                  {item.occupation ? item.occupation : item.institute}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    );
  }
};

export default SectionInfo;
//
