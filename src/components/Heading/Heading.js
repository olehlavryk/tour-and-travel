import styled from 'styled-components';

const Heading = ({ level = '3', children }) => {
    const tag = `h${level}`;
    return (
        <StyledHeading as={tag}>
            {children}
        </StyledHeading>
    );
}

export default Heading;

const StyledHeading = styled.h3`
    font-family: ${props => props.theme.fonts.primary || 'serif'};
    font-weight: bold;
    font-size: 36px;
    line-height: 1.3;
    color: ${props => props.theme.colors.primary || '#000'};
    margin-bottom: 0;
`;