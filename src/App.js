import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Navegacion from "./components/Navegacion";
import Formulario from "./components/Formulario";
import VistaPrevia from "./components/VistaPrevia";

class App extends Component {
     constructor(props) {
          super(props);

          this.datos = this.datos.bind(this);
          this.state = {
               personal: [],
               contacto: [],
               descripcion: "",
               idiomas: [],
               habilidades: [],
               tecnologias: [],
               estudios: [],
               experiencias: []
          };
     }

     datos = data => {
          this.setState(data);
     };

     render() {

          return (
               <div className="App">
                    <Container>
                         <Navegacion />

                         <Row>
                              <Col xl="9">
                                   <VistaPrevia
                                        id="my-canvas"
                                        data={this.state}
                                   />
                              </Col>
                              <Col xl="3">
                                   <Formulario enviaDatos={this.datos} />
                              </Col>
                         </Row>
                    </Container>
                  
               </div>
          );
     }
}

export default App;
