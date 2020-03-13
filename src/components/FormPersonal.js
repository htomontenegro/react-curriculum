import React from "react";
import { Form, Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
     faArrowLeft,
     faArrowCircleRight,

} from "@fortawesome/free-solid-svg-icons";

const FormPersonal = props => {
     return (
          <Card>
               <Card.Body>
                    <Card.Title>Información personal</Card.Title>
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
                    <Form.Group controlId="nombre">
                         <Form.Control
                              className={
                                   props.errors.nombre ? "is-invalid" : ""
                              }
                              placeholder="Nombre"
                              onChange={props.handleChange}
                              value={props.values.nombre}
                         />
                    </Form.Group>
                    <Form.Group controlId="apellido">
                         <Form.Control
                              className={
                                   props.errors.apellido ? "is-invalid" : ""
                              }
                              placeholder="Apellido"
                              onChange={props.handleChange}
                              value={props.values.apellido}
                         />
                    </Form.Group>
                    <Form.Group controlId="ocupacion">
                         <Form.Control
                              className={
                                   props.errors.ocupacion ? "is-invalid" : ""
                              }
                              placeholder="Ocupacion"
                              onChange={props.handleChange}
                              value={props.values.ocupacion}
                         />
                    </Form.Group>

                    {/* <Button
                         variant="success"
                         type="submit"
                         disabled={
                              !(props.values.nombre && props.values.apellido)
                         }
                    >
                         Submit
                    </Button> */}
               </Card.Body>
          </Card>
     );
};
export default FormPersonal;
