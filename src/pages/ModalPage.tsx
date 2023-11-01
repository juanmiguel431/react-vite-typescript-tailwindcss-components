import React, { useCallback, useState } from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button.tsx';

type ModalPageProps = {}

const ModalPage: React.FC<ModalPageProps> = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = useCallback(() => {
    setShowModal(false);
  }, []);

  return (
    <div>
      <Button
        primary
        onClick={() => setShowModal(true)}
      >Modal</Button>

      <Modal
        visible={showModal}
        onClose={handleClose}
        actionBar={<Button primary onClick={handleClose}>I Accept</Button>}
      >
        <p>
          Here is an important agreement for you to accept.
        </p>
      </Modal>
    </div>
  );
};

export default ModalPage;
