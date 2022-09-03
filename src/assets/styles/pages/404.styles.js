import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color.darkBlue};
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${({ theme }) => theme.color.lightGrey};
  padding: 20px;

  h1 {
    font-size: 7rem;
    margin: 0;
    text-align: center;
  }

  p {
    color: ${({ theme }) => theme.color.grey};
    text-align: center;
    margin: 30px 0 20px;
    font-size: 1.8rem;
    max-width: 700px;
  }
`;
