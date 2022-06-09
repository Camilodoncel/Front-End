import { Container, ImageContainer, Image } from "./Dummy.styles.js";
const image = "https://cdn.pixabay.com/photo/2017/08/06/07/55/genie-2590056_960_720.jpg";
const Dummy = ()=>{
    return (
        <Container>
            <ImageContainer>
                <Image src={image} alt="gene_aladin"/>
            </ImageContainer>
            <section>
                <h2>Hello :9</h2>
                <p>This Component hasn't been worked on in class yet.
                    Once the code is written, the example will appear 
                    at this place.
                </p>
            </section>
        </Container>
    )
}

export default Dummy;