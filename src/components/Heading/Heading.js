import React from 'react';
import PropTypes from 'prop-types';
import { Subtitle, Title } from './Heading.styles';

const Heading = ({ title = '', subtitle = '' }) => {
  return (
    <>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </>
  );
};

Heading.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Heading;
