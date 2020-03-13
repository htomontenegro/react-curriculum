import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";
import ModalExperiencia from "./ModalExperiencia";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
     faTimesCircle,
     faArrowLeft,
     faArrowCircleRight
} from "@fortawesome/free-solid-svg-icons";

class FormExperiencia extends Component {
     constructor(props) {
          super(props);

          const items = this.props.values.experiencias
               ? this.props.values.experiencias
                    ? this.props.values.experiencias.map(item => {
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
               items: [...this.props.values.experiencias, values],
               showModal: false
          });
          this.props.values.experiencias = [
               ...this.props.values.experiencias,
               values
          ];
     };
     _eliminarItem = index => {
          let items = this.state.items.filter((item, i) => {
               return i !== index;
          });

          this.setState({
               items
          });
          this.props.values.experiencias = items;
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
                              <Card.Title>Experiencia laboral</Card.Title>
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
                                        <Button variant="primary" type="submit">
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
                                                            Experiencia
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
                                             No hay experiencia agregada
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
                                   Agregar experiencia
                              </Button>
                         </Card.Body>
                    </Card>
                    <ModalExperiencia
                         item={this._agregarItem}
                         show={this.state.showModal}
                         onHide={modalClose}
                    />
               </div>
          );
     }
}
export default FormExperiencia;
