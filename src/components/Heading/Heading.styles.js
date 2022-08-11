import styled from 'styled-components';

export const Title = styled.h2`
  color: ${({ theme }) => theme.color.lightGrey};
  font-size: 3rem;
  text-align: center;
  position: relative;
  text-transform: uppercase;
  margin: 0 0 30px;

  &::after {
    content: '';
    position: absolute;
    width: 30px;
    height: 5px;
    background-color: ${({ theme }) => theme.color.blue};
    left: 50%;
    bottom: -15px;
    transform: translateX(-50%);
  }
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.color.grey};
  text-align: center;
  font-size: 14px;
`;
