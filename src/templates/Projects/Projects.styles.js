import styled, { css } from 'styled-components';
import { StyledLink } from '../../components/Link/Link.styles';

export const ProjectBox = styled.article`
  background-image: ${({ imageSource }) => css`url(${imageSource})`};
  background-size: cover;
  background-position: center;
  border-radius: 5px;
  padding: 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: 100%;

  div {
    margin-top: auto;
  }

  a:focus {
    outline: none;

    svg {
      fill: ${({ theme }) => theme.color.blue};
    }
  }

  h4 {
    font-size: ${({ theme }) => theme.font.size.s};
    margin: 0;
    color: ${({ theme }) => theme.color.blue};
  }

  p {
    color: ${({ theme }) => theme.color.grey};
    line-height: ${({ theme }) => theme.lineHeight};
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
    fill: ${({ theme }) => theme.color.grey};
    width: 20px;
    height: 20px;
    transition: fill 0.25s ease-in-out;
    margin-right: 12px;

    &:hover {
      fill: ${({ theme }) => theme.color.blue};
    }
  }

  button {
    display: none;
  }

  ${({ theme }) => theme.mq.tablet} {
    button {
      display: inline;
      background-color: transparent;
      border: none;
      padding: 0;
      outline: none;

      &:focus svg {
        fill: ${({ theme }) => theme.color.blue};
      }
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    h4 {
      font-size: ${({ theme }) => theme.font.size.m};
    }

    ul {
      li {
        font-size: ${({ theme }) => theme.font.size.xs};
      }
    }
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  max-width: 1000px;
  gap: 25px;
  margin: 0 auto;

  ${({ theme }) => theme.mq.tablet} {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 35px;
  }
`;

export const StyledCenterLink = styled(StyledLink)`
  margin: 30px auto 20px;

  ${({ theme }) => theme.mq.tablet} {
    margin: 40px auto 0;
  }
`;
