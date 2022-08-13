import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${({ theme }) => theme.color.darkBlue};
  color: ${({ theme }) => theme.color.blue};
  border: 2px solid ${({ theme }) => theme.color.blue};
  border-radius: 5px;
  width: 200px;
  height: 50px;
  font-weight: 700;
  font-size: ${({ theme }) => theme.font.size.xxs};

  &:focus {
    background-color: ${({ theme }) => theme.color.dirtyBlue};
  }

  ${({ theme }) => theme.mq.tablet} {
    width: ${({ isSmall }) => (isSmall ? '80px' : '')};
    height: ${({ isSmall }) => (isSmall ? '40px' : '')};
  }
`;
