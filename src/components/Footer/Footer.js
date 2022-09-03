import React from 'react';
import { StyledFooter } from './Footer.styles';
import GithubIcon from '../../assets/icons/github.svg';
import EmailIcon from '../../assets/icons/email.svg';
import LinkedinIcon from '../../assets/icons/linkedin.svg';

const Footer = () => {
  return (
    <StyledFooter>
      <ul>
        <li>
          <a
            href='https://www.linkedin.com/in/micha%C5%82-skolak-06905524b/'
            aria-label='linkedin'
          >
            <LinkedinIcon />
          </a>
        </li>
        <li>
          <a href='mailto: skolakmichal1@gmail.com' aria-label='email'>
            <EmailIcon />
          </a>
        </li>
        <li>
          <a href='https://github.com/Skolaczk' aria-label='github'>
            <GithubIcon />
          </a>
        </li>
      </ul>
      <p>
        © Copyright 2022. Created by{' '}
        <a href='https://github.com/Skolaczk'>Michał Skolak</a>
      </p>
    </StyledFooter>
  );
};

export default Footer;
