import styled from 'styled-components';

export const Header = styled.header`
  background-color: ${({ theme }) => theme.color.darkBlue};
  color: ${({ theme }) => theme.color.lightGrey};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  a {
    color: transparent;
  }

  h2 {
    margin: 0;
    color: ${({ theme }) => theme.color.blue};
    font-size: ${({ theme }) => theme.font.size.xl};
  }

  ${({ theme }) => theme.mq.tablet} {
    padding: 20px 30px;
  }

  ${({ theme }) => theme.mq.desktop} {
    padding: 20px 50px;
  }
`;

export const StyledNavigation = styled.nav`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
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
    margin: 40px 0;
    padding: 10px;
  }

  a {
    color: ${({ theme }) => theme.color.lightGrey};

    &:focus {
      outline-style: solid;
      outline-color: #38bdf8;
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
  background-color: ${({ theme }) => theme.color.darkBlue};
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
  }

  div:nth-child(1) {
    width: 75%;
  }

  div:nth-child(2) {
    width: 100%;
    margin: 10px 0;
  }

  div:nth-child(3) {
    width: 50%;
  }

  &:focus {
    outline-style: solid;
    outline-color: ${({ theme }) => theme.color.blue};
    outline-width: 1px;
  }

  ${({ theme }) => theme.mq.tablet} {
    display: none;
  }
`;
