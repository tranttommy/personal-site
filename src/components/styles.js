import styled, { createGlobalStyle, keyframes, css } from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import reset from 'react-style-reset/string';
import corbel from '../../assets/corbel.ttf';
import comfortaa from '../../assets/Comfortaa_Regular.ttf';
import { themeBlue, themeGray, themeWhite, transparentBlack, themeOrange, themeBlack } from './styles-theme-colors';

export const appear = keyframes`
  to {
    opacity: 1;
    transform: none;
  }
`;

const movingGradient = keyframes`
  to {
    background-position: bottom right;
  }
`;

export const shouldAnimate = (keyframe, timing) => props => css`
  animation: ${keyframe} ease-in ${props.animate ? timing : '0s 0s'} forwards;
`;

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
    ${shouldAnimate(appear, '2s')}

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
    justify-content: center;
    align-items: center;

    li {
      opacity: 0;
      transform-origin: top;
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

const activeClassName = 'active';
export const StyledNavLink = styled(NavLink).attrs({
  activeClassName,
  exact: true
})`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
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
