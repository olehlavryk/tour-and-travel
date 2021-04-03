import styled from 'styled-components';

const Paragraph = (props) => {
    return (
        <StyledParagraph {...props} />
    )
}

export default Paragraph;

const StyledParagraph = styled.p`
    font-family:  ${props => props.theme.fonts.secondary || 'sans- serif'};
    font-style: normal;
    font-weight: 300;
    font-size: 17px;
    line-height: 1.6;
    color: ${props => props.theme.colors.secondary || '#000'};
    padding: 0;
    margin: 0;
`;