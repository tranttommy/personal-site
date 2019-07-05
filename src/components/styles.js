import styled, { createGlobalStyle, keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import reset from 'react-style-reset/string';
import corbel from '../../assets/corbel.ttf';
import comfortaa from '../../assets/Comfortaa_Regular.ttf';
import { themeBlue, themeGray, themeWhite, transparentBlack, themeOrange } from './styles-theme-colors';

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
  background: linear-gradient(135deg, ${themeBlue} 20%, ${themeGray} 45% 55%, ${themeBlue} 80%);
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
    color: ${themeOrange};
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
      opacity: 0;

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

export const SplashLink = styled(Link)`
  text-decoration: none;
  display: block;
  color: ${themeWhite};
  width: 12rem;
  text-align: center;
  padding: .25em 0;
  font-family: Comfortaa;
  font-size: 1.4rem;
  transition: linear .25s;
  
  &:hover {
    background-color: ${transparentBlack};
    box-shadow: 0 0 2px .5em ${transparentBlack};
    font-size: 1.8rem;
    letter-spacing: .05em;
  }
`;
