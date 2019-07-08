import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { shouldAnimate, appear } from '../styles';
import { themeWhite } from '../styles-theme-colors';

const Logo = ({ className }) => (
  <div className={className}>
    <div>
      <div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
);

Logo.propTypes = {
  className: PropTypes.string
};

const borderAppear = keyframes`
  to {
    padding: 25px;
    border: 10px solid white;
  }
`;

export default styled(Logo)`
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
    ${shouldAnimate(borderAppear, '1s 2s')};

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
          ${shouldAnimate(appear, '1s')};
        }

        &:nth-child(2) {
          width: 300px;
          height: 300px;
          transform: translateY(250px);
          opacity: 0;
          ${shouldAnimate(appear, '1s .25s')};
        }

        &:nth-child(3) {
          width: 250px;
          height: 250px;
          transform: translateX(250px);
          opacity: 0;
          ${shouldAnimate(appear, '1s .45s')};
        }

        &:nth-child(4) {
          width: 200px;
          height: 200px;
          transform: translateY(250px);
          opacity: 0;
          ${shouldAnimate(appear, '1s .60s')};
        }

        &:nth-child(5) {
          width: 150px;
          height: 150px;
          transform: translateX(250px);
          opacity: 0;
          ${shouldAnimate(appear, '1s .70s')};
        }

        &:nth-child(6) {
          width: 100px;
          height: 100px;
          transform: translateY(250px);
          opacity: 0;
          ${shouldAnimate(appear, '1s .75s')};
        }
      }
    }
  }
`;
