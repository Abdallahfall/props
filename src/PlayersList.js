import React from 'react';
import Player from './player';
import players from './players';
import {Row, Col} from "react-bootstrap";
const PlayersList = () => {
  return (
    <div>
      <Row>
        {players.map((player, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3}>
            <Player {...player} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default PlayersList;





