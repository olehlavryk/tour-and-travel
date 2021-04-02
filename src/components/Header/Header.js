import styled from 'styled-components';
import Flex from 'src/components/Flex/Flex';
import Navigation from 'src/components/Navigation/Navigation';
import Logo from 'src/components/Logo/Logo';
import Row from 'src/components/Row/Row';
import Container from 'src/components/Container/Container';

const StyledHeader = styled.header`
    margin-top: 43px;
    padding-bottom: 20px;
`;

const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <Row>
                    <Flex justify="space-between">
                        <Logo />
                        <Navigation />
                    </Flex>
                </Row>
            </Container>
        </StyledHeader>


    );
}

export default Header;

