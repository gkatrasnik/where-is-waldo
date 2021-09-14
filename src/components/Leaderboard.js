import { React } from "react";
import { msToTime } from "./helpers";
import { Modal, ListGroup, Button } from "react-bootstrap";

const Leaderboard = (props) => {
  return (
    <Modal show={props.showGameOverModal} backdrop={"static"} keyboard={false}>
      <Modal.Header>
        <Modal.Title>Leaderboard</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          <ListGroup.Item>
            <strong>Your time: {msToTime(props.gameTime)}</strong>
          </ListGroup.Item>
        </ListGroup>
        <br />
        <ListGroup>
          {props.resultsData.map((item, i) => {
            return (
              <ListGroup.Item key={i}>
                {i + 1}
                {"."} {item.playerName}, time:
                {msToTime(item.time)}
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="primary"
          onClick={() => {
            props.toggleShowGameOverModal();
            props.playAgain();
          }}
        >
          Play Again
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Leaderboard;
