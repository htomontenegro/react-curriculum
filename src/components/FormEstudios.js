import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";
import ModalEstudios from "./ModalEstudios";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
     faTimesCircle,
     faArrowLeft,
     faArrowCircleRight
} from "@fortawesome/free-solid-svg-icons";

class FormEstudios extends Component {
     constructor(props) {
          super(props);

          const items = this.props.values.estudios
               ? this.props.values.estudios
                    ? this.props.values.estudios.map(item => {
                           return item;
                      })
                    : []
               : [];

          this.state = {
               showModal: false,
               items
          };
          this._agregarItem = this._agregarItem.bind(this);
     }

     _agregarItem = values => {
          this.setState({
               items: [...this.props.values.estudios, values],
               showModal: false
          });
          this.props.values.estudios = [...this.props.values.estudios, values];
     };
     _eliminarItem = index => {
          let items = this.state.items.filter((estudio, i) => {
               return i !== index;
          });

          this.setState({
               items
          });
          this.props.values.estudios = items;
     };

     render() {
          const props = this.props;

          let modalClose = () => {
               this.setState({
                    showModal: false
               });
          };
          return (
               <div>
                    <Card>
                         <Card.Body>
                              <Card.Title>Estudios</Card.Title>
                              <Card.Subtitle className="mb-2 text-muted">
                                   Etapa {props.pageIndex + 1} de {props.pages}
                                   <div className="d-flex flex-row justify-content-between">
                                        <Button
                                             variant="light"
                                             type="button"
                                             onClick={props.navigateBack}
                                             disabled={props.pageIndex === 0}
                                        >
                                             <FontAwesomeIcon
                                                  icon={faArrowLeft}
                                             />
                                        </Button>
                                        <Button
                                             variant="primary"
                                             type="submit"
                                             onClick={() => {
                                                  props.errors.estudios
                                                       ? this.setState({
                                                              showModal: true
                                                         })
                                                       : this.setState({
                                                              showModal: false
                                                         });
                                             }}
                                        >
                                             <FontAwesomeIcon
                                                  icon={faArrowCircleRight}
                                             />
                                        </Button>
                                   </div>
                              </Card.Subtitle>
                              <Card.Body>
                                   {this.state.items.length ? (
                                        <table className="table">
                                             <thead className="">
                                                  <tr>
                                                       <th className="text-left">
                                                            Estudios
                                                       </th>
                                                       <th className=""></th>
                                                  </tr>
                                             </thead>
                                             {this.state.items.map(
                                                  (item, i) => (
                                                       <tbody key={i}>
                                                            <tr>
                                                                 <td className="col-3 text-left">
                                                                      <div className="d-flex flex-column small">
                                                                           <span className="">
                                                                                {
                                                                                     item.titulo
                                                                                }
                                                                           </span>
                                                                           <span>
                                                                                {moment(
                                                                                     item.desde
                                                                                ).format(
                                                                                     "MM/YYYY"
                                                                                )}
                                                                                {
                                                                                     " al "
                                                                                }
                                                                                {moment(
                                                                                     item.hasta
                                                                                ).format(
                                                                                     "MM/YYYY"
                                                                                )}
                                                                           </span>
                                                                      </div>
                                                                 </td>
                                                                 <td>
                                                                      <FontAwesomeIcon
                                                                           onClick={() =>
                                                                                this._eliminarItem(
                                                                                     i
                                                                                )
                                                                           }
                                                                           className="text-danger"
                                                                           icon={
                                                                                faTimesCircle
                                                                           }
                                                                      />
                                                                 </td>
                                                            </tr>
                                                       </tbody>
                                                  )
                                             )}
                                        </table>
                                   ) : (
                                        <Card.Subtitle>
                                             No hay estudios agregados
                                        </Card.Subtitle>
                                   )}
                              </Card.Body>
                              <Button
                                   variant="info"
                                   className="btn btn-sm"
                                   onClick={() =>
                                        this.setState({
                                             showModal: true
                                        })
                                   }
                              >
                                   Agregar estudios
                              </Button>
                         </Card.Body>
                    </Card>
                    <ModalEstudios
                         estudio={this._agregarItem}
                         show={this.state.showModal}
                         onHide={modalClose}
                    />
               </div>
          );
     }
}
export default FormEstudios;
