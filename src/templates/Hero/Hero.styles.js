import styled from 'styled-components';

export const HeroWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.darkBlue};
  width: 100%;
  height: calc(100vh - 85px);
  padding: 30px 20px;
  text-align: center;

  h1 {
    color: ${({ theme }) => theme.color.lightGrey};
    font-size: ${({ theme }) => theme.font.size.xxl};
    margin: 5px 0;
  }

  h2 {
    font-size: 3rem;
    color: ${({ theme }) => theme.color.grey};
    margin: 0;
  }
`;

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.color.blue};
  margin: 0;
  font-weight: 700;
  letter-spacing: 1px;
`;

export const HeroContent = styled.p`
  color: ${({ theme }) => theme.color.grey};
  font-size: ${({ theme }) => theme.font.size.s};
  margin-bottom: 50px;
`;
