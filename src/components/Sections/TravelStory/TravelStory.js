import styled from 'styled-components';
import Row from 'src/components/Row/Row';
import Container from 'src/components/Container/Container';
import Flex from 'src/components/Flex/Flex';
import Paragraph from "src/components/Paragraph/Paragraph";
import travel_story_img from './images/travel_story.png';
import Button from 'src/components/Button/Button';

const TravelStory = () => {
    return (
        <StyledTravelStory>
            <Container>
                <Row>
                    <Flex justify="space-between" align="center">
                        <StyledLeftBox>
                            <img
                                src={travel_story_img}
                                className="img__responsive"
                                alt="Travel Story Image"
                            />
                        </StyledLeftBox>
                        <StyledRightBox>
                            <StoryHeading>
                                A new way to explore the world
                            </StoryHeading>
                            <Paragraph>
                                For decades travellers have reached for Lonely Planet books when looking to plan and execute their perfect
                                trip, but now, they can also let Lonely Planet Experiences lead the way
                            </Paragraph>
                            <Button primary>Learn more</Button>
                        </StyledRightBox>
                    </Flex>
                </Row>
            </Container>
        </StyledTravelStory>
    )
}


export default TravelStory;

const StyledTravelStory = styled.section`
    margin: 0 0 265px 0;
`;

const StyledLeftBox = styled.div`
    width: 50%;
`;

const StoryHeading = styled.h3`
    font-family: ${props => props.theme.fonts.primary || 'serif'};
    font-weight: bold;
    font-size: 36px;
    line-height: 1.3;
    color: ${props => props.theme.colors.primary || '#000'};
    margin-bottom: 20px;
`;

const StyledRightBox = styled.div`
    width: 41.66666%;

    button:nth-of-type(1) {
        margin-top: 33px;
    }
`;