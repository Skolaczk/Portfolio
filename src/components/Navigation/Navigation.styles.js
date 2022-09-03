import styled from 'styled-components';

export const Header = styled.header`
  z-index: 1;
  height: 70px;
  background-color: ${({ theme }) => theme.color.transparentDarkBlue};
  position: fixed;
  width: 100%;
  color: ${({ theme }) => theme.color.lightGrey};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  transform: ${({ isDirectionDown, isOpen }) => (isDirectionDown && !isOpen ? 'translateY(-80px)' : 'translateY(0)')};
  transition: transform 0.25s 0.1s ease-in-out, box-shadow 0.25s ease-in-out;
  box-shadow: ${({ scrollPosition, theme }) => (scrollPosition !== 0 && scrollPosition !== null ? theme.shadow : '')};
  backdrop-filter: ${({ isOpen }) => (!isOpen ? 'blur(3px)' : '')};

  svg {
    height: 45px;
  }

  a:first-child {
    border-radius: 5px;
  }

  a:first-child:focus {
    outline-style: solid;
    outline-color: ${({ theme }) => theme.color.blue};
  }

  ${({ theme }) => theme.mq.tablet} {
    padding: 20px 30px;
  }

  ${({ theme }) => theme.mq.desktop} {
    padding: 20px 50px;
  }
`;

export const StyledNavigation = styled.nav`
  display: flex;
  position: absolute;
  top: 0;
  right: -100%;
  width: 100%;
  height: 100vh;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(-100%)' : 'translateX(0)')};
  transition: transform 0.5s ease-in-out;
  background-color: ${({ theme }) => theme.color.transparentDarkBlue};
  backdrop-filter: blur(3px);
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 1;

  ul {
    list-style: none;
    text-align: center;
    padding: 0;
  }

  li {
    text-transform: uppercase;
    margin: 50px 0;

    a {
    color: ${({ theme }) => theme.color.lightGrey};
    transition: color 0.25s ease-in-out;
    padding: 10px;

    &:focus {
      outline-style: solid;
      outline-width: 1px;
      outline-color: ${({ theme }) => theme.color.blue};
      border-radius: 2px;
    }

    &:hover, &:focus {
      color: ${({ theme }) => theme.color.blue};
    }
  }
  }

  ${({ theme }) => theme.mq.tablet} {
    display: block;
    position: static;
    height: auto;
    width: auto;
    display: flex;
    flex-direction: row;
    background-color: transparent;
    transform: none;
    transition: none;

    ul {
      display: flex;
      margin: 0;
    }

    li {
      margin: 0 10px 0 0;
      text-transform: none;
    }

    button {
      margin-left: 10px;
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    li {
      margin: 0 15px 0 0;
    }
  }
`;

export const BurgerButton = styled.button`
  width: 45px;
  height: 45px;
  background-color: transparent;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  padding: 5px;
  position: relative;
  right: -5px;
  z-index: 2;
  border-radius: 5px;

  div {
    background-color: ${({ theme }) => theme.color.blue};
    height: 2px;
    transition: transform 0.25s ease-in-out;
    transform-origin: right;
  }

  div:nth-child(1) {
    width: 75%;
    transform: ${({ isOpen }) => (isOpen ? 'scaleX(1.3335)' : '')};
  }

  div:nth-child(2) {
    width: 100%;
    margin: 10px 0;
    transform: ${({ isOpen }) => (isOpen ? 'scaleX(0.5)' : '')};
  }

  div:nth-child(3) {
    width: 50%;
    transform: ${({ isOpen }) => (isOpen ? 'scaleX(1.5)' : '')};
  }
  
  ${({ theme }) => theme.mq.tablet} {
    display: none;
  }
`;
