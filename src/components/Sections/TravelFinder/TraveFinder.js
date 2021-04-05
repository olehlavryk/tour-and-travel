import styled from 'styled-components';
import Flex from 'src/components/Flex/Flex';
import Row from 'src/components/Row/Row';
import Container from 'src/components/Container/Container';
import Button from 'src/components/Button/Button';
import Select from 'react-select'
import { Locations, Activity, Grade, Participants } from 'src/config/config';
import travel_finder from "./images/travel_finder.png";
import { device } from 'src/config/devices';


const customStyles = {
    container: provided => ({
        ...provided,
        //width: '46%',
        marginBottom: '35px',
    }),
    control: provided => ({
        ...provided,
        height: '52px',
        border: '0.8px solid #AFB0B9',
        borderRadius: '6px',
        fontFamily: 'Inter',
        fontSize: '15px',
        lineHeight: 1.2,
    }),
    option: provided => ({
        ...provided,
        fontFamily: 'Inter',
        fontSize: '15px',
        lineHeight: 1.2,
    }),
    valueContainer: provided => ({
        ...provided,
        color: '#4A4C53',
        paddingLeft: '21px',
    }),

    indicatorsContainer: provided => ({
        ...provided,
        paddingRight: '21px',
    }),
};


const StyledTravelFinder = styled.section`
    margin-top: 72px;
    margin-bottom: 200px;

    @media ${device.tabletL} {
        margin-bottom: 282px;
    }
`;

const StyledTravelFinderLeft = styled.div`
    @media ${device.mobileS} {
        width: 100%;
    }

    @media ${device.tablet} {
        width: 50%;
    }

    @media ${device.laptopM} {
        width: 50%;
    }
`;

const FinderHeading = styled.h2`
    max-width: 450px;
    font-family: ${props => props.theme.fonts.primary};
    font-weight: bold;
    font-size: 64px;
    line-height: 1.3;
    color: #202336;
    margin-bottom: 75px;
`;

const FinderBox = styled.div`
    max-width: 470px;
`;

const FinderBoxHeading = styled.h3`
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 1.3;
    color: #202336;
    position: relative;
    padding-bottom: 15px;

    &:before {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 32px;
        height: 2px;
        background: #202336;
    }
`;

const FinderSelectsBox = styled.div`
    margin: 48px 0 13px 0;
`;

const StyledTravelFinderRight = styled.div`
    @media ${device.mobileS} {
        width: 100%;
    }

    @media ${device.tablet} {
        width: 40%;
    }

    @media ${device.laptopM} {
        width: 50%;
    }
`;

const StyledPreview = styled.img`
    width: 100%;
    height: auto;
    position: relative;
    margin-top: 50px;

    @media ${device.laptopL} {
        width: calc(100% + 70px);
        margin-right: -70px;
    }
`;

const FinderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    @media ${device.mobileS} {
        flex-direction: column;
        justify-content: center;
    }

    @media ${device.tablet} {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`;

const SelectsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    @media ${device.mobileS} {
        flex-direction: column;
        justify-content: center;
    }

    @media ${device.mobileL} {
        flex-direction: row;
        justify-content: space-between;
    }

    & > div {

        @media ${device.mobileS} {
            width: 100%;
        }

        @media ${device.mobileL} {
            width: 46%;
        }
    }
`;

const TravelFinder = () => {
    return (
        <StyledTravelFinder>
            <Container>
                <Row>
                    <FinderWrapper>
                        <StyledTravelFinderLeft>
                            <FinderHeading>
                                Explore and Travel
                            </FinderHeading>
                            <FinderBox>
                                <FinderBoxHeading>
                                    Holiday finder
                                </FinderBoxHeading>
                                <FinderSelectsBox>
                                    <SelectsWrapper>
                                        <Select components={{
                                            IndicatorSeparator: () => null
                                        }} defaultValue={{ value: '', label: 'Location' }} options={Locations} styles={customStyles} />
                                        <Select
                                            components={{
                                                IndicatorSeparator: () => null
                                            }} defaultValue={{ value: '', label: 'Activity' }} options={Activity} styles={customStyles} />
                                    </SelectsWrapper>

                                    <SelectsWrapper>
                                        <Select components={{
                                            IndicatorSeparator: () => null
                                        }} defaultValue={{ value: '', label: 'Grade' }} options={Grade} styles={customStyles} />
                                        <Select components={{
                                            IndicatorSeparator: () => null
                                        }} defaultValue={{ value: '', label: 'Participants' }} options={Participants} styles={customStyles} />
                                    </SelectsWrapper>

                                </FinderSelectsBox>
                                <Button primary>
                                    Explore
                                </Button>
                            </FinderBox>
                        </StyledTravelFinderLeft>

                        <StyledTravelFinderRight>
                            <StyledPreview src={travel_finder} alt="Find your trip" />
                        </StyledTravelFinderRight>
                    </FinderWrapper>

                </Row>
            </Container>
        </StyledTravelFinder>
    );
}

export default TravelFinder;
