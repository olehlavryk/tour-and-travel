import styled from 'styled-components';
import { Icon } from "src/components/Icons/Icon";
import Flex from 'src/components/Flex/Flex';
import Row from 'src/components/Row/Row';
import Container from 'src/components/Container/Container';
import { footerSocialList, footerListLeft, footerListMiddle, footerListRight } from 'src/config/config';
import Logo from 'src/components/Logo/Logo';

const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <Row>
                    <StyledFooterTop>
                        <Flex justify="space-between">
                            <StyledFooterTopLeft>
                                <Logo />
                                <p>
                                    Plan and book your perfect trip with
                                    expert advice, travel tips destination
                                    information from us
                                </p>
                                <p>
                                    &copy;2020 Thousand Sunny. All rights reserved
                                </p>
                            </StyledFooterTopLeft>

                            <StyledFooterTopRight>
                                <Flex justify="space-between">
                                    <div>
                                        <ListTitle>
                                            Destinations
                                        </ListTitle>
                                        <FooterList>
                                            {footerListLeft.map(item => (
                                                <li key={item.id}>
                                                    <a href={item.url}>
                                                        {item.name}
                                                    </a>
                                                </li>
                                            ))}
                                        </FooterList>
                                    </div>
                                    <div>
                                        <ListTitle>
                                            Shop
                                        </ListTitle>
                                        <FooterList>
                                            {footerListMiddle.map(item => (
                                                <li key={item.id}>
                                                    <a href={item.url}>
                                                        {item.name}
                                                    </a>
                                                </li>
                                            ))}
                                        </FooterList>
                                    </div>
                                    <div>
                                        <ListTitle>
                                            Interests
                                        </ListTitle>
                                        <FooterList>
                                            {footerListRight.map(item => (
                                                <li key={item.id}>
                                                    <a href={item.url}>
                                                        {item.name}
                                                    </a>
                                                </li>
                                            ))}
                                        </FooterList>
                                    </div>
                                </Flex>
                            </StyledFooterTopRight>
                        </Flex>
                    </StyledFooterTop>

                    <StyledFooterBottom>
                        <Flex justify="center">
                            <StyledSocialList>
                                {footerSocialList.map(item => (
                                    <li key={item.id}>
                                        <a href={item.url}>
                                            <Icon name={item.name} />
                                        </a>
                                    </li>
                                ))}
                            </StyledSocialList>
                        </Flex>
                    </StyledFooterBottom>
                </Row>
            </Container>
        </StyledFooter>
    );
}

export default Footer;

const StyledFooter = styled.footer`

`;

const StyledSocialList = styled.ul`

    li {
        display: inline-block;
        margin: 0 17px;
    }
`;

const StyledFooterTop = styled.div`
    margin-bottom: 80px;
`;

const StyledFooterTopLeft = styled.div`
    max-width: 28%;
    width: 100%;

    p {
        font-family: Mulish;
        font-weight: 300;
        font-size: 18px;
        line-height: 1.6;
        color: #848484;


    }

    & p:nth-of-type(1) {
        margin-top: 26px;
        margin-bottom: 55px;
    }
`;

const StyledFooterTopRight = styled.div`
    max-width: 60%;
    width: 100%;
    padding-top: 15px
`;


const ListTitle = styled.h6`
    font-family: Mulish;
    font-size: 19px;
    line-height: 1.3;
    font-weight: 700;
    color: ${props => props.theme.colors.primary};
    margin-bottom: 30px
`;

const FooterList = styled.ul`

    li {

        a {
            display: inline-block;
            font-family: Mulish;
            font-size: 18px;
            font-weight: 300;
            color: #848484;
            margin-bottom: 20px;

            &:hover {
                color: ${props => props.theme.colors.primary};
            }
        }

        &:last-child {
            a {
                margin-bottom: 0px;
            }
        }
    }
`;

const StyledFooterBottom = styled.div`
    padding-top: 32px;
    padding-bottom: 32px;
    border-top: 1px solid #C4C4C4;
`;

