import styled from 'styled-components';
import Container from 'src/components/Container/Container';
import Heading from 'src/components/Heading/Heading';
import { DestinationsList } from 'src/config/config';
import { device } from 'src/config/devices';

const StyledDestinations = styled.section`
    margin-bottom: 200px;

    @media ${device.tabletL} {
        margin-bottom: 282px;
    }
`;

const StyledDestinationsList = styled.ul`
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const Destination = styled.li`
    width: 100%;
    position: relative;
    margin-bottom: 20px;

    @media ${device.mobileL} {
        width: calc(50% - 10px);
    }

    @media ${device.tablet} {
        width: calc(25% - 10px);
    }

    @media ${device.tabletL} {
        width: calc(25% - 20px);
    }
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
    width: 100%;
    height: auto;
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

const FlexWrapper = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`;

const Destinations = () => {
    return (
        <StyledDestinations>
            <Container>
                <header>
                    <FlexWrapper justify="space-between" align="center">
                        <Heading>
                            Featured destinations
                        </Heading>
                        <StyledLink as="a" href='/#'>
                            View all
                        </StyledLink>
                    </FlexWrapper>
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



