import { React, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const StartModal = (props) => {
  const [playerName, setPlayerName] = useState("");

  return (
    <Modal
      show={props.showStartModal}
      size="sm"
      backdrop={"static"}
      keyboard={false}
      centered
    >
      <Modal.Header>
        <Modal.Title>
          Welcome to <strong>Find Me!</strong>
        </Modal.Title>
      </Modal.Header>

      <Form
        onSubmit={(e) => {
          props.toggleShowStartModal();
          props.handleStartModalSubmit(e, playerName);
          props.startGame();
        }}
      >
        <Modal.Body>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="ps-1">Enter your Nickname:</Form.Label>
            <Form.Control
              className="my-2"
              placeholder="Player1"
              onChange={(e) => setPlayerName(e.target.value)}
              value={playerName}
              required
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
      <div className="text-muted form-text ms-1">
        Icon by{" "}
        <a
          href="https://www.flaticon.com/authors/dimitry-miroliubov"
          title="Dimitry Miroliubov"
        >
          Dimitry Miroliubov
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          flaticon
        </a>
      </div>
      <div className="text-muted form-text m-1 mt-0">
        Background by{" "}
        <a
          href="https://www.instagram.com/danielkeoghart/"
          title="Daniel Keogh"
        >
          Daniel Keogh
        </a>
      </div>
    </Modal>
  );
};

export default StartModal;
