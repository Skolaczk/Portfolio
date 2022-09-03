import styled from 'styled-components';

export const HeroWrapper = styled.section`
  background-color: ${({ theme }) => theme.color.darkBlue};
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 25px;

  h1 {
    color: ${({ theme }) => theme.color.lightGrey};
    font-size: clamp(40px, 5vw, 80px);
    margin: 10px 0;
  }

  h2 {
    font-size: clamp(35px, 5vw, 70px);
    color: ${({ theme }) => theme.color.grey};
    margin: 0;
    text-align: center;
  }

  * {
    opacity: 0;
  }
`;

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.color.blue};
  margin: 0;
  font-weight: 700;
  letter-spacing: 1px;

  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.font.size.s};
  }
`;

export const HeroContent = styled.p`
  color: ${({ theme }) => theme.color.grey};
  font-size: ${({ theme }) => theme.font.size.xs};
  max-width: 450px;
  margin: 20px auto 50px;
  text-align: center;
  line-height: ${({ theme }) => theme.lineHeight};

  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.font.size.s};
  }
`;
