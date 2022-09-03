import React from 'react';
import PropTypes from 'prop-types';
import { IconBox, IconsWrapper } from './Icons.styles';

const Icons = ({ data }) => {
  return (
    <IconsWrapper>
      {data.map(({ id, icon, name }) => (
        <IconBox key={id}>
          <img src={icon.url} alt={`${name} icon`} />
          <p>{name}</p>
        </IconBox>
      ))}
    </IconsWrapper>
  );
};

Icons.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      icon: PropTypes.objectOf,
      name: PropTypes.string,
    }),
  ).isRequired,
};

export default Icons;
