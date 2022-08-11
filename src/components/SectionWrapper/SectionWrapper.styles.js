import styled from 'styled-components';

export const SectionWrapper = styled.section`
  background-color: ${({ theme, isDirtyBlue }) => (isDirtyBlue ? theme.color.dirtyBlue : theme.color.darkBlue)};
  padding: 20px;
`;
