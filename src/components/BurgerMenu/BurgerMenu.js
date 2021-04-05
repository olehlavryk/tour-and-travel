import styled from 'styled-components';
import { slide as Menu } from "react-burger-menu";
import { mainMenuList } from 'src/config/config';
import "./BurgerMenu.css";

const StyledBurgerMenu = styled.div``;

const BurgerMenu = () => {
    return (
        <Menu right>
            {mainMenuList.map((item) => (
                <a href="/#">{item}</a>
            ))}
            <a href="/#">Login</a>
            <a href="/#">Register</a>
        </Menu>
    )
}

export default BurgerMenu;