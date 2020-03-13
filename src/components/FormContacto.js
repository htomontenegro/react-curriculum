import React from "react";
import { Card, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
     faArrowLeft,
     faArrowCircleRight
} from "@fortawesome/free-solid-svg-icons";
const FormContacto = props => {
     return (
          <div>
               <Card>
                    <Card.Body>
                         <Card.Title>Información de contacto</Card.Title>
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
                                        <FontAwesomeIcon
                                             icon={faArrowCircleRight}
                                        />
                                   </Button>
                              </div>
                         </Card.Subtitle>
                         <Form.Group controlId="correo">
                              <Form.Control
                                   className={
                                        props.errors.correo ? "is-invalid" : ""
                                   }
                                   placeholder="correo"
                                   onChange={props.handleChange}
                                   value={props.values.correo}
                              />
                         </Form.Group>
                         <Form.Group controlId="telefono">
                              <Form.Control
                                   className={
                                        props.errors.telefono
                                             ? "is-invalid"
                                             : ""
                                   }
                                   placeholder="telefono"
                                   onChange={props.handleChange}
                                   value={props.values.telefono}
                              />
                         </Form.Group>
                         <Form.Group controlId="direccion">
                              <Form.Control
                                   className={
                                        props.errors.direccion
                                             ? "is-invalid"
                                             : ""
                                   }
                                   placeholder="direccion"
                                   onChange={props.handleChange}
                                   value={props.values.direccion}
                              />
                         </Form.Group>
                         <Form.Group controlId="comuna">
                              <Form.Control
                                   className={
                                        props.errors.comuna ? "is-invalid" : ""
                                   }
                                   placeholder="comuna"
                                   onChange={props.handleChange}
                                   value={props.values.comuna}
                              />
                         </Form.Group>
                         <Form.Group controlId="ciudad">
                              <Form.Control
                                   className={
                                        props.errors.ciudad ? "is-invalid" : ""
                                   }
                                   placeholder="ciudad"
                                   onChange={props.handleChange}
                                   value={props.values.ciudad}
                              />
                         </Form.Group>
                    </Card.Body>
               </Card>
          </div>
     );
};
export default FormContacto;
