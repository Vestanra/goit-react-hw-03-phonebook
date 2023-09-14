import styled from 'styled-components';
import { ErrorMessage, Form } from 'formik';

export const FormWrapper = styled(Form)`
display:flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
gap: ${p => p.theme.spacing(3)};
padding: ${p => p.theme.spacing(1)};
`;

export const ErrorMsg = styled(ErrorMessage)`
color: ${p => p.theme.colors.error};
`;

export const InputWrapper = styled.label`
display:flex;
flex-direction: column;
min-width: 300px;
gap: ${p => p.theme.spacing(1)};
color: ${p => p.theme.colors.text};
font-size: 18px;
font-weight: 500;
`;

export const Button = styled.button`
width: ${p => p.theme.spacing(20)};
height: ${p => p.theme.spacing(5)};
color: ${p => p.theme.colors.text};
font-weight: 500;
background-color: ${p => p.theme.colors.background};
border: 2px solid ${p => p.theme.colors.border};
&:hover {
    background-color: ${p => p.theme.colors.hover};
}
`;
