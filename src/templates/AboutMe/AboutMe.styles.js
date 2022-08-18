import styled from 'styled-components';

export const MediumTitle = styled.h3`
  color: ${({ theme }) => theme.color.lightGrey};
  font-size: ${({ theme }) => theme.font.size.m};
  margin-top: ${({ isMargin }) => (isMargin ? '20px' : '0')};

  ${({ theme }) => theme.mq.tablet} {
    margin-top: 0;
  }
`;

export const AboutMeContent = styled.p`
  color: ${({ theme }) => theme.color.grey};
  max-width: 550px;
  margin: 0 0 20px;

  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.font.size.s};
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
