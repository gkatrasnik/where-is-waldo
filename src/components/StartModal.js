import { React, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const StartModal = (props) => {
  const [playerName, setPlayerName] = useState(null);

  return (
    <Modal show={props.showStartModal} onHide={props.toggleShowStartModal}>
      <Modal.Header closeButton>
        <Modal.Title>
          Welcome to <strong>Find Me!</strong> game
        </Modal.Title>
      </Modal.Header>

      <Form
        onSubmit={(e) => {
          props.toggleShowStartModal();
          props.handleStartModalSubmit(e, playerName);
          props.getResultsData();
        }}
      >
        <Modal.Body>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="ps-1">Enter your Nickname:</Form.Label>
            <Form.Control
              className="my-2"
              placeholder="Player1"
              onChange={(e) => setPlayerName(e.target.value)}
            />
            <Form.Text className="text-muted m-1  " required>
              Your Nickname will be displayed on leaderboard
            </Form.Text>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" variant="primary">
            Play
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default StartModal;
