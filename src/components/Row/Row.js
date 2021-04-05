import styled from 'styled-components';
import { device } from 'src/config/devices';

const Row = (props) => {
    return (
        <StyledRow {...props} />
    );
}

export default Row;

const StyledRow = styled.div`
    /* margin-left: -30px;
    margin-right: -30px; */

    @media ${device.laptopM} {
        margin-left: -50px;
        margin-right: -50px;
    }
`;