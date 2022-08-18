import styled from 'styled-components';

export const IconsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
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
    font-size: 12px;
  }

  img {
    height: 48px;
    width: 48px;
  }
`;
