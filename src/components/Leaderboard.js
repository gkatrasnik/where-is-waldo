import { React } from "react";
import { msToTime } from "./helpers";
import { Modal, ListGroup, Button } from "react-bootstrap";

const Leaderboard = (props) => {
  const listGroupStyle = {
    display: "flex",
    justifyContent: "space-between",
  };
  return (
    <Modal
      show={props.showGameOverModal}
      size="sm"
      backdrop={"static"}
      keyboard={false}
      centered
    >
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
              <ListGroup.Item key={i} style={listGroupStyle}>
                <div>
                  {i + 1}
                  {"."} {item.playerName}
                </div>
                <div>{msToTime(item.time)}</div>
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
