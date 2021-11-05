import { Modal } from 'react-bootstrap';
const MyModal = ({
  modalShow,
  setModalShow,
  content
}) => {
  return (
    
      <Modal
        size="md"
        show={modalShow}
        onHide={() => setModalShow(false)}
        aria-labelledby="example-modal-sizes-title-md"
        className="my-modal"
        centered
      >
        <Modal.Body>
         <h1>{content}</h1>
        </Modal.Body>
      </Modal>
    
  );
};

export default MyModal;
