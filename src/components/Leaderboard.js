import { React } from "react";
import { msToTime } from "./helpers";
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
          <ListGroup.Item>Your time: {msToTime(props.gameTime)}</ListGroup.Item>
        </ListGroup>
        <ListGroup>
          {props.resultsData.map((item, i) => {
            return (
              <ListGroup.Item key={i}>
                {item.playerName}, time:
                {msToTime(item.time)}s
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
