'use client';

import { cva, VariantProps } from 'class-variance-authority';
import React, { useEffect, useRef, useState } from 'react';

const modal = cva('modal', {
  variants: {
    position: {
      top: 'modal-top',
      bottom: 'modal-bottom',
      middle: 'modal-middle',
    },
  },
  defaultVariants: {
    position: 'middle',
  },
});

interface Props extends VariantProps<typeof modal> {
  isOpen: boolean;
  hasCloseBtn?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<Props> = ({
  isOpen,
  hasCloseBtn = true,
  position,
  onClose,
  children,
}) => {
  const [isModalOpen, setModalOpen] = useState(isOpen);
  const modalRef = useRef<HTMLDialogElement | null>(null);

  const handleCloseModal = () => {
    if (onClose) {
      onClose();
    }
    setModalOpen(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === 'Escape') {
      handleCloseModal();
    }
  };

  useEffect(() => {
    setModalOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    const modalElement = modalRef.current;

    if (modalElement) {
      if (isModalOpen) {
        modalElement.showModal();
      } else {
        modalElement.close();
      }
    }
  }, [isModalOpen]);

  return (
    <dialog ref={modalRef} onKeyDown={handleKeyDown} className={modal({ position })}>
      <div className="modal-box">
        {hasCloseBtn && (
          <button
            onClick={handleCloseModal}
            className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4"
          >
            ✕
          </button>
        )}
        {children}
      </div>
    </dialog>
  );
};
