import styled from 'styled-components';

export const MediumTitle = styled.h4`
  color: ${({ theme }) => theme.color.lightGrey};
  font-size: ${({ theme }) => theme.font.size.m};
  margin-top: ${({ hasMargin }) => (hasMargin ? '20px' : '0')};

  ${({ theme }) => theme.mq.tablet} {
    margin-top: 0;
  }
`;

export const AboutMeContent = styled.p`
  color: ${({ theme }) => theme.color.grey};
  max-width: 550px;
  margin: 0 0 20px;
  line-height: ${({ theme }) => theme.lineHeight};

  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.font.size.s};
  }

  a {
    color: ${({ theme }) => theme.color.blue};
    position: relative;

    &:after {
      content: '';
      position: absolute;
      bottom: -1px;
      left: 0;
      width: 100%;
      height: 1px;
      transform: scaleX(0);
      background-color: ${({ theme }) => theme.color.blue};
      transition: transform 0.25s ease-in-out;
      transform-origin: left;
    }

    &:hover, &:focus {
      outline: none;

      &:after {
        transform: scaleX(1);
      }
    }
  }
`;

export const Wrapper = styled.div`
  ${({ theme }) => theme.mq.tablet} {
    display: flex;
    gap: 25px;
  }

  ${({ theme }) => theme.mq.desktop} {
    flex-direction: column;
  }
`;

export const AboutWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;

  ${({ theme }) => theme.mq.desktop} {
    display: flex;
    gap: 50px;
  }
`;
