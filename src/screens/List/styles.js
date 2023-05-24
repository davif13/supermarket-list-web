import styled from 'styled-components'

export const ListScreenContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  justify-content: center;
`

export const ListScreenContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 60vw;
  height: 85vh;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 24px;
  padding: 24px;
  overflow: hidden;

  @media (max-width: 420px) {
    width: 96vw;
  }
`

export const ListScreenHeaderContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const ListScreenTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const ListScreenHeaderButtonContainer = styled.div`
  width: 160px;

  @media (max-width: 420px) {
    width: 42px;
  }
`

export const LogoImage = styled.img`
  width: 72px;
  height: 72px;

  @media (max-width: 420px) {
    width: 34px;
    height: auto;
  }
`

export const ListScreenListContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`
