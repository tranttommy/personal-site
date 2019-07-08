import styled, { createGlobalStyle } from 'styled-components';
import { NavLink } from 'react-router-dom';
import reset from 'react-style-reset/string';
import corbel from '../../assets/corbel.ttf';
import comfortaa from '../../assets/Comfortaa_Regular.ttf';
import { themeBlue, themeGray, themeWhite, transparentBlack, themeOrange, themeBlack, transparentWhite } from './styles-theme-colors';
import { movingGradient, appear, shouldAnimate } from './style-helpers';


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
  display: flex;
  flex-direction: column;
  align-items: center;
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
    ${shouldAnimate(appear, '2s')}

    span {
      display: inline-block;

        &::first-letter {
        font-size: 3.5rem;
      }
    }
  }

  nav {
    ul {
      height: 150px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      li {
        opacity: 0;
        transform-origin: bottom;
        transform: translateY(50px) scale(1.2);

        &:nth-child(1) {
          ${shouldAnimate(appear, '.5s 2s')};
        }
          
        &:nth-child(2) {
          ${shouldAnimate(appear, '.5s 2.25s')};
        }
          
        &:nth-child(3) {
          ${shouldAnimate(appear, '.5s 2.5s')};
        }
      }
    }
  }
`;

// NavBar
export const Nav = styled.nav`
  ul {
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;

    li {
      opacity: 0;
      transform-origin: top;
      transform: translateY(-50px) scale(1.2);

      &:nth-child(1) {
        ${shouldAnimate(appear, '.5s')};
      }
        
      &:nth-child(2) {
        ${shouldAnimate(appear, '.5s .1s')};
      }
        
      &:nth-child(3) {
        ${shouldAnimate(appear, '.5s .2s')};
      }

      &:nth-child(4) {
        ${shouldAnimate(appear, '.5s .3s')};
      }
    }
  }
`;

// Links
const activeClassName = 'active';
export const StyledNavLink = styled(NavLink).attrs({
  activeClassName,
  exact: true
})`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 12rem;
  width: 20vw;
  max-width: 15rem;
  padding: .25em 0;
  margin: .25em;
  color: ${themeWhite};
  font-family: Comfortaa;
  font-size: 1.4rem;
  border-radius: .25em;
  transition: ease-in .25s;

  &:hover {
    background-color: ${transparentBlack};
    box-shadow: 0 0 2px .25em ${transparentBlack};
    font-size: 1.8rem;
  }

  &.${activeClassName} {
    color: ${themeOrange};
    font-size: 1.8rem;
    pointer-events: none;
  }
`;

// About
export const AboutSection = styled.section`
  min-width: 60vw;
  max-width: 25em;
  margin: 5%;
  padding: 3%;
  background-color: ${transparentWhite};
  border-radius: .25em;
  box-shadow: 0 0 2px .25em ${transparentWhite};
  opacity: 0;
  transform: scale(${1 / 1.2});
  ${shouldAnimate(appear, '.5s .5s')};
  
  p {
    color: black; 
    font-family: Corbel;
    text-align: justify;
    font-size: 1.2rem;
    opacity: 0;
    transform: scale(1.2);
    ${shouldAnimate(appear, '.5s .5s')}
  }
`;
