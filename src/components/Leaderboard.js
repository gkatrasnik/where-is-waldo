import { React } from "react";
import { Modal, ListGroup, Button } from "react-bootstrap";

const Leaderboard = (props) => {
  return (
    <Modal
      show={props.showGameOverModal}
      onHide={props.toggleShowGameOverModal}
    >
      <Modal.Header closeButton>
        <Modal.Title>Leaderboard</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <ListGroup>
          {props.resultsData.map((item, i) => {
            return (
              <ListGroup.Item key={i}>
                {item.playerName}, time:
                {item.time}s
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button
          type="submit"
          variant="primary"
          onClick={props.toggleShowGameOverModal}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Leaderboard;
