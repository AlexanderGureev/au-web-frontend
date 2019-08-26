import React from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'
import Animate from 'rc-animate'

const ErrorFadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`
const ErrorFadeOut = keyframes`
0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`

export const StyledTextError = styled.div`
  font-size: 14px;
  color: #d61919;
  margin-top: 5px;
  &.fade-enter {
    opacity: 0;
    animation-duration: 0.3s;
    animation-fill-mode: both;
    animation-timing-function: cubic-bezier(0.55, 0, 0.55, 0.2);
    animation-play-state: paused;
  }

  &.fade-leave {
    animation-duration: 0.3s;
    animation-fill-mode: both;
    animation-timing-function: cubic-bezier(0.55, 0, 0.55, 0.2);
    animation-play-state: paused;
  }

  &.fade-enter.fade-enter-active {
    animation-name: ${ErrorFadeIn};
    animation-play-state: running;
  }

  &.fade-leave.fade-leave-active {
    animation-name: ${ErrorFadeOut};
    animation-play-state: running;
  }
`

const TextError = ({ children }) => (
  <Animate transitionName='fade'>
    {children && <StyledTextError>{children}</StyledTextError>}
  </Animate>
)

export default TextError
