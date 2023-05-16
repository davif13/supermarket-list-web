import styled from 'styled-components'

export const ScreenContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  justify-content: center;

  @media (max-width: 830px) {
    overflow-y: hidden;
    overflow-x: hidden;
  }
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 420px;
  height: 90vh;
  background-color: #FFFFFF;
  border-radius: 24px;

  @media (max-width: 420px) {
    max-width: 370px;
  }

  @media (min-width: 421px) and (max-width: 830px) {
    width: 500px;
    max-width: 500px;
    height: 60vh;
  }
`

export const BagImage = styled.img.attrs({
  src: '/images/shopping-bag.svg',
  alt: 'Shopping-bag'
})`
  width: 120px;
  height: 120px;
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 350px;
  margin-top: 16px;
`
