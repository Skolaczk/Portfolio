import styled from 'styled-components';

export const MediumTitle = styled.h3`
  color: ${({ theme }) => theme.color.lightGrey};
  font-size: ${({ theme }) => theme.font.size.m};
`;

export const AboutMeContent = styled.p`
  color: ${({ theme }) => theme.color.grey};
  margin-bottom: 40px;
`;

export const IconsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
  gap: 10px;
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
