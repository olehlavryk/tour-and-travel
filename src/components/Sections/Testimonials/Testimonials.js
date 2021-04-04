import styled from 'styled-components';
import Container from 'src/components/Container/Container';
import Heading from 'src/components/Heading/Heading';
import Slider from "react-slick";
import stars from './images/stars.png';
import author from './images/author.png';

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <StyledNextArrow
            onClick={onClick}
        >
            &#10095;
        </StyledNextArrow>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <StyledPrevArrow
            onClick={onClick}
        >
            &#10094;
        </StyledPrevArrow>
    );
}

const Arrow = styled.span`
    width: 40px;
    height: 40px;
    border: 2px solid #000000;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 1;
`;

const StyledPrevArrow = styled(Arrow)`
    position: absolute;
    right: calc(52px + 8.3333%);
    bottom: 0;
`;
const StyledNextArrow = styled(Arrow)`
    position: absolute;
    right: 8.3333%;
    bottom: 0;

`;

const StyledTestimonials = styled.section`
    margin-bottom: 260px;
`;

const SliderWrapper = styled.div`
    margin-top: 56px;
    position: relative;
`;

const Testimonial = styled.div`
    outline: none;
    display: flex !important;
    justify-content: space-between;
    align-items: center;
    position: realative;
`;

const TestimonialLeft = styled.div`
    width: 41.6666%;
`;

const TestimonialRating = styled.img`
    margin-bottom: 30px;
`;

const TestimonialText = styled.p`
    font-family: ${props => props.theme.fonts.secondary};
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 1.3;
    color: ${props => props.theme.colors.primary};
    padding: 0;
    margin: 0;
`;


const TestimonialAuthor = styled.div`
    margin-top: 40px;
    font-family: ${props => props.theme.fonts.tertiary};;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 1.3;
    color: ${props => props.theme.colors.primary};
`;

const TestimonialAuthorPosition = styled.div`
    font-family: ${props => props.theme.fonts.tertiary};
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 1.3;
    color: ${props => props.theme.colors.primary};
`;

const TestimonialRight = styled.div`
    width: 33.3333%;
    margin-right: 8.3333%;
    position:relative;
`;

const TestimonialAuthorPhoto = styled.img`
    border-radius: 8px 8px 0 0;
`;

const TestimonialControlsBox = styled.div`
    width: 132px;
    height: 60px;
    position: absolute;
    right: 7.4%;
    bottom: 0;
    background-color: #fff;
    border-radius: 8px 0 0 0;
    z-index: 1;
`;
const Testimonials = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    return (
        <StyledTestimonials>
            <Container>
                <Heading>
                    Testimonials
                </Heading>
                <SliderWrapper>
                    <TestimonialControlsBox />
                    <Slider {...settings}>
                        <Testimonial>
                            <TestimonialLeft>
                                <TestimonialRating src={stars} alt="Testimonial rating" />
                                <TestimonialText>
                                    “Quisque in lacus a urna fermentum euismod. Integer mi nibh, dapibus ac scelerisque eu, facilisis quis purus. Morbi blandit sit amet turpis nec”
                                </TestimonialText>
                                <TestimonialAuthor>
                                    Edward Newgate
                                </TestimonialAuthor>
                                <TestimonialAuthorPosition>
                                    Founder Circle
                                </TestimonialAuthorPosition>
                            </TestimonialLeft>
                            <TestimonialRight>
                                <TestimonialAuthorPhoto src={author} alt="Edward Newgate" />
                            </TestimonialRight>
                        </Testimonial>
                        <Testimonial>
                            <TestimonialLeft>
                                <TestimonialRating src={stars} alt="Testimonial rating" />
                                <TestimonialText>
                                    “Quisque in lacus a urna fermentum euismod. Integer mi nibh, dapibus ac scelerisque eu, facilisis quis purus. Morbi blandit sit amet turpis nec”
                                </TestimonialText>
                                <TestimonialAuthor>
                                    John Doe
                                </TestimonialAuthor>
                                <TestimonialAuthorPosition>
                                    Founder NextGate
                                </TestimonialAuthorPosition>
                            </TestimonialLeft>
                            <TestimonialRight>
                                <TestimonialAuthorPhoto src={author} alt="John Doe" />
                            </TestimonialRight>
                        </Testimonial>
                        <Testimonial>
                            <TestimonialLeft>
                                <TestimonialRating src={stars} alt="Testimonial rating" />
                                <TestimonialText>
                                    “Quisque in lacus a urna fermentum euismod. Integer mi nibh, dapibus ac scelerisque eu, facilisis quis purus. Morbi blandit sit amet turpis nec”
                                </TestimonialText>
                                <TestimonialAuthor>
                                    Alex Smith
                                </TestimonialAuthor>
                                <TestimonialAuthorPosition>
                                    Founder NXTS
                                </TestimonialAuthorPosition>
                            </TestimonialLeft>
                            <TestimonialRight>
                                <TestimonialAuthorPhoto src={author} alt="Alex Smith" />
                            </TestimonialRight>
                        </Testimonial>
                    </Slider>
                </SliderWrapper>

            </Container>
        </StyledTestimonials>
    )
}

export default Testimonials;

