import styled from 'styled-components';
import Flex from 'src/components/Flex/Flex'
import Navigation from 'src/components/Navigation/Navigation'
import Logo from 'src/components/Logo/Logo'

const StyledHeader = styled.header`
    margin-top: 43px;
    padding-bottom: 20px;
`;

const Header = () => {
    return (
        <StyledHeader>
            <div className="container">
                <div className="row">
                    <Flex justify="space-between">
                        <Logo />
                        <Navigation />
                    </Flex>
                </div>
            </div>
        </StyledHeader>


    );
}

export default Header;

