import styled from 'styled-components';

export const Wrapper = styled.label`
display: flex;
flex-direction: column;
min-width: 300px;
gap: ${p => p.theme.spacing(1)};
color: ${p => p.theme.colors.text};
font-size: 18px;
font-weight: 500;
`;