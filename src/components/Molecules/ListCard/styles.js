import styled from 'styled-components'

export const ListCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 58vw;
  min-height: 58px;
  height: 58px;
  padding: 0px 12px;
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 24px;
  margin-bottom: 22px;

  @media (max-width: 420px) {
    width: 68vw;
  }
`

export const CheckImage = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  object-fit: contain;
  cursor: pointer;
  margin-right: 12px;
`

export const CardTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`

export const ArrowIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 20%;
  cursor: pointer;
`

export const ArrowImage = styled.img`
  width: 6px;
  height: 12px;
  object-fit: contain;
`
