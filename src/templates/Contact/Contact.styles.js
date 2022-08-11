import styled from 'styled-components';

export const Form = styled.form`
  max-width: 500px;
  display: flex;
  align-items: center;
  flex-direction: column;

  div {
    width: 100%;
  }

  label {
    color: ${({ theme }) => theme.color.lightGrey};
    font-weight: 700;
    font-size: ${({ theme }) => theme.font.size.xxs};
  }

  input,
  textarea {
    background-color: ${({ theme }) => theme.color.darkBlue};
    font-size: ${({ theme }) => theme.font.size.xs};
    border: none;
    border-radius: 5px;
    width: 100%;
    padding: 10px;
    resize: none;
    color: ${({ theme }) => theme.color.lightGrey};
    margin: 10px 0 15px;

    &:focus {
      outline-style: solid;
      outline-color: ${({ theme }) => theme.color.blue};
    }
  }

  button {
    margin: 10px 0 25px;
  }
`;
