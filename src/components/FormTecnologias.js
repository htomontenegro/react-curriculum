import React, { Component } from "react";
import { Form, Button, Card } from "react-bootstrap";
import Select from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
     faArrowLeft,
     faArrowCircleRight
} from "@fortawesome/free-solid-svg-icons";

const options = [
     { value: "html", label: "html" },
     { value: "css", label: "css" },
     { value: "php", label: "php" },
     { value: "java", label: "java" },
     { value: "python", label: "python" },
     { value: "javascript", label: "javascript" },
     { value: "react", label: "react" },
     { value: "react native", label: "react native" },
     { value: "SQL", label: "SQL" },
     { value: "Rest services", label: "Rest services" }
];

class FormTecnologias extends Component {
     constructor(props) {
          super(props);

          const tecnologias = this.props.values.tecnologias
               ? this.props.values.tecnologias.map(select => {
                      return { value: select, label: select };
                 })
               : "";
          this.state = {
               tecnologias: [],
               selectedOption: tecnologias
          };
     }

     handleChange = selectedOption => {
          const tecnologias = selectedOption.map(select => {
               return select.value;
          });
          this.setState(
               {
                    tecnologias,
                    selectedOption
               },
               () => {
                    this.props.values.tecnologias = tecnologias;
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
                    border: this.props.errors.tecnologias
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
                         <Card.Title>tecnologias</Card.Title>
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
export default FormTecnologias;
