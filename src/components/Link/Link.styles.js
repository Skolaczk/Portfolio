import styled from 'styled-components';

export const StyledLink = styled.a`
  background-color: ${({ theme }) => theme.color.darkBlue};
  color: ${({ theme }) => theme.color.blue};
  border: 2px solid ${({ theme }) => theme.color.blue};
  border-radius: 5px;
  font-weight: 700;
  font-size: ${({ theme }) => theme.font.size.xxs};
  transition: background-color 0.25s ease-in-out;
  width: 225px;
  height: 50px;
  display: flex;  
  justify-content: center;
  align-items: center;

  &:hover, &:focus {
    outline: none;
    background-color: ${({ theme }) => theme.color.lightBlue};
  }
`;

export const StyledSmallLink = styled(StyledLink)`
  ${({ theme }) => theme.mq.tablet} {
    width: 80px;
    height: 40px;
  }
`;
