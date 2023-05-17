import styled from 'styled-components'

export const ModalBackgroundContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.darkTransparent};
`

export const ModalContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 27vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};
  align-items: center;
  padding-top: 16px;
  padding-left: 24px;
  padding-right: 24px;

  @media (max-width: 420px) {
    width: 100vw;
  }

  @media (min-width: 421px) and (max-width: 830px) {
    width: 42vw;
  }
`

export const ModalHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`

export const ModalCloseButton = styled.button`
  width: 24px;
  height: 24px;
  background-image: url('../../../public/images/close.svg');
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-color: transparent;
  border: 0px;
  cursor: pointer;
`

export const ModalButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 15vh;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-top: 49vh;

  @media (min-width: 421px) and (max-width: 830px) {
    height: 10vh;
  }
`
