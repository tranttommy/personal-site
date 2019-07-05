import styled, { createGlobalStyle, keyframes } from 'styled-components';
import reset from 'react-style-reset/string';
import corbel from '../../assets/corbel.ttf';
import comfortaa from '../../assets/Comfortaa_Regular.ttf';

export const appear = keyframes`
  to {
    transform: none;
    opacity: 1
  }
`;

const movingGradient = keyframes`
  to {
    background-position: bottom right;
  }
`;

export const shouldAnimate = (timing) => ({ animate }) => animate ? timing : '0s 0s';

export const GlobalStyle = createGlobalStyle`
  ${reset};
  *, *::after, *::before {
    box-sizing: border-box;
  }
  @font-face {
    font-family: Corbel;
    src: url(${corbel});
  }
  @font-face {
    font-family: Comfortaa;
    src: url(${comfortaa});
  }
`;

// Splash Page
export const SplashMain = styled.main`
  position: relative;
  height: 100vh;
  background: linear-gradient(135deg, #283C5A 20%, #878787 45% 55%, #283C5A 80%);
  background-size: 1000%;
  animation: ${movingGradient} ease-in 15s infinite;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  h1 {
    font-family: Corbel;
    font-weight: bold;
    font-size: 3rem;
    letter-spacing: .5rem;
    color: #EBAF5A;
    opacity: 0;
    animation: ${appear} ease ${shouldAnimate('1.5s')} forwards;
    span {
      display: inline-block;

      &::first-letter {
        font-size: 3.5rem;
      }
    }
  }

  nav {
    display: flex;
    justify-content: center;
  }
  ul {
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    li {
      text-align: center;
      color: #FFFFFF;
      opacity: 0;
      padding: .25em 0;
      width: 12rem;
      font-family: Comfortaa;
      font-size: 1.4rem;
      transition: linear .25s;
      
      &:hover {
        background-color: rgba(0, 0, 0, .25);
        box-shadow: 0 0 0 .5em rgba(0, 0, 0, .25);
        font-size: 1.8rem;
        letter-spacing: .05em;
      }
      
      &:nth-child(1) {
        animation: ${appear} ease ${shouldAnimate('2s 3.25s')} forwards;
      }
      
      &:nth-child(2) {
        animation: ${appear} ease ${shouldAnimate('2s 3.50s')} forwards;
      }
      
      &:nth-child(3) {
        animation: ${appear} ease ${shouldAnimate('2s 3.75s')} forwards;
      }
    
      &:nth-child(4) {
        animation: ${appear} ease ${shouldAnimate('2s 4s')} forwards;
      }
    }
  }
`;
export const AboutSpan = styled.span`
  display: inline-block;
  transform: translateY(100px) rotateY(90deg);
  animation: ${appear} linear ${shouldAnimate('.5s 3.25s')} forwards;
`;

export const TechSpan = styled.span`
  display: inline-block;
  transform: translateX(-100px) skew(90deg);
  animation: ${appear} linear ${shouldAnimate('.5s 3.50s')} forwards;
`;

export const StackSpan = styled.span`
  display: inline-block;
  transform: translateX(100px) skew(-90deg);
  animation: ${appear} linear ${shouldAnimate('.5s 3.50s')} forwards;
`;

export const ProjectsSpan = styled.span`
  display: inline-block;
  transform: scale(0);
  animation: ${appear} linear ${shouldAnimate('.5s 3.75s')} forwards;
`;

export const ContactSpan = styled.span`
  display: inline-block;
  transform: skew(90deg) rotateZ(45deg);
  animation: ${appear} linear ${shouldAnimate('.5s 4.00s')} forwards;
`;
