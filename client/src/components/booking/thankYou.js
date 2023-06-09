import React from "react";
import { Row, Col } from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShrimp} from "@fortawesome/free-solid-svg-icons";

export default _ => {
  return (
    <div>
      <Row noGutters className="text-center">
        <Col>
          <p className="thanks-header">Danke schön!</p>
          <FontAwesomeIcon icon={faShrimp} size="10x"/>
          <p style={{marginTop: '80px'}} className="thanks-subtext">
            Sie sollten eine E-Mail mit den Details Ihrer Reservierung erhalten.
          </p>
        </Col>
      </Row>
    </div>
  );
};
