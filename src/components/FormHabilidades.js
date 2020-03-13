import React, { Component } from "react";
import { Form, Button, Card } from "react-bootstrap";
import Select from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
     faArrowLeft,
     faArrowCircleRight
} from "@fortawesome/free-solid-svg-icons";

const options = [
     { value: "estrategico", label: "estrategico" },
     { value: "metodico", label: "metodico" },
     { value: "responsable", label: "responsable" },
     { value: "sociable", label: "sociable" }
];

class FormHabilidades extends Component {
     constructor(props) {
          super(props);

          const habilidades = this.props.values.habilidades
               ? this.props.values.habilidades.map(select => {
                      return { value: select, label: select };
                 })
               : "";

          this.state = {
               habilidades: [],
               selectedOption: habilidades
          };
     }

     handleChange = selectedOption => {
          const habilidades = selectedOption.map(select => {
               return select.value;
          });
          this.setState(
               {
                    habilidades,
                    selectedOption
               },
               () => {
                    this.props.values.habilidades = habilidades;
               }
          );
     };

     render() {
          const props = this.props;

          const customStyles = {
               option: (provided, state) => ({
                    ...provided
               }),
               control: provided => ({
                    ...provided,
                    border: this.props.errors.habilidades
                         ? "1px solid red"
                         : "",
               }),
               singleValue: (provided, state) => {
                    const opacity = state.isDisabled ? 0.5 : 1;
                    const transition = "opacity 300ms";

                    return { ...provided, opacity, transition };
               }
          };

          return (
               <Card>
                    <Card.Body>
                         <Card.Title>Habilidades</Card.Title>
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

                         <Form.Group>
                              <Select
                                   styles={customStyles}
                                   value={this.state.selectedOption}
                                   onChange={this.handleChange}
                                   options={options}
                                   isMulti
                                   placeholder="Seleccione"
                              />
                         </Form.Group>
                    </Card.Body>
               </Card>
          );
     }
}
export default FormHabilidades;
