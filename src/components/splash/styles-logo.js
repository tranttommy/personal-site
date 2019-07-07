import styled, { keyframes } from 'styled-components';
import { fadeIn, shouldAnimate, untransform } from '../styles';
import { themeWhite } from '../styles-theme-colors';

const borderAppear = keyframes`
  to {
    border: 10px solid white;
    padding: 25px;
  }
`;

export default styled.div`
  height: 420px;
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    padding: 50px;
    border: 15px solid transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${borderAppear} ease-in ${shouldAnimate('1s 2s')} forwards;

    > div {
      position: relative;
      width: 350px;
      height: 350px;

      div {
        position: absolute;
        right: 0;
        bottom: 0;

        &:nth-of-type(odd) {
          border-top: 50px solid ${themeWhite};
        }

        &:nth-of-type(even) {
          border-left: 50px solid ${themeWhite};
        }

        &:nth-child(1) {
          width: 350px;
          height: 350px;
          transform: translateX(250px);
          opacity: 0;
          animation:
            ${fadeIn} ease-in ${shouldAnimate('1s')} forwards,
            ${untransform} ease-in ${shouldAnimate('1s')} forwards
          ;
        }

        &:nth-child(2) {
          width: 300px;
          height: 300px;
          transform: translateY(250px);
          opacity: 0;
          animation:
            ${fadeIn} ease-in ${shouldAnimate('1s .25s')} forwards,
            ${untransform} ease-in ${shouldAnimate('1s .25s')} forwards
          ;
        }

        &:nth-child(3) {
          width: 250px;
          height: 250px;
          transform: translateX(250px);
          opacity: 0;
          animation:
            ${fadeIn} ease-in ${shouldAnimate('1s .45s')} forwards,
            ${untransform} ease-in ${shouldAnimate('1s .45s')} forwards
          ;
        }

        &:nth-child(4) {
          width: 200px;
          height: 200px;
          transform: translateY(250px);
          opacity: 0;
          animation:
            ${fadeIn} ease-in ${shouldAnimate('1s .60s')} forwards,
            ${untransform} ease-in ${shouldAnimate('1s .60s')} forwards
          ;
        }

        &:nth-child(5) {
          width: 150px;
          height: 150px;
          transform: translateX(250px);
          opacity: 0;
          animation:
            ${fadeIn} ease-in ${shouldAnimate('1s .70s')} forwards,
            ${untransform} ease-in ${shouldAnimate('1s .70s')} forwards
          ;
        }

        &:nth-child(6) {
          width: 100px;
          height: 100px;
          transform: translateY(250px);
          opacity: 0;
          animation:
            ${fadeIn} ease-in ${shouldAnimate('1s .75s')} forwards,
            ${untransform} ease-in ${shouldAnimate('1s .75s')} forwards
          ;
        }
      }
    }
  }
`;
