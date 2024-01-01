import React, { useState, useEffect, useCallback } from 'react';
import { Header, BurgerButton, StyledNavigation } from './Navigation.styles';
import { StyledSmallLink } from '../Link/Link.styles';
import Logo from '../../assets/icons/logo.svg';
import { useWindow } from '../../hooks/useWindow';

const isBrowser = typeof window !== 'undefined';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { matchMedia } = useWindow();
  const [scrollPosition, setScrollPosition] = useState(
    isBrowser ? window.scrollY : null
  );
  const [isDirectionDown, setIsDirectionDown] = useState(null);

  const toggleNavigation = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

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

  useEffect(() => {
    if (matchMedia) setIsOpen(false);
  }, [matchMedia]);

  return (
    <Header
      isDirectionDown={isDirectionDown}
      isOpen={isOpen}
      scrollPosition={scrollPosition}
    >
      <a title='home' href='#home' aria-label='Scroll to hero'>
        <Logo />
      </a>
      <BurgerButton
        type='button'
        aria-label='Menu button'
        isOpen={isOpen}
        onClick={toggleNavigation}
      >
        <div />
        <div />
        <div />
      </BurgerButton>
      <StyledNavigation isOpen={isOpen}>
        <ul>
          <li>
            <a
              title='Home'
              onClick={!matchMedia ? toggleNavigation : null}
              tabIndex={
                !isOpen && !matchMedia && matchMedia !== null ? '-1' : ''
              }
              href='#home'
            >
              Home
            </a>
          </li>
          <li>
            <a
              title='About me'
              onClick={!matchMedia ? toggleNavigation : null}
              tabIndex={
                !isOpen && !matchMedia && matchMedia !== null ? '-1' : ''
              }
              href='#about-me'
            >
              About me
            </a>
          </li>
          <li>
            <a
              title='Projects'
              onClick={!matchMedia ? toggleNavigation : null}
              tabIndex={
                !isOpen && !matchMedia && matchMedia !== null ? '-1' : ''
              }
              href='#projects'
            >
              Projects
            </a>
          </li>
          <li>
            <a
              title='Contact'
              onClick={!matchMedia ? toggleNavigation : null}
              tabIndex={
                !isOpen && !matchMedia && matchMedia !== null ? '-1' : ''
              }
              href='#contact'
            >
              Contact
            </a>
          </li>
        </ul>
        <StyledSmallLink
          title='Github'
          tabIndex={!isOpen && !matchMedia && matchMedia !== null ? '-1' : ''}
          href='https://github.com/Skolaczk'
        >
          Github
        </StyledSmallLink>
      </StyledNavigation>
    </Header>
  );
};

export default Navigation;
