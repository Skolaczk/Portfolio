import styled from 'styled-components';

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.color.dirtyBlue};
  text-align: center;
  color: ${({ theme }) => theme.color.grey};
  position: relative;
  padding: 20px;

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    width: 90%;
    height: 1px;
    background-color: ${({ theme }) => theme.color.blue};
  }

  a {
    color: ${({ theme }) => theme.color.grey};
    text-decoration: underline;
    transition: color 0.25s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.color.blue};
    }

    &:focus {
      outline: none;
      color: ${({ theme }) => theme.color.blue};
    }
  }

  p {
    margin: 0;
  }

  svg {
    fill: ${({ theme }) => theme.color.grey};
    width: 18px;
    transition: fill 0.25s ease-in-out;

    &:hover {
      fill: ${({ theme }) => theme.color.blue};
    }
  }

  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    padding: 0;
    margin: 0 0 10px;

    a:focus {
      svg {
        fill: ${({ theme }) => theme.color.blue};
      }
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    &::after {
      width: 95%;
    }
  }
`;
