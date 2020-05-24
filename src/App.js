import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Navegacion from "./components/Navegacion";
import Formulario from "./components/Formulario";
import VistaPrevia from "./components/VistaPrevia";
import DocumentoPDF from "./components/Pdf";
import { Button } from "react-bootstrap";

import { PDFViewer, PDFDownloadLink, ReactPDF } from "@react-pdf/renderer";

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
      experiencias: [],
      listo: false,
    };
  }

  datos = (data) => {
    this.setState(data);
  };

  componentDidUpdate(prevProps, prevState) {}

  componentDidMount() {}
  render() {
    return (
      <div id="App" className="App">
        <Container>
          <Navegacion />
          <Row ref="row">
            <Col lg="7" md="8" sm="12">
              <VistaPrevia id="my-canvas" data={this.state} />
            </Col>
            <Col lg="5" md="4" sm="12">
              <Formulario enviaDatos={this.datos} />
              <br></br>

              {/* <PDFViewer style={{ width: "500px", height: "900px" }}>
                <DocumentoPDF data={this.state} />
              </PDFViewer> */}

              {this.state.listo ? (
                <PDFDownloadLink
                  document={<DocumentoPDF data={this.state} />}
                  fileName="cv.pdf"
                >
                  {({ blob, url, loading, error }) =>
                    loading ? (
                      "Cargando..."
                    ) : (
                      <Button variant="success">
                        Pulse aquí para descargar el documento PDF
                      </Button>
                    )
                  }
                </PDFDownloadLink>
              ) : (
                <div>Link de descarga aun no disponible</div>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
