import React, { PropsWithChildren, useEffect } from 'react';
import { createPortal } from 'react-dom';

type ModalProps = {
  visible: boolean;
  onClose: () => void;
  actionBar?: React.ReactNode;
} & PropsWithChildren;

const Modal: React.FC<ModalProps> = ({ visible, onClose, children, actionBar }) => {

  useEffect(() => {
    if (visible) {
      document.body.classList.add('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    }
  }, [visible]);

  if (!visible) {
    return null;
  }

  const container = document.getElementById('modal-container');
  if (!container) {
    return null;
  }

  return createPortal(
    <div>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-gray-300 opacity-80">
      </div>
      <div className="fixed inset-40 p-10 bg-white">
        <div className="flex flex-col justify-between h-full">
          {children}
          <div className="flex justify-end">{actionBar}</div>
        </div>
      </div>
    </div>,
    container
  );
};

export default Modal;
