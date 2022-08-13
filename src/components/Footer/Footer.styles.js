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
  }

  p {
    margin: 0;
  }

  ${({ theme }) => theme.mq.desktop} {
    &::after {
      width: 95%;
    }
  }
`;
