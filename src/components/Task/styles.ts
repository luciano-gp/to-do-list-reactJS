import styled from 'styled-components'

interface CheckboxProps {
    checked: boolean;
}

export const TaskContainer = styled.div<CheckboxProps>`
    background-color: ${(props) => props.theme['gray-500']};
    padding: 16px;
    margin-bottom: 12px;
    border-radius: 8px;
    border: 1px solid ${(props) => props.checked ? props.theme['gray-500'] : props.theme['gray-400']};
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    gap: 12px;
    `
export const TaskText = styled.p<CheckboxProps>`
    width: 100%;
    font-size: 14px;
    color: ${(props) => props.checked ? props.theme['gray-300'] : props.theme['gray-100']};
    text-decoration: ${(props) => props.checked ? 'line-through' : null};
`

export const TaskCheckBox = styled.div<CheckboxProps>`
    width: 18px;
    height: 18px;
    border-radius: 50%;
    cursor: pointer;
    border: 2px solid ${(props) => props.checked ? props.theme['brown-dark'] : props.theme['green']};
    background-color: ${(props) => props.checked ? props.theme['brown-dark'] : 'transparent'};
    background-image: url('/src/assets/check.svg');
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: ${(props) => props.checked ? '18px 18px' : '0'};
    -o-background-size: ${(props) => props.checked ? '18px 18px' : '0'};
    -webkit-background-size: ${(props) => props.checked ? '18px 18px' : '0'};
    opacity: ${(props) => props.checked ? 0.9 : 1};

    &:hover {
        background-color: ${(props) => props.checked ? props.theme['brown'] : props.theme['green'] + '20'};
        border-color: ${(props) => props.checked ? props.theme['brown'] : props.theme['green-dark']};
    }
`

export const TaskDeleteButton = styled.span`
    width: 24px;
    height: 24px;
    border-radius: 4px;
    background-image: url('/src/assets/trash.svg');
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 13px 14px;
    -o-background-size: 13px 14px;
    -webkit-background-size: 13px 14px;
    cursor: pointer;
    
    &:hover {
        background-image: url('/src/assets/trash--hover.svg');
        background-color: ${(props) => props.theme['gray-400']};
    }
`