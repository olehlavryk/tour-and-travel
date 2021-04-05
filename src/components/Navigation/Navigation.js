import styled from 'styled-components';
import Button from 'src/components/Button/Button';
import Menu from 'src/components/Menu/Menu';

const Navigation = () => {
    return (
        <StyledNavigation>
            <Menu />
            <Button>Login</Button>
            <Button primary>Register</Button>
        </StyledNavigation>
    );
}

export default Navigation;

const StyledNavigation = styled.nav`
    display: flex;
    align-items: center;
    display: none;

    @media all and (min-width: 1200px) {
        display: flex;
    }

    & button:nth-of-type(1){
        display: inline-block;
        margin-right: 18px;
    }

`;

