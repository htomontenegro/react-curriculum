import React, { Component } from "react";
import { Formik } from "formik";
import { Form } from "react-bootstrap";
import * as Yup from "yup";
import Wiz from "./Wiz";
import FormPersonal from "./FormPersonal";
import FormContacto from "./FormContacto";
import FormDescripcion from "./FormDescripcion";
import FormIdiomas from "./FormIdiomas";
import FormHabilidades from "./FormHabilidades";
import FormTecnologias from "./FormTecnologias";
import FormEstudios from "./FormEstudios";
import FormExperiencia from "./FormExperiencia";
import FormResumen from "./FormResumen";

const validacion = pageIndex => {
     console.log(pageIndex);
     let rule = "";
     switch (pageIndex) {
          case 0:
               rule = {
                    nombre: Yup.string()
                         .min(1, "Muy corto")
                         .max(12, "Muy largo")
                         .required("Requerido"),
                    apellido: Yup.string()
                         .min(1, "Muy corto")
                         .max(12, "Muy largo")
                         .required("Requerido"),
                    ocupacion: Yup.string()
                         .min(1, "Muy corto")
                         .max(12, "Muy largo")
                         .required("Requerido")
               };
               break;

          case 1:
               rule = {
                    correo: Yup.string()
                         .email()
                         .required("Requerido"),
                    telefono: Yup.number()
                         .min(100000000)
                         .max(999999999)
                         .required("Requerido"),
                    direccion: Yup.string().required("Requerido"),
                    comuna: Yup.string().required("Requerido"),
                    ciudad: Yup.string().required("Requerido")
               };
               break;
          case 2:
               rule = {
                    descripcion: Yup.string()
                         .max(100, "Muy largo")
                         .required("Requerido")
               };
               break;
          case 4:
               rule = {
                    habilidades: Yup.string().required("Requerido")
               };
               break;
          case 6:
               rule = {
                    estudios: Yup.string().required("Requerido")
               };
               break;

          default:
     }
     return Yup.object().shape(rule);
};

const initialValues = {
     nombre: "",
     apellido: "",
     ocupacion: "",
     correo: "",
     telefono: "",
     direccion: "",
     comuna: "",
     ciudad: "",
     descripcion: "",
     idiomas: "",
     habilidad: "",
     habilidades: "",
     tecnologias: "",
     estudios: "",
     experiencias: ""
};
class Formulario extends Component {
     constructor(props) {
          super(props);
          this.state = {};
     }

     render() {
          return (
               <Wiz
                    pages={[
                         FormPersonal,
                         FormContacto,
                         FormDescripcion,
                         FormIdiomas,
                         FormHabilidades,
                         FormTecnologias,
                         FormEstudios,
                         FormExperiencia,
                         FormResumen
                    ]}
               >
                    {wizProps => {
                         return (
                              <div className="mt-2">
                                   <Formik
                                        initialValues={initialValues}
                                        validationSchema={validacion(
                                             wizProps.pageIndex
                                        )}
                                        onSubmit={(
                                             values,
                                             { setSubmitting }
                                        ) => {
                                             const pageIndex =
                                                  wizProps.pageIndex;
                                             switch (pageIndex) {
                                                  case 0:
                                                       this.props.enviaDatos({
                                                            personal: {
                                                                 nombre:
                                                                      values.nombre,
                                                                 apellido:
                                                                      values.apellido,
                                                                 ocupacion:
                                                                      values.ocupacion
                                                            }
                                                       });
                                                       break;
                                                  case 1:
                                                       this.props.enviaDatos({
                                                            contacto: {
                                                                 correo:
                                                                      values.correo,
                                                                 telefono:
                                                                      values.telefono,
                                                                 direccion:
                                                                      values.direccion,
                                                                 comuna:
                                                                      values.comuna,
                                                                 ciudad:
                                                                      values.ciudad
                                                            }
                                                       });
                                                       break;
                                                  case 2:
                                                       this.props.enviaDatos({
                                                            descripcion:
                                                                 values.descripcion
                                                       });
                                                       break;
                                                  case 3:
                                                       this.props.enviaDatos({
                                                            idiomas:
                                                                 values.idiomas
                                                       });
                                                       break;
                                                  case 4:
                                                       this.props.enviaDatos({
                                                            habilidades:
                                                                 values.habilidades
                                                       });
                                                       break;
                                                  case 5:
                                                       this.props.enviaDatos({
                                                            tecnologias:
                                                                 values.tecnologias
                                                       });
                                                       break;
                                                  case 6:
                                                       this.props.enviaDatos({
                                                            estudios:
                                                                 values.estudios
                                                       });
                                                       break;
                                                  case 7:
                                                       this.props.enviaDatos({
                                                            experiencias:
                                                                 values.experiencias
                                                       });
                                                       break;
                                                  default:
                                             }
                                             wizProps.navigateNext();
                                        }}
                                   >
                                        {props => {
                                             const { handleSubmit } = props;
                                             return (
                                                  <Form
                                                       onSubmit={handleSubmit}
                                                       autoComplete="off"
                                                  >
                                                       {wizProps.renderPage(
                                                            props
                                                       )}
                                                  </Form>
                                             );
                                        }}
                                   </Formik>
                              </div>
                         );
                    }}
               </Wiz>
          );
     }
}

export default Formulario;
