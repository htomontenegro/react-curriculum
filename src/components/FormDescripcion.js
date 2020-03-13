import React from "react";
import { Form, Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
     faArrowLeft,
     faArrowCircleRight
} from "@fortawesome/free-solid-svg-icons";
const FormDescripcion = props => {
     return (
          <Card>
               <Card.Body>
                    <Card.Title>Descripcion personal</Card.Title>
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
                    <Form.Group
                         controlId="descripcion"
                    >
                         <Form.Label>
                              Ingrese una breve descripcion suya:
                         </Form.Label>
                         <Form.Control
                              className={
                                   props.errors.descripcion ? "is-invalid" : ""
                              }
                              onChange={props.handleChange}
                              value={props.values.descripcion}
                              as="textarea"
                              rows="3"
                         />
                    </Form.Group>
               </Card.Body>
          </Card>
     );
};
export default FormDescripcion;
