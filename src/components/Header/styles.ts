import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 200px;
  display: flex;
  gap: 12px;
  margin: 0 -16px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme['gray-700']};
`

export const HeaderTitle = styled.p`
  font-size: 40px;
  font-weight: 900;
  
  &::before {
      content: 'to';
      color: ${(props) => props.theme['green']};
  }

  &::after {
    content: 'do';
    color: ${(props) => props.theme['brown-dark']};
  }
`