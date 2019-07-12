import { keyframes, css } from 'styled-components';

export const movingGradient = keyframes`
  to {
    background-position: bottom right;
  }
`;

export const appear = keyframes`
  to {
    opacity: 1;
    transform: none;
  }
`;

export const shouldAnimate = (keyframe, timing) => (props = { animate: true }) => css`
  animation: ${keyframe} ease-in ${props.animate ? timing : '0s 0s'} forwards;
`;
