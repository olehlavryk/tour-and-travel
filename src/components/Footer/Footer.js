import styled from 'styled-components';
import { Icon } from "src/components/Icons/Icon";
import Flex from 'src/components/Flex/Flex';
import Row from 'src/components/Row/Row';
import Container from 'src/components/Container/Container';
import { footerSocialList, footerListLeft, footerListMiddle, footerListRight } from 'src/config/config';
import Logo from 'src/components/Logo/Logo';
import { device } from 'src/config/devices';

const StyledFooter = styled.footer`

`;

const StyledSocialList = styled.ul`

    @media ${device.mobileS} {
        text-align: center;
    }

    li {
        display: inline-block;
        margin: 0 17px;

        @media ${device.mobileS} {
            margin-bottom: 15px;
        }
    }
`;

const StyledFooterTop = styled.div`
    margin-bottom: 40px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    @media ${device.tabletL} {
        margin-bottom: 80px;

    }
`;

const StyledFooterTopLeft = styled.div`
    width: 100%;

    @media ${device.mobileS} {
        max-width: 100%;
    }

    @media ${device.tablet} {
        max-width: 28%;
    }

    p {
        font-family: ${props => props.theme.fonts.tertiary || 'sans-serif'};
        font-weight: 300;
        font-size: 18px;
        line-height: 1.6;
        color: #848484;

        @media ${device.mobileS} {
            text-align:center;
        }

        @media ${device.tablet} {
            text-align: left;
        }
    }

    & p:nth-of-type(1) {
        margin-top: 26px;
        margin-bottom: 55px;
    }
`;

const StyledFooterTopRight = styled.div`

    width: 100%;
    padding-top: 15px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    @media ${device.mobileS} {
        max-width: 100%;
        justify-content: center;
    }

    @media ${device.tablet} {
        max-width: 60%;
        justify-content: space-between;
        padding-top: 0;
    }
`;

const ListTitle = styled.h6`
    font-family: ${props => props.theme.fonts.tertiary || 'sans-serif'};
    font-size: 19px;
    line-height: 1.3;
    font-weight: 700;
    color: ${props => props.theme.colors.primary};
    margin-bottom: 30px;

    @media ${device.mobileS} {
        width: 100%;
        text-align: center;
    }

    @media ${device.tablet} {
        width: 100%;
        text-align: left;
    }
`;

const FooterList = styled.ul`

    @media ${device.mobileS} {
        margin-bottom: 50px;
    }

    @media ${device.tabletL} {
        margin-bottom: 0;
    }

    li {

        @media ${device.mobileS} {
            text-align: center;
        }

        @media ${device.tablet} {
            text-align: left;
        }

        a {
            display: inline-block;
            font-family: ${props => props.theme.fonts.tertiary || 'sans-serif'};
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
    display: flex;
    justify-content: center;
`;

const StyledBox = styled.div`


    @media ${device.mobileS} {
        width: 100%;
    }

    @media ${device.tablet} {
        width: 50%;
    }

    @media ${device.tabletL} {
        width: auto;
    }
`;

const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <Row>
                    <StyledFooterTop>
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
                            <StyledBox>
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
                            </StyledBox>
                            <StyledBox>
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
                            </StyledBox>
                            <StyledBox>
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
                            </StyledBox>
                        </StyledFooterTopRight>
                    </StyledFooterTop>

                    <StyledFooterBottom>
                        <StyledSocialList>
                            {footerSocialList.map(item => (
                                <li key={item.id}>
                                    <a href={item.url}>
                                        <Icon name={item.name} />
                                    </a>
                                </li>
                            ))}
                        </StyledSocialList>
                    </StyledFooterBottom>
                </Row>
            </Container>
        </StyledFooter>
    );
}

export default Footer;



