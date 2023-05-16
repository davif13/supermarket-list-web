import styled from 'styled-components'

export const Loader = styled.span`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: inline-block;
  border-top: 4px solid ${({ theme }) => theme.colors.black};
  border-right: 4px solid transparent;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  ::after {
    content: '';  
    box-sizing: border-box;
    position: absolute;
    left: 0;
    top: 0;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border-left: 4px solid ${({ theme }) => theme.colors.primary};
    border-bottom: 4px solid transparent;
    animation: rotation 0.5s linear infinite reverse;
  }

  @keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
`
