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

  input,
  textarea {
    background-color: ${({ theme }) => theme.color.darkBlue};
    font-size: ${({ theme }) => theme.font.size.xs};
    border: none;
    border-radius: 5px;
    width: 100%;
    padding: 15px;
    resize: none;
    color: ${({ theme }) => theme.color.lightGrey};
    margin: 10px 0 15px;

    &:focus {
      outline-style: solid;
      outline-color: ${({ theme }) => theme.color.blue};
    }

    ${({ theme }) => theme.mq.desktop} {
      margin: 15px 0 20px;
    }
  }

  textarea {
    height: 350px;
  }

  button {
    margin: 10px 0 25px;
  }
`;
