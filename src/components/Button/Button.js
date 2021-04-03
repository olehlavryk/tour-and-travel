import styled from 'styled-components';

const OutlinedButton = styled.button.attrs(props => ({ outlined: true }))`
    border:none;
    background-color: transparent;
    font-family: ${props => props.theme.fonts.tertiary || 'sans- serif'};
    border: 1px solid ${props => props.theme.colors.accent || '#000'};
    color: ${props => props.theme.colors.accent || '#000'};
    border-radius: 8px;
    font-size: 16px;
    line-height: 1.3;
    padding: 10px 46px;
    cursor: pointer;
    transition: ${props => props.theme.transition.default || 'all 300ms ease-in'} ;

    &:hover {
        border: 1px solid ${props => props.theme.colors.accentSecondary || '#000'};
        color: ${props => props.theme.colors.accentSecondary || '#000'};
    }
`;

const StyledPrimaryButton = styled(OutlinedButton)`
    background-color: ${props => props.theme.colors.accent || '#000'};
    color: white;
    transition: ${props => props.theme.transition.default || 'all 300ms ease-in'} ;

    &:hover {
        background-color: transparent;
        color: ${props => props.theme.colors.accent || '#000'};
        border: 1px solid ${props => props.theme.colors.accent || '#000'};
    }
`;

const Button = (props) => {

    if (props.primary) {
        return (
            <StyledPrimaryButton {...props} />
        )
    }

    return (
        <OutlinedButton {...props} />
    );

}

export default Button;