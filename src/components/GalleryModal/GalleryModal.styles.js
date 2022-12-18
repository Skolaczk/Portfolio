import styled from 'styled-components';
import ReactModal from 'react-modal';

export const StyledModal = styled(ReactModal)`
  min-width: 700px;
  max-width: 1000px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 25px;
  background-color: ${({ theme }) => theme.color.dirtyBlue};
  border-radius: 5px;

  img {
    border-radius: 5px;
  }

  h2 {
    font-size: ${({ theme }) => theme.font.size.m};
  }
`;

export const IconButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;

  &:focus svg {
    fill: ${({ theme }) => theme.color.blue};
  }

  svg {
    fill: ${({ theme }) => theme.color.grey};
    width: 20px;
    height: 20px;
    transition: fill 0.25s ease-in-out;

    &:hover {
      fill: ${({ theme }) => theme.color.blue};
    }
  }
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;

  h2 {
    margin: 0;
    color: ${({ theme }) => theme.color.grey};
  }
`;

export const overlay = {
  backgroundColor: 'rgba(10, 25, 47, 0.5)',
  backdropFilter: 'blur(1px)',
};
