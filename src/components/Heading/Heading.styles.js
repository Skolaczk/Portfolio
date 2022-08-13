import styled from 'styled-components';

export const Title = styled.h2`
  color: ${({ theme }) => theme.color.lightGrey};
  font-size: ${({ theme }) => theme.font.size.l};
  text-align: center;
  position: relative;
  text-transform: uppercase;
  margin: 0 0 30px;

  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.font.size.xl};
  }

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
  font-size: ${({ theme }) => theme.font.size.xss};
  max-width: 450px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;

  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.font.size.xs};
  }
`;
