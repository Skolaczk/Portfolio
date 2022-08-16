import React, { useState, useEffect, useCallback } from 'react';
import { Header, BurgerButton, StyledNavigation } from './Navigation.styles';
import { Button } from '../Button/Button.styles';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(window.scrollY);
  const [isDirectionDown, setIsDirectionDown] = useState(null);

  const toggleNavigation = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleNavigation = useCallback(() => {
    if (scrollPosition > window.scrollY) {
      setIsDirectionDown(false);
    } else {
      setIsDirectionDown(true);
    }
    setScrollPosition(window.scrollY);
  }, [scrollPosition]);

  useEffect(() => {
    window.addEventListener('scroll', handleNavigation);

    return () => {
      window.removeEventListener('scroll', handleNavigation);
    };
  }, [scrollPosition]);

  return (
    <Header
      isDirectionDown={isDirectionDown}
      isOpen={isOpen}
      scrollPosition={scrollPosition}
    >
      <a href='#home'>
        <h2>M</h2>
      </a>
      <BurgerButton type='button' isOpen={isOpen} onClick={toggleNavigation}>
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
          <Button isSmall type='button'>
            Github
          </Button>
        </a>
      </StyledNavigation>
    </Header>
  );
};

export default Navigation;
