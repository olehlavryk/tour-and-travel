import styled from 'styled-components';
import { mainMenuList } from 'src/config/config';
const Menu = () => {
    return (
        <StyledMenu>
            {mainMenuList.map((item, index) => (
                <li key={item}>
                    <a href="/#" class={index === 0 ? 'active' : ''}>{item}</a>
                </li>
            ))}
        </StyledMenu>
    );
}

export default Menu;

const StyledMenu = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;

    li {
        display:inline;
        margin-right: 35px;

        a {
            font-family: Inter;
            color: ${props => props.theme.colors.lightGrey};
            text-decoration: none;
            font-size: 16px;
            line-height: 1.2;

            &:hover {
                color: ${props => props.theme.colors.primary};
            }

            &.active {
                color: ${props => props.theme.colors.primary};
            }
        }
    }
`;