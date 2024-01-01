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
            title='Linkedin'
            href='https://www.linkedin.com/in/micha%C5%82-skolak-06905524b/'
            aria-label='linkedin'
          >
            <LinkedinIcon />
          </a>
        </li>
        <li>
          <a
            title='Email'
            href='mailto: skolakmichal1@gmail.com'
            aria-label='email'
          >
            <EmailIcon />
          </a>
        </li>
        <li>
          <a
            title='Github'
            href='https://github.com/Skolaczk'
            aria-label='github'
          >
            <GithubIcon />
          </a>
        </li>
      </ul>
      <p>
        © Copyright {new Date().getFullYear()}. Created by{' '}
        <a title='Michał Skolak - Github' href='https://github.com/Skolaczk'>
          Michał Skolak
        </a>
      </p>
    </StyledFooter>
  );
};

export default Footer;
