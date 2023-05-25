import styled from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 350px;
  height: 48px;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  margin-bottom: 16px;

  @media (max-width: 480px) {
    max-width: 300px;
  }
`

export const InputLabel = styled.label`
  margin: 0px;
  font-size: 12px;
  padding-top: 6px;
  padding-left: 6px;
  padding-bottom: 4px;
`

export const InputText = styled.input`
  border: 0px transparent;
  padding-top: 4px;
  margin-left: 6px;
  font-size: 16px;
  font-family: 'Avenir Next';

  &:focus {
    outline: none;
  }

  @media (max-width: 480px) {
    padding-top: 0px;
    margin-top: -2px;
    font-size: 14px;
  }
`
