import styled from 'styled-components'

export const Title = styled.h1`
  font-weight: bold;
  text-align: ${({ align }) => align || 'center'};
  font-size: ${({ fontsize }) => fontsize || 1.3}rem;
  color: #000000;
  line-height: ${({ lineheight }) => lineheight || 22}px;
  max-width: ${({ mw }) => mw || 300}px;
  margin-left: ${({ ml }) => ml || 0}px;

  @media (max-width: 420px) {
    font-size: ${({ fontsizemob }) => fontsizemob || 1.2}rem;;
  }

  @media (min-width: 421px) and (max-width: 830px) {
    max-width: 350px;
  }
`

export const SubTitle = styled.h3`
  font-size: ${({ fontsize }) => fontsize || 1}rem;
  text-align: ${({ align }) => align || 'center'};
  font-weight: 500;
  margin: 0px;
  padding: 0px;
  margin-bottom: ${({ mb }) => mb || 40}px;
  max-width: ${({ mw }) => mw || 300}px;

  @media (min-width: 421px) and (max-width: 830px) {
    max-width: 350px;
  }
`

export const SmallText = styled.span`
  font-size: ${({ fontsize }) => fontsize || 1}rem;
  text-align: ${({ align }) => align || 'center'};
  font-weight: ${({ fontweight }) => fontweight || 500};
  margin-bottom: ${({ mb }) => mb || 0}px;
`
