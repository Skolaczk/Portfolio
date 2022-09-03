import React, { useState, useEffect, useCallback } from 'react';
import { Header, BurgerButton, StyledNavigation } from './Navigation.styles';
import { StyledSmallLink } from '../Link/Link.styles';
import Logo from '../../assets/icons/logo.svg';

const isBrowser = typeof window !== 'undefined';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(isBrowser ? window.scrollY : null);
  const [isDirectionDown, setIsDirectionDown] = useState(null);
  const [matchMedia, setMatchMedia] = useState(isBrowser ? window.matchMedia('(min-width: 768px)').matches : null);

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

  const getMediaMatches = () => {
    const { matches } = window.matchMedia('(min-width: 768px)');
    setMatchMedia(matches);
    if (matches) setIsOpen(false);
  };

  useEffect(() => {
    window.addEventListener('resize', getMediaMatches);

    return () => {
      window.removeEventListener('resize', getMediaMatches);
    };
  }, []);

  return (
    <Header
      isDirectionDown={isDirectionDown}
      isOpen={isOpen}
      scrollPosition={scrollPosition}
    >
      <a href='#home' aria-label="Scroll to hero">
        <Logo />
      </a>
      <BurgerButton type='button' aria-label='Menu button' isOpen={isOpen} onClick={toggleNavigation}>
        <div />
        <div />
        <div />
      </BurgerButton>
      <StyledNavigation isOpen={isOpen}>
        <ul>
          <li>
            <a
              onClick={!matchMedia ? toggleNavigation : null}
              tabIndex={!isOpen && !matchMedia && matchMedia !== null ? '-1' : ''}
              href='#home'
            >
              Home
            </a>
          </li>
          <li>
            <a
              onClick={!matchMedia ? toggleNavigation : null}
              tabIndex={!isOpen && !matchMedia && matchMedia !== null ? '-1' : ''}
              href='#about-me'
            >
              About me
            </a>
          </li>
          <li>
            <a
              onClick={!matchMedia ? toggleNavigation : null}
              tabIndex={!isOpen && !matchMedia && matchMedia !== null ? '-1' : ''}
              href='#projects'
            >
              Projects
            </a>
          </li>
          <li>
            <a
              onClick={!matchMedia ? toggleNavigation : null}
              tabIndex={!isOpen && !matchMedia && matchMedia !== null ? '-1' : ''}
              href='#contact'
            >
              Contact
            </a>
          </li>
        </ul>
        <StyledSmallLink
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
