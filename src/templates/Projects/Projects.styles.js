import styled, { css } from 'styled-components';

export const ProjectBox = styled.article`
  background-image: ${({ imageSource }) => css`url(${imageSource})`};
  background-size: cover;
  border-radius: 5px;
  padding: 20px;
  max-width: 1000px;
  margin: 0 auto;

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
    margin-bottom: 30px;
  }

  &:last-child {
    margin-bottom: 20px;
  }

  img {
    display: none;
  }

  ${({ theme }) => theme.mq.tablet} {
    background-color: ${({ theme }) => theme.color.dirtyBlue};
    background-image: none;
    display: flex;
    justify-content: space-between;
    padding: 0;
    overflow: hidden;

    img {
      display: block;
      width: 300px;
    }

    &:nth-child(even) {
      div {
        order: 1;
      }
    }

    div {
      padding: 30px;
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    h3 {
      font-size: ${({ theme }) => theme.font.size.m};
    }

    p {
      font-size: ${({ theme }) => theme.font.size.s};
    }

    ul {
      li {
        font-size: ${({ theme }) => theme.font.size.xs};
      }
    }
  }
`;
