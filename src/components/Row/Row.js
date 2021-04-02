import styled from 'styled-components';

const Row = (props) => {
    return (
        <StyledRow {...props} />
    );
}

export default Row;

const StyledRow = styled.div`
    margin-left: -50px;
    margin-right: -50px;
`;