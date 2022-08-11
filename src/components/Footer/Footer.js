import React from 'react';
import { StyledFooter } from './Footer.styles';

const Footer = () => {
  return (
    <StyledFooter>
      <p>
        © Copyright 2022. Created by
        {' '}
        <a href='https://github.com/Skolaczk'>Michał Skolak</a>
      </p>
    </StyledFooter>
  );
};

export default Footer;
