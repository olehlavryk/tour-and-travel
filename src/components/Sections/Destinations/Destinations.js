import styled from 'styled-components';
import Container from 'src/components/Container/Container';
import Flex from 'src/components/Flex/Flex';
import Heading from 'src/components/Heading/Heading';
import { DestinationsList } from 'src/config/config';

const Destinations = () => {
    return (
        <StyledDestinations>
            <Container>
                <header>
                    <Flex justify="space-between" align="center">
                        <Heading>
                            Featured destinations
                        </Heading>
                        <StyledLink as="a" href='/#'>
                            View all
                        </StyledLink>
                    </Flex>
                </header>

                <StyledDestinationsList>
                    {DestinationsList.map(item => (
                        <Destination>
                            <a href={item.url}>
                                <DestinationPreview
                                    src={item.preview}
                                    alt={`${item.title} | ${item.location}`}
                                />
                            </a>
                            <DestinationText>
                                <DestinationTitile>
                                    {item.title}
                                </DestinationTitile>
                                <DestinationLocation>
                                    {item.location}
                                </DestinationLocation>
                            </DestinationText>
                        </Destination>
                    ))}
                </StyledDestinationsList>
            </Container>
        </StyledDestinations>
    );
}

export default Destinations;

const StyledDestinations = styled.section`
    margin-bottom: 262px;
`;

const StyledDestinationsList = styled.ul`
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
`;

const Destination = styled.li`
    width: calc(25% - 20px);
    position: relative;
`;

const DestinationText = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    background: #fff;
    padding: 15px 20px 0 0;
    border-radius: 0 8px 0 0
`;

const DestinationTitile = styled.div`
    font-family: ${props => props.theme.fonts.tertiary};
    font-weight: 600;
    font-size: 17px;
    line-height: 25px;
    color: #042521;
`;

const DestinationLocation = styled.div`
    font-family: ${props => props.theme.fonts.tertiary};
    font-weight: 500;
    font-size: 15px;
    line-height: 24px;
    color: #80918E;
`;

const DestinationPreview = styled.img`
    border-radius: 8px 8px 8px 0;
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

