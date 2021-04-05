import styled from 'styled-components';
import Row from 'src/components/Row/Row';
import Container from 'src/components/Container/Container';
import Paragraph from "src/components/Paragraph/Paragraph";
import travel_story_img from './images/travel_story.png';
import Button from 'src/components/Button/Button';
import Heading from 'src/components/Heading/Heading';
import { device } from 'src/config/devices';

const StyledTravelStory = styled.section`
    margin: 0 0 265px 0;
`;

const StyledLeftBox = styled.div`

    @media ${device.mobileS} {
        width: 100%;
    }

    @media ${device.tablet} {
        width: 50%;
    }
`;

const StyledRightBox = styled.div`


    @media ${device.mobileS} {
        width: 100%;
    }

    @media ${device.tablet} {
        width: 41.66666%;
    }

    button:nth-of-type(1) {
        margin-top: 33px;
    }
    h1, h2, h3, h4, h5, h6 {
        margin-bottom: 20px;
    }
`;

const StyledPreview = styled.img`
    width: 100%;
    height: auto;
    position: relative;
`;

const FlexWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    @media ${device.mobileS} {
        flex-direction: column-reverse;
    }

    @media ${device.tablet} {
        flex-direction: row;
        justify-content: space-between;
    }
`;

const TravelStory = () => {
    return (
        <StyledTravelStory>
            <Container>
                <Row>
                    <FlexWrapper justify="space-between" align="center">
                        <StyledLeftBox>
                            <StyledPreview src={travel_story_img} alt="A new way to explore the world" />
                        </StyledLeftBox>
                        <StyledRightBox>
                            <Heading>
                                A new way to explore the world
                            </Heading>
                            <Paragraph>
                                For decades travellers have reached for Lonely Planet books when looking to plan and execute their perfect
                                trip, but now, they can also let Lonely Planet Experiences lead the way
                            </Paragraph>
                            <Button primary>Learn more</Button>
                        </StyledRightBox>
                    </FlexWrapper>
                </Row>
            </Container>
        </StyledTravelStory>
    )
}

export default TravelStory;
