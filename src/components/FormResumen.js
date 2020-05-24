import React, { Component } from "react";
import { Card } from "react-bootstrap";
// import DocumentoPDF from "./Pdf";
// import { PDFDownloadLink } from "@react-pdf/renderer";

const FormResumen = (props) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Listo</Card.Title>
        <Card.Text>Su portafolio se encuentra listo</Card.Text>
        {/* {this.state.contacto ? (
          <PDFDownloadLink
            document={<DocumentoPDF data={this.state} />}
            fileName="cv.pdf"
          >
            {({ blob, url, loading, error }) =>
              loading ? "Generando documento..." : "Descargar PDF"
            }
          </PDFDownloadLink>
        ) : (
          <div>Link aun no disponible</div>
        )} */}
      </Card.Body>
    </Card>
  );
};

export default FormResumen;
