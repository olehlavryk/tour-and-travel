import { slide as Menu } from "react-burger-menu";
import { mainMenuList } from 'src/config/config';
import "./BurgerMenu.css";

const BurgerMenu = () => {
    return (
        <Menu right>
            {mainMenuList.map((item) => (
                <a href="/#" key="item">{item}</a>
            ))}
            <a href="/#" key="Login">Login</a>
            <a href="/#" key="Register">Register</a>
        </Menu>
    )
}

export default BurgerMenu;