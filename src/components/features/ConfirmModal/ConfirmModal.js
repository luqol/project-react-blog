import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'

const ConfirmModal = (props) => {
  return(
    <Modal {...props} centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Are you sure?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className='mb-0'>This operation completly remove this post from app.</p>
        <p>Are you sure you want to do that?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>Cancel</Button>
        <Button variant="danger" onClick={props.deletePost}>Remove</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmModal;