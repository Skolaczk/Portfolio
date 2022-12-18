import React, { createContext, useState, useContext, useEffect } from 'react';
import { useWindow } from './useWindow';

const ModalContext = createContext({
  modalData: {},
  modalIsOpen: false,
  toggleModal: () => {},
});

export const ModalProvider = ({ children }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const { matchMedia } = useWindow();
  const [modalData, setModalData] = useState({
    title: '',
    gallery: [],
  });

  useEffect(() => {
    if (modalIsOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [modalIsOpen]);

  useEffect(() => {
    if (!matchMedia) setIsOpen(false);
  }, [matchMedia]);

  const openModal = ({ title, gallery }) => {
    setModalData({ title, gallery });
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{ modalData, modalIsOpen, openModal, closeModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
