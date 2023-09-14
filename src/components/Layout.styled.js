import styled from 'styled-components';

export const Layout = styled.div`
display: flex;
flex-direction: column;
align-items: center;
max-width: 500px;
margin: ${p => p.theme.spacing(4)};
padding: ${p => p.theme.spacing(3)} ${p => p.theme.spacing(2)};;
gap: ${p => p.theme.spacing(3)};
border: 2px solid ${p => p.theme.colors.border};
background-color: ${p => p.theme.colors.backgroundOpacity};
`;
