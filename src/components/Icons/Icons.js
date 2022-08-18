import React from 'react';
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

export default Icons;
