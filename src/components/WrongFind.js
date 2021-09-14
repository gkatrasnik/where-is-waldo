import { React } from "react";
import { Modal, Button } from "react-bootstrap";

const WrongFind = (props) => {
  return (
    <Modal
      show={props.showWrongFind}
      size="sm"
      onHide={props.toggleShowWrongFind}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Nope!</Modal.Title>
      </Modal.Header>
      <Modal.Body>Keep looking...</Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={props.toggleShowWrongFind}>
          Continue
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default WrongFind;
