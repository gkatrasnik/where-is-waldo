import { React } from "react";
import { Modal, Button } from "react-bootstrap";

const WrongFind = (props) => {
  return (
    <Modal show={props.showWrongFind} onHide={props.toggleShowWrongFind}>
      <Modal.Header closeButton>
        <Modal.Title>Wrong!</Modal.Title>
      </Modal.Header>
      <Modal.Body>Continue searching...</Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={props.toggleShowWrongFind}>
          Continue
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default WrongFind;
