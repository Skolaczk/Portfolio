import styled from 'styled-components';

export const Form = styled.form`
  max-width: 700px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;

  div {
    width: 100%;
  }

  label {
    color: ${({ theme }) => theme.color.lightGrey};
    font-weight: 700;
    font-size: ${({ theme }) => theme.font.size.xxs};

    ${({ theme }) => theme.mq.desktop} {
      font-size: ${({ theme }) => theme.font.size.xs};
    }
  }
`;

export const StyledInput = styled.input`
  background-color: ${({ theme }) => theme.color.darkBlue};
  font-size: ${({ theme }) => theme.font.size.xs};
  border: none;
  border-radius: 5px;
  width: 100%;
  padding: 15px;
  resize: none;
  color: ${({ theme }) => theme.color.lightGrey};
  margin: 10px 0 15px;
  border: ${({ isError, theme }) => (isError ? `1px solid ${theme.color.red}` : '')};

  &:focus {
    border: none;
    outline-style: solid;
    outline-color: ${({ theme }) => theme.color.blue};
  }

  ${({ theme }) => theme.mq.desktop} {
    margin: 15px 0 20px;
  }
`;

export const StyledTextarea = styled(StyledInput)`
  height: 350px;

  ${({ theme }) => theme.mq.tablet} {
    height: 400px;
  }
`;

export const StyledError = styled.p`
  color: ${({ theme }) => theme.color.red};
  font-size: ${({ theme }) => theme.font.size.xxs};
  margin: -10px 0 20px;
`;

export const StyledSuccess = styled.p`
  color: ${({ theme }) => theme.color.green};
  text-align: center;
  font-size: ${({ theme }) => theme.font.size.xs};
`;

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.color.darkBlue};
  color: ${({ theme }) => theme.color.blue};
  border: 2px solid ${({ theme }) => theme.color.blue};
  border-radius: 5px;
  font-weight: 700;
  font-size: ${({ theme }) => theme.font.size.xxs};
  transition: background-color 0.25s ease-in-out;
  width: 225px;
  height: 50px; 
  margin: 10px 0 25px;

  &:hover, &:focus {
    outline: none;
    background-color: ${({ theme }) => theme.color.lightBlue};
  }
`;
