import styled, { css } from 'styled-components';

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.color.grey};
  text-align: center;
  font-size: ${({ theme }) => theme.font.size.xxs};
`;

export const ProjectBox = styled.article`
  background-image: ${({ imageSource }) => css`url(${imageSource})`};
  background-size: cover;
  border-radius: 5px;
  padding: 20px;

  h3 {
    margin: 0;
    color: ${({ theme }) => theme.color.blue};
  }

  p {
    color: ${({ theme }) => theme.color.grey};
  }

  ul {
    display: flex;
    list-style: none;
    padding: 0;

    li {
      margin-right: 10px;
      font-size: ${({ theme }) => theme.font.size.xxs};
      color: ${({ theme }) => theme.color.grey};
      font-weight: 700;
    }
  }

  svg {
    fill: ${({ theme }) => theme.color.blue};
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }

  &:not(:last-child) {
    margin-bottom: 25px;
  }
`;
