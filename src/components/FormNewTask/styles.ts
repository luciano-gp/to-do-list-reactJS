import styled from 'styled-components'

interface FormButtonProps {
    $active: boolean
}

export const FormContainer = styled.form`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    margin-top: -27px;
`

export const FormInput = styled.input`
    width: 100%;
    height: 54px;
    padding: 16px;
    font-size: 16px;
    font-weight: 400;
    border: 1px solid ${(props) => props.theme['gray-700']};
    border-radius: 8px;
    background-color: ${(props) => props.theme['gray-500']};
    color: ${(props) => props.theme['gray-100']};
    
    &:focus {
        outline: none;
        border: 1px solid ${(props) => props.theme['brown-dark']};
    }

    &::placeholder{
        color: ${(props) => props.theme['gray-300']};
    }
`

export const FormButton = styled.button<FormButtonProps>`
    padding: 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    color: ${(props) => props.theme['gray-100']};
    font-weight: 700;
    font-size: 14px;
    border: none;
    border-radius: 8px;
    background-color: ${(props) => props.$active ? props.theme['green-dark'] : props.theme['gray-300']};
    cursor: pointer;

    &:hover {
        background-color: ${(props) => props.$active ? props.theme['green'] : null};
    }
`