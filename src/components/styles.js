import styled, { createGlobalStyle, keyframes } from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import reset from 'react-style-reset/string';
import corbel from '../../assets/corbel.ttf';
import comfortaa from '../../assets/Comfortaa_Regular.ttf';
import { themeBlue, themeGray, themeWhite, transparentBlack, themeOrange, themeBlack } from './styles-theme-colors';

export const fadeIn = keyframes`
  to {
    opacity: 1
  }
`;

export const untransform = keyframes`
  to {
    transform: none;
  }
`;

const movingGradient = keyframes`
  to {
    background-position: bottom right;
  }
`;

export const shouldAnimate = (timing) => props => props.animate ? timing : '0s 0s';

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

export const Main = styled.main`
  height: 100vh;
  background: linear-gradient(135deg, ${themeBlue} 20%, ${themeGray} 45% 55%, ${themeBlue} 80%);
  background-size: 1000%;
  animation: ${movingGradient} ease-in 15s infinite;
  overflow: hidden;
`;

// Splash Page
export const SplashSection = styled.section`
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  h1 {
    font-family: Corbel;
    font-weight: bold;
    font-size: 3rem;
    letter-spacing: .5rem;
    color: ${themeOrange};

    opacity: 0;
    animation: ${fadeIn} ease-in ${shouldAnimate('2s')} forwards;
    
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
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    
    li {
      opacity: 0;
      transform-origin: top;
      transform: translateY(50px) scale(1.5);

      &:nth-child(1) {
        animation: 
          ${fadeIn} ease-in ${shouldAnimate('.5s 2s')} forwards,
          ${untransform} ease-in ${shouldAnimate('.5s 2s')} forwards
        ;
      }
      
      &:nth-child(2) {
        animation: 
          ${fadeIn} ease-in ${shouldAnimate('.5s 2.25s')} forwards,
          ${untransform} ease-in ${shouldAnimate('.5s 2.25s')} forwards
        ;
      }
      
      &:nth-child(3) {
        animation: 
          ${fadeIn} ease-in ${shouldAnimate('.5s 2.5s')} forwards,
          ${untransform} ease-in ${shouldAnimate('.5s 2.5s')} forwards
        ;
      }
    }
  }
`;

export const SplashLink = styled(Link)`
  text-decoration: none;
  display: block;
  color: ${themeWhite};
  width: 15rem;
  padding: .25em 0;
  text-align: center;
  font-family: Comfortaa;
  font-size: 1.4rem;
  border-radius: .25em;
  transition: linear .25s;
  
  &:hover {
    background-color: ${transparentBlack};
    box-shadow: 0 0 2px .25em ${transparentBlack};
    font-size: 1.8rem;
  }

  &:active {
    background-color: ${themeBlack};
    box-shadow: 0 0 1px .25em ${themeBlack};
  }
`;

// NavBar
export const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 40px;
  background-color: ${transparentBlack};
  color: ${themeWhite};

  ul {
    height: inherit;
    width: inherit;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    
    li {
      flex-grow: 1;
      flex-basis: 200px;
      height: inherit;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: .25s ease-in;

      &:hover {
        background-color: ${themeBlack};
        font-size: 1.2rem;
      }
    }
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-family: Comfortaa;
  color: ${themeWhite};
`;
