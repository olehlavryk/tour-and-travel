import styled from 'styled-components';
import Flex from 'src/components/Flex/Flex';
import Row from 'src/components/Row/Row';
import Container from 'src/components/Container/Container';

const TravelFinder = () => {
    return (
        <StyledTravelFinder>
            <Container>
                <Row>
                    <Flex>
                        <StyledTravelFinderLeft>
                            1
                        </StyledTravelFinderLeft>

                        <StyledTravelFinderRight>
                            2
                        </StyledTravelFinderRight>
                    </Flex>

                </Row>
            </Container>
        </StyledTravelFinder>
    );
}

export default TravelFinder;

const StyledTravelFinder = styled.section`

`;

const StyledTravelFinderLeft = styled.section`

`;

const StyledTravelFinderRight = styled.section`

`;