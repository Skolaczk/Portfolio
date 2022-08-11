import React, { useState } from 'react';
import { Header, BurgerButton, StyledNavigation } from './Navigation.styles';
import { Button } from '../Button/Button.styles';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavigation = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <Header>
      <a href='#home'>
        <h2>M</h2>
      </a>
      <BurgerButton type='button' onClick={toggleNavigation}>
        <div />
        <div />
        <div />
      </BurgerButton>
      <StyledNavigation isOpen={isOpen}>
        <ul>
          <li>
            <a onClick={toggleNavigation} href='#home'>
              Home
            </a>
          </li>
          <li>
            <a onClick={toggleNavigation} href='#about-me'>
              About me
            </a>
          </li>
          <li>
            <a onClick={toggleNavigation} href='#projects'>
              Projects
            </a>
          </li>
          <li>
            <a onClick={toggleNavigation} href='#contact'>
              Contact
            </a>
          </li>
        </ul>
        <a href='https://github.com/Skolaczk'>
          <Button type='button'>Check out my Github!</Button>
        </a>
      </StyledNavigation>
    </Header>
  );
};

export default Navigation;
