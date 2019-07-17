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

  #root {
    height: 100vh;
    background: linear-gradient(135deg, ${themeBlue} 20%, ${themeGray} 45% 55%, ${themeBlue} 80%);
    background-size: 1000%;
    animation: ${movingGradient} ease-in 15s infinite;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Main = styled.main.attrs({
  animate: true
})`
  height: calc(100vh - 160px);
  width: 100%;
  background-color: ${transparentWhite};
  box-shadow: 0 0 .1em .25em ${transparentWhite};
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  transform-origin: top;
  transform: rotateX(45deg);
  ${shouldAnimate(appear, '.5s .4s')};
`;

// Splash Page
export const SplashMain = styled.main`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

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

export const NameH1 = styled.h1`
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
`;

// NavBar
export const Nav = styled.nav.attrs({
  animate: true
})`
  ul {
    height: 80px;
    width: 100vw;
    display: flex;
    justify-content: space-evenly;
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
  font-size: 1.6rem;
  border-radius: .25em;
  transition: ease-in .25s;

  &:hover {
    background-color: ${transparentBlack};
    box-shadow: 0 0 .1em .25em ${transparentBlack};
    font-size: 2rem;
  }

  &.${activeClassName} {
    color: ${themeOrange};
    font-size: 2rem;
    pointer-events: none;
  }
`;

export const H2 = styled.h2`
  color: ${themeBlue};
  font-size: 1.5rem;
  font-family: Comfortaa;
  font-weight: bold;
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 15px;
  text-align: center;

  a {
    color: inherit;
    text-decoration: none;
    position: relative;
    display: inline-flex;
    flex-direction: column;

    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      display: block;
      height: 2px;
      background-color: ${themeBlue};
      transition: ease-in .25s;
      width: 0;
      align-self: flex-end;
    }

    &:hover::after {
      width: 100%;
      align-self: flex-start;
    }
  }
`;

export const ProjectsUl = styled.ul.attrs({
  animate: true
})`
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
  align-content: space-evenly;
  
  li {
    width: 25vw;
    height: 75%;
    border-radius: .25em;
    overflow: hidden;
    background-color: ${transparentBlack};
    opacity: 0;
    transform-origin: top;
    transform: scale(.5);

    &:nth-child(1) {
      ${shouldAnimate(appear, '.5s .4s')};
    }

    &:nth-child(2) {
      ${shouldAnimate(appear, '.5s .5s')};
    }

    &:nth-child(3) {
      ${shouldAnimate(appear, '.5s .6s')};
    }

    &, div img, h2, p {
      transition: ease-in .25s;
    }

    &:hover {
      background-color: ${themeOrange};

      h2 {
        color: ${themeBlue};
      }

      p {
        color: ${themeBlack};
      }

      div img {
        transform: scale(1.1);
      }
    }

    div {
      height: 40%;
      width: 100%;
      overflow: hidden;

      img {
        width: 100%;
        transform-origin: top;
      }
    }

    h2 {
      color: ${themeOrange};
    }

    p {
      &:nth-of-type(1) {
        font-style: italic;
        font-weight: bold;
      }

      font-family: Corbel;
      color: ${themeWhite};
      margin: 5%;
      font-size: 1.2rem;
    }
  }
`;
