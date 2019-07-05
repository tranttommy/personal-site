import React from 'react';
import PropTypes from 'prop-types';
import LogoDiv from './styles-logo';

export default function Logo({ animate }) {
  return (
    <LogoDiv animate={animate} >
      <div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </LogoDiv>
  );
}

Logo.propTypes = {
  animate: PropTypes.bool.isRequired
};
