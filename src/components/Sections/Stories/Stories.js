import styled from 'styled-components';
import Heading from 'src/components/Heading/Heading';
import Container from 'src/components/Container/Container';
import Paragraph from "src/components/Paragraph/Paragraph";
import { StoriesList } from 'src/config/config';
import { device } from 'src/config/devices';

const StyledStoriesHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`;

const StyledLink = styled.a`
    font-family: ${props => props.theme.fonts.tertiary};
    font-weight: 600;
    font-size: 16px;
    line-height: 1.3;
    color: ${props => props.theme.colors.accent};
    position: relative;
    padding-right: 15px;

    &:after {
        content: '>';
        position: absolute;
        right: 0;
        top: 0;
    }

    &:hover {
        color: ${props => props.theme.colors.primary};
    }

`;

const StyledStories = styled.section`
    margin-bottom: 200px;

    @media ${device.tabletL} {
        margin-bottom: 282px;
    }
`;

const StoriesListing = styled.div`
    margin-top: 56px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const Story = styled.div`
    width: 100%;
    margin-bottom: 50px;

    @media ${device.mobileL} {
        width: calc(50% - 10px);
    }

    @media ${device.tablet} {
        width: calc(25% - 15px);
    }

    @media ${device.tabletL} {
        width: calc(25% - 20px);
    }
`;

const StoryPreview = styled.img`
    width: 100%;
    height: auto;
    margin-bottom: 15px;
`;

const StoryTitle = styled.a`
    display:inline-block;
    font-family: ${props => props.theme.fonts.tertiary};
    font-style: normal;
    font-weight: bold;
    font-size: 19px;
    line-height: 1.3;
    color: ${props => props.theme.colors.primary};
    margin-bottom: 15px;

    &:hover {
        color: ${props => props.theme.colors.accentSecondary};
    }
`;

const StoryReadMore = styled.a`
    font-family: ${props => props.theme.fonts.tertiary};
    display: block;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 1.3px;
    color: ${props => props.theme.colors.accent};
    margin-top: 20px;

    &:hover {
        color: ${props => props.theme.colors.accentSecondary};
    }
`;


const Stories = () => {

    return (
        <StyledStories>
            <Container>
                <StyledStoriesHeader>
                    <Heading>
                        Trending stories
                    </Heading>
                    <StyledLink as="a" href='/#'>
                        View all
                    </StyledLink>
                </StyledStoriesHeader>
                <StoriesListing>
                    {StoriesList.map(item => (
                        <Story>
                            <a href='/#'>
                                <StoryPreview src={item.preview} alt={item.title} />
                            </a>
                            <StoryTitle href="/#">
                                {item.title}
                            </StoryTitle>
                            <Paragraph>
                                {item.description}
                            </Paragraph>
                            <StoryReadMore href="/#">
                                Read more
                            </StoryReadMore>
                        </Story>
                    ))}
                </StoriesListing>
            </Container>
        </StyledStories>
    );
}

export default Stories;

