import styled from 'styled-components';

const Container = (props) => {
    return (
        <StyledContainer {...props} />
    );
}

export default Container;

const StyledContainer = styled.div`
    padding-right: 50px;
    padding-left: 50px;
    margin-right: auto;
    margin-left: auto;

    @media (min-width: 768px) {
        width: 750px;
    }

    @media (min-width: 992px) {
        width: 960px;
    }

    @media (min-width: 1200px) {
        width: 1120px;
    }
`;