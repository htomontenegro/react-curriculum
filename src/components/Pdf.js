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
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

class Pdf extends Component {
     constructor(props) {
          super(props);
          console.log(props);
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
               <Document>
                    <Page size="A4" >
                         <View className="col-4">s </View>
                    </Page>
               </Document>
          );
     }
}
export default Pdf;
