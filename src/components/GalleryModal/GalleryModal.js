import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import XMarkIcon from '../../assets/icons/xmark.svg';
import { useModal } from '../../hooks/useModal';
import { useWindow } from '../../hooks/useWindow';
import {
  StyledModal,
  overlay,
  TitleBox,
  IconButton,
} from './GalleryModal.styles';

const galleryOptions = {
  showStatus: false,
  showThumbs: false,
  infiniteLoop: true,
};

const GalleryModal = () => {
  const { modalData, modalIsOpen, closeModal } = useModal();
  const { matchMedia } = useWindow();

  return (
    <>
      {matchMedia ? (
        <StyledModal
          appElement={document.getElementById('___gatsby')}
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel='Project gallery modal'
          style={{ overlay }}
        >
          <TitleBox>
            <h2>{modalData.title}</h2>
            <IconButton
              type='button'
              onClick={closeModal}
              aria-label='close button'
            >
              <XMarkIcon />
            </IconButton>
          </TitleBox>
          <Carousel {...galleryOptions}>
            {modalData.gallery.map(({ url }, i) => (
              <div key={i}>
                <img src={url} alt={`${modalData.title} screenshot ${i + 1}`} />
              </div>
            ))}
          </Carousel>
        </StyledModal>
      ) : null}
    </>
  );
};

export default GalleryModal;
