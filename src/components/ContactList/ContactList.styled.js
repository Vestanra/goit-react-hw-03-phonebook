import styled from 'styled-components';

export const ContactItem = styled.li`
display:flex;
justify-content: space-between;
align-items: center;
text-align: center;
gap: ${p => p.theme.spacing(4)};
padding: 4px;
min-width: 300px;
color: ${p => p.theme.colors.text};
border: 2px solid ${p => p.theme.colors.text};
border-bottom: none;
&:last-child {
    border-bottom: 2px solid ${p => p.theme.colors.text};
    }
`;

export const Button = styled.button`
width: ${p => p.theme.spacing(11)};
height: ${p => p.theme.spacing(4)};
color: ${p => p.theme.colors.text};
font-weight: 500;
background-color: ${p => p.theme.colors.background};
border: 2px solid ${p => p.theme.colors.border};
&:hover {
    background-color: ${p => p.theme.colors.hover};
}
`;

export const Text = styled.p`
color: ${p => p.theme.colors.text};
font-size: 18px;
`;

