import styled from 'styled-components';
import { device } from 'src/config/devices';

const Container = (props) => {
    return (
        <StyledContainer {...props} />
    );
}

export default Container;

const StyledContainer = styled.div`
    width: calc(100% - 60px);
    padding-right: 30px;
    padding-left: 30px;
    margin-right: auto;
    margin-left: auto;

    @media ${device.tablet} {
        width: 738px;
    }

    @media ${device.tabletL} {
        width: 960px;
    }

    @media ${device.laptopM} {
        width: 1000px;
        padding-right: 50px;
        padding-left: 50px;
    }
`;