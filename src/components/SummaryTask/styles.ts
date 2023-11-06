import styled from 'styled-components'

interface TextStyle {
    $variant: 'green' | 'brown'
}

interface ContainerStyle {
    $variant?: 'inner' | 'outer'
}

export const ContainerSummary = styled.div<ContainerStyle>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: ${(props) => props.$variant === 'outer' ? 0 : 64}px;
    margin-bottom: ${(props) => props.$variant === 'outer' ? 0 : 24}px;
    gap: 8px;
`

export const SummaryText = styled.p<TextStyle>`
    font-size: 14px;
    font-weight: 700;
    color: ${(props) => props.$variant === 'green'? props.theme['green'] : props.theme['brown']};
`

export const SummaryCount = styled.p`
    font-size: 12px;
    font-weight: 700;
    padding: 2px 8px;
    line-height: normal;
    border-radius: 9.5px;
    color: ${(props) => props.theme['gray-200']};
    background-color: ${(props) => props.theme['gray-400']};
`