import styled from 'styled-components';

export const SectionWrapper = styled.section`
  background-color: ${({ theme, isDirtyBlue }) => (isDirtyBlue ? theme.color.dirtyBlue : theme.color.darkBlue)};
  padding: 20px;

  ${({ theme }) => theme.mq.tablet} {
    padding: 35px;
  }

  ${({ theme }) => theme.mq.desktop} {
    padding: 50px;
  }
`;
