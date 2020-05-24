import React, { Component } from "react";
import "../App.css";
import { Card, Row, Col, ListGroup } from "react-bootstrap";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
     faBriefcase,
     faUniversity,
     faEnvelope,
     faPhone,
     faMapMarkedAlt,
     faLanguage,
     faUser,
     faHandHoldingHeart,
     faLaptopCode
} from "@fortawesome/free-solid-svg-icons";


class VistaPrevia extends Component {
     

     componentDidMount() {

 
     }

     render() {
          let {
               personal,
               contacto,
               descripcion,
               idiomas,
               habilidades,
               tecnologias,
               estudios,
               experiencias
          } = this.props.data;

          return (
               <div id="my-canvas">
                    <Row>
                         <Col lg="4" md="5" className="">
                              <Card className="text-left sidebar">
                                   <Card.Body className="text-left">
                                        <Card.Text className="py-0 my-1 sidebar-subtitulo-text text-left">
                                             <FontAwesomeIcon
                                                  className="text-white mr-1"
                                                  icon={faEnvelope}
                                             />

                                             {contacto.correo
                                                  ? contacto.correo.toLowerCase()
                                                  : "Correo"}
                                        </Card.Text>
                                        <Card.Text className="py-0 my-1 sidebar-subtitulo-text text-left">
                                             <FontAwesomeIcon
                                                  className="text-white mr-1"
                                                  icon={faPhone}
                                             />

                                             {contacto.telefono
                                                  ? contacto.telefono
                                                  : "Telefono"}
                                        </Card.Text>
                                        <Card.Text className="py-0 my-1 sidebar-subtitulo-text text-left">
                                             <FontAwesomeIcon
                                                  className="text-white mr-1"
                                                  icon={faMapMarkedAlt}
                                             />

                                             {contacto.direccion
                                                  ? contacto.direccion
                                                         .charAt(0)
                                                         .toUpperCase() +
                                                    contacto.direccion.slice(1)
                                                  : "Dirección"}
                                             {", "}

                                             {contacto.comuna
                                                  ? contacto.comuna
                                                         .charAt(0)
                                                         .toUpperCase() +
                                                    contacto.comuna.slice(1)
                                                  : "Comuna"}
                                             {", "}

                                             {contacto.ciudad
                                                  ? contacto.ciudad
                                                         .charAt(0)
                                                         .toUpperCase() +
                                                    contacto.ciudad.slice(1)
                                                  : "Ciudad"}
                                        </Card.Text>
                                   </Card.Body>
                                   <Card.Body className="">
                                        <div className="sidebar-icon">
                                             <FontAwesomeIcon
                                                  className="text-white mr-1"
                                                  icon={faUser}
                                             />
                                        </div>
                                        <Card.Title className="sidebar-titulo-text">
                                             Quien soy
                                        </Card.Title>

                                        <Card.Text className="sidebar-subtitulo-text">
                                             {descripcion
                                                  ? descripcion
                                                  : "Descripción personal"}
                                        </Card.Text>
                                   </Card.Body>
                                   <Card.Body>
                                        <div className="sidebar-icon">
                                             <FontAwesomeIcon
                                                  className="text-white mr-1"
                                                  icon={faLanguage}
                                             />
                                        </div>
                                        <Card.Title className="sidebar-titulo-text">
                                             Idiomas
                                        </Card.Title>
                                        {idiomas.length ? (
                                             idiomas.map(idioma => (
                                                  <Card.Text
                                                       key={idioma}
                                                       className="my-1 sidebar-subtitulo-text"
                                                  >
                                                       {idioma
                                                            .charAt(0)
                                                            .toUpperCase() +
                                                            idioma.slice(1)}
                                                  </Card.Text>
                                             ))
                                        ) : (
                                             <div className="my-1 sidebar-subtitulo-text">
                                                  {"idioma"
                                                       .charAt(0)
                                                       .toUpperCase() +
                                                       "idioma".slice(1)}
                                                  {"idioma"
                                                       .charAt(0)
                                                       .toUpperCase() +
                                                       "idioma".slice(1)}
                                             </div>
                                        )}
                                   </Card.Body>
                                   <Card.Body>
                                        <div className="sidebar-icon">
                                             <FontAwesomeIcon
                                                  className="text-white mr-1 "
                                                  icon={faHandHoldingHeart}
                                             />
                                        </div>
                                        <Card.Title className="sidebar-titulo-text">
                                             Habilidades
                                        </Card.Title>
                                        <div className="my-1 sidebar-subtitulo-text">
                                             {habilidades.length ? (
                                                  habilidades.map(
                                                       (habilidad, i) => (
                                                            <Card.Text
                                                                 className="my-1 sidebar-subtitulo-text"
                                                                 key={habilidad}
                                                            >
                                                                 {habilidad
                                                                      .charAt(0)
                                                                      .toUpperCase() +
                                                                      habilidad.slice(
                                                                           1
                                                                      )}
                                                            </Card.Text>
                                                       )
                                                  )
                                             ) : (
                                                  <div className="my-1 sidebar-subtitulo-text">
                                                       {"habilidades"
                                                            .charAt(0)
                                                            .toUpperCase() +
                                                            "habilidades".slice(
                                                                 1
                                                            )}
                                                       {"habilidades"
                                                            .charAt(0)
                                                            .toUpperCase() +
                                                            "habilidades".slice(
                                                                 1
                                                            )}
                                                  </div>
                                             )}
                                        </div>
                                   </Card.Body>
                                   <Card.Body>
                                        <div className="sidebar-icon">
                                             <FontAwesomeIcon
                                                  className="text-white mr-1"
                                                  icon={faLaptopCode}
                                             />
                                        </div>
                                        <Card.Title className="sidebar-titulo-text">
                                             Tecnologias
                                        </Card.Title>
                                        {tecnologias.length ? (
                                             tecnologias.map(tecnologia => (
                                                  <Card.Text
                                                       className="my-1 sidebar-subtitulo-text"
                                                       key={tecnologia}
                                                  >
                                                       {tecnologia
                                                            .charAt(0)
                                                            .toUpperCase() +
                                                            tecnologia.slice(1)}
                                                  </Card.Text>
                                             ))
                                        ) : (
                                             <Card.Text className="my-1 sidebar-subtitulo-text">
                                                  Tecnologias...
                                             </Card.Text>
                                        )}
                                   </Card.Body>
                              </Card>
                         </Col>
                         <Col lg="8" md="7">
                              <Card className="">
                                   <Card.Body className="">
                                        <Card.Title className="nombre-apellido">
                                             <span className="mr-2">
                                                  {personal.nombre
                                                       ? `${personal.nombre} `
                                                       : "nombre"}
                                             </span>
                                             <span>
                                                  {personal.apellido
                                                       ? `${personal.apellido}`
                                                       : "APELLIDO"}
                                             </span>
                                        </Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted ocupacion">
                                             {personal.ocupacion
                                                  ? `${personal.ocupacion}`
                                                  : "Ocupación"}
                                        </Card.Subtitle>
                                   </Card.Body>
                              </Card>

                              <Card className="card">
                                   <Card.Body>
                                        <Card.Title className="titulo">
                                             <FontAwesomeIcon
                                                  className="text-success mr-1"
                                                  icon={faBriefcase}
                                             />
                                             experiencia profesional
                                        </Card.Title>
                                        <ListGroup variant="flush">
                                             {experiencias.length ? (
                                                  experiencias.map(
                                                       (experiencia, i) => (
                                                            <ListGroup.Item
                                                                 className="text-left"
                                                                 key={i}
                                                            >
                                                                 <div className="experiencia-titulo">
                                                                      {
                                                                           experiencia.titulo
                                                                      }
                                                                 </div>
                                                                 <div className="mb-2 text-muted">
                                                                      {moment(
                                                                           experiencia.desde
                                                                      ).format(
                                                                           "MM/YYYY"
                                                                      )}
                                                                      {" al "}
                                                                      {moment(
                                                                           experiencia.hasta
                                                                      ).format(
                                                                           "MM/YYYY"
                                                                      )}
                                                                 </div>
                                                                 <div>
                                                                      {
                                                                           experiencia.descripcion
                                                                      }
                                                                 </div>
                                                            </ListGroup.Item>
                                                       )
                                                  )
                                             ) : (
                                                  // <span>No se ha agregado experiencia</span>
                                                  <div>
                                                       <ListGroup.Item className="text-left pl-4  experiencia-list">
                                                            <div className="experiencia-titulo">
                                                                 titulo
                                                            </div>
                                                            <div className="mb-2 text-muted">
                                                                 desde hasta
                                                            </div>
                                                            <div>
                                                                 Lorem ipsum
                                                                 dolor sit amet,
                                                                 consectetur
                                                                 adipiscing
                                                                 elit, sed do
                                                                 eiusmod tempor
                                                                 incididunt ut
                                                                 labore et
                                                                 dolore magna
                                                                 aliqua. Ut enim
                                                                 ad minim
                                                                 veniam, quis
                                                                 nostrud velit
                                                                 esse
                                                            </div>
                                                       </ListGroup.Item>
                                                  </div>
                                             )}
                                        </ListGroup>
                                   </Card.Body>
                              </Card>

                              <Card className="card">
                                   <Card.Body>
                                        <Card.Title className="titulo">
                                             <FontAwesomeIcon
                                                  className="text-success mr-1"
                                                  icon={faUniversity}
                                             />
                                             academico
                                        </Card.Title>

                                        <ListGroup variant="flush">
                                             {estudios.length ? (
                                                  estudios.map((estudio, i) => (
                                                       <ListGroup.Item
                                                            className="text-left pl-4 experiencia-list"
                                                            key={i}
                                                       >
                                                            <div className="experiencia-titulo">
                                                                 {
                                                                      estudio.titulo
                                                                 }
                                                            </div>
                                                            <div className="mb-2 text-muted">
                                                                 {moment(
                                                                      estudio.desde
                                                                 ).format(
                                                                      "MM/YYYY"
                                                                 )}
                                                                 {" al "}
                                                                 {moment(
                                                                      estudio.hasta
                                                                 ).format(
                                                                      "MM/YYYY"
                                                                 )}
                                                            </div>
                                                            <div>
                                                                 {
                                                                      estudio.descripcion
                                                                 }
                                                            </div>
                                                       </ListGroup.Item>
                                                  ))
                                             ) : (
                                                  // <span>No se ha agregado experiencia</span>
                                                  <div>
                                                       <ListGroup.Item className="text-left pl-4  experiencia-list">
                                                            <div className="experiencia-titulo">
                                                                 titulo
                                                            </div>
                                                            <div className="mb-2 text-muted">
                                                                 desde hasta
                                                            </div>
                                                            <div>
                                                                 Lorem ipsum
                                                                 dolor sit amet,
                                                                 consectetur
                                                                 adipiscing
                                                                 elit, sed do
                                                                 eiusmod tempor
                                                                 incididunt ut
                                                                 labore et
                                                                 dolore magna
                                                                 aliqua. Ut enim
                                                                 ad minim
                                                                 veniam, quis
                                                                 nostrud velit
                                                                 esse
                                                            </div>
                                                       </ListGroup.Item>
                                                       <ListGroup.Item className="text-left pl-4  experiencia-list">
                                                            <div className="experiencia-titulo">
                                                                 titulo
                                                            </div>
                                                            <div className="mb-2 text-muted">
                                                                 desde hasta
                                                            </div>
                                                            <div>
                                                                 Lorem ipsum
                                                                 dolor sit amet,
                                                                 consectetur
                                                                 adipiscing
                                                                 elit, sed do
                                                                 eiusmod tempor
                                                                 incididunt ut
                                                                 labore et
                                                                 dolore magna
                                                                 aliqua. Ut enim
                                                                 ad minim
                                                                 veniam, quis
                                                                 nostrud velit
                                                                 esse
                                                            </div>
                                                       </ListGroup.Item>
                                                  </div>
                                             )}
                                        </ListGroup>
                                   </Card.Body>
                              </Card>
                         </Col>
                    </Row>
               </div>
          );
     }
}
export default VistaPrevia;
