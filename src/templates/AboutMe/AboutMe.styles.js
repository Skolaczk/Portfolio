import styled from 'styled-components';

export const MediumTitle = styled.h3`
  color: ${({ theme }) => theme.color.lightGrey};
  font-size: ${({ theme }) => theme.font.size.m};
  margin-top: ${({ isMargin }) => (isMargin ? '20px' : '0')};

  ${({ theme }) => theme.mq.desktop} {
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

export const IconsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
  gap: 10px;
  max-width: 475px;
`;

export const IconBox = styled.div`
  background-color: ${({ theme }) => theme.color.dirtyBlue};
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 5px;

  p {
    color: ${({ theme }) => theme.color.lightGrey};
    font-weight: 700;
    margin: 5px 0 0;
    font-size: ${({ theme }) => theme.font.size.xxs};
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
