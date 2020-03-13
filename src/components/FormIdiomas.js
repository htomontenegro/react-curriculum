import React from "react";
import { Form, Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
     faArrowLeft,
     faArrowCircleRight
} from "@fortawesome/free-solid-svg-icons";

const FormIdiomas = props => {
     return (
          <Card>
               <Card.Body>
                    <Card.Title>Selección de idiomas</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                         Etapa {props.pageIndex + 1} de {props.pages}
                         <div className="d-flex flex-row justify-content-between">
                              <Button
                                   variant="light"
                                   type="button"
                                   onClick={props.navigateBack}
                                   disabled={props.pageIndex === 0}
                              >
                                   <FontAwesomeIcon icon={faArrowLeft} />
                              </Button>
                              <Button variant="primary" type="submit">
                                   <FontAwesomeIcon icon={faArrowCircleRight} />
                              </Button>
                         </div>
                    </Card.Subtitle>
                    <Form.Group>
                         <Form.Check
                              custom
                              type="checkbox"
                              name="idiomas"
                              id="español"
                              label="Español"
                              onChange={props.handleChange}
                              value="español"
                         />
                    </Form.Group>
                    <Form.Group>
                         <Form.Check
                              custom
                              type="checkbox"
                              name="idiomas"
                              id="ingles"
                              label="Ingles"
                              onChange={props.handleChange}
                              value="ingles"
                         />
                    </Form.Group>
                    <Form.Group>
                         <Form.Check
                              custom
                              type="checkbox"
                              name="idiomas"
                              id="frances"
                              label="Frances"
                              onChange={props.handleChange}
                              value="frances"
                         />
                    </Form.Group>
               </Card.Body>
          </Card>
     );
};
export default FormIdiomas;
