import styled from 'styled-components'

export const EmptyTasksContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 64px 24px;
    color: ${(props) => props.theme['gray-300']};
    font-size: 16px;
    border-top: 1px solid ${(props) => props.theme['gray-400']};
    text-align: center;

    img {
        margin-bottom: 16px;
    }
`