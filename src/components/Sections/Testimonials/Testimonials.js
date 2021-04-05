import styled from 'styled-components';
import Container from 'src/components/Container/Container';
import Heading from 'src/components/Heading/Heading';
import Slider from "react-slick";
import stars from './images/stars.png';
import author from './images/author.png';
import { device } from 'src/config/devices';

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
    right: 52px;
    bottom: 0;

    @media ${device.laptopM} {
        right: calc(52px + 8.3333%);
    }
`;
const StyledNextArrow = styled(Arrow)`
    position: absolute;
    right: 0;
    bottom: 0;

    @media ${device.laptopM} {
        right: 8.3333%;
    }
`;

const StyledTestimonials = styled.section`
    margin-bottom: 200px;

    @media ${device.tabletL} {
        margin-bottom: 282px;
    }
`;

const SliderWrapper = styled.div`
    margin-top: 56px;
    position: relative;
`;

const Testimonial = styled.div`
    outline: none;
    display: flex !important;
    justify-content: space-between;

    position: realative;
    flex-wrap: wrap;
`;

const TestimonialLeft = styled.div`
    width: 100%;
    margin-bottom: 0;

    @media ${device.mobileS} {
        margin-bottom: 30px;
    }

    @media ${device.mobileL} {
        width: 47%;
    }

    @media ${device.tablet} {
        width: 41.6666%;
        align-items: center;
    }
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
    width: 100%;
    position:relative;

    @media ${device.mobileL} {
        width: 45%;
        /* width: 33.3333%; */
    }

    @media ${device.tablet} {
        width: 33.3333%;
    }

    @media ${device.laptopM} {
        margin-right: 8.3333%;
    }
`;

const TestimonialAuthorPhoto = styled.img`
    width: 100%;
    height: auto;
    display:block;
    border-radius: 8px 8px 0 0;
`;

const TestimonialControlsBox = styled.div`
    width: 112px;
    height: 60px;
    position: absolute;
    right: 0;
    bottom: 0;
    background-color: #fff;
    border-radius: 8px 0 0 0;
    z-index: 1;

    @media ${device.laptopM} {
        right: 7.4%;
        width: 132px;
    }
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

