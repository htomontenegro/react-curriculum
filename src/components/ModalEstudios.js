import React, { Component } from "react";
import { Formik, Field, Form } from "formik";
import { Modal } from "react-bootstrap";
import * as Yup from "yup";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const validacion = Yup.object().shape({
     titulo: Yup.string()
          .min(2, "Muy corto")
          .max(50, "Muy largo")
          .required("Requerido"),
     desde: Yup.string().required("Requerido"),
     hasta: Yup.string().required("Requerido"),
     descripcion: Yup.string().max(200, "Muy largo")
});

class ModalEstudios extends Component {
     constructor(props) {
          super(props);
          this.state = {
               titulo: "",
               desde: null,
               hasta: null,
               descripcion: ""
          };

          this.handleSubmit = this.handleSubmit.bind(this);
     }

     handleSubmit(values) {
          this.props.estudio(values);
          this.setState({
               desde: null,
               hasta: null
          });
     }

     render() {
          let { show, onHide } = this.props;
          return (
               <>
                    <Modal show={show} onHide={onHide} centered>
                         <Modal.Header closeButton>
                              <Modal.Title>Nuevo estudio</Modal.Title>
                         </Modal.Header>
                         <Modal.Body>
                              <Formik
                                   initialValues={{
                                        titulo: "",
                                        desde: "",
                                        hasta: "",
                                        descripcion: ""
                                   }}
                                   validationSchema={validacion}
                                   onSubmit={(values, actions) => {
                                        this.handleSubmit(values);
                                        actions.setSubmitting(false);
                                   }}
                              >
                                   {({
                                        errors,
                                        touched,
                                        initialValues,
                                        values
                                   }) => {
                                        return (
                                             <Form autoComplete="off">
                                                  <div className="form-group">
                                                       <Field
                                                            name="titulo"
                                                            className={`form-control ${
                                                                 errors.titulo &&
                                                                 touched.titulo
                                                                      ? "is-invalid"
                                                                      : ""
                                                            }`}
                                                            placeholder="Titulo"
                                                       />
                                                       {errors.titulo &&
                                                       touched.titulo ? (
                                                            <div className="text-danger small">
                                                                 {errors.titulo}
                                                            </div>
                                                       ) : null}
                                                  </div>

                                                  <div className="form-group d-flex flex-row">
                                                       <div>
                                                            <DatePicker
                                                                 dateFormat="MM/yyyy"
                                                                 showMonthYearPicker
                                                                 name="desde"
                                                                 placeholderText="Desde"
                                                                 className={`form-control isValid ${
                                                                      errors.desde &&
                                                                      touched.desde
                                                                           ? "is-invalid"
                                                                           : ""
                                                                 }`}
                                                                 selected={
                                                                      this.state
                                                                           .desde
                                                                 }
                                                                 onChange={date => {
                                                                      this.setState(
                                                                           {
                                                                                desde: date
                                                                           }
                                                                      );
                                                                      values.desde = date;
                                                                 }}
                                                            />
                                                            {errors.desde &&
                                                            touched.desde ? (
                                                                 <div className="text-danger small">
                                                                      {
                                                                           errors.desde
                                                                      }
                                                                 </div>
                                                            ) : null}
                                                       </div>
                                                       <div>
                                                            <DatePicker
                                                                 dateFormat="MM/yyyy"
                                                                 showMonthYearPicker
                                                                 name="hasta"
                                                                 placeholderText="Hasta"
                                                                 className={`form-control isValid ${
                                                                      errors.hasta &&
                                                                      touched.hasta
                                                                           ? "is-invalid"
                                                                           : ""
                                                                 }`}
                                                                 selected={
                                                                      this.state
                                                                           .hasta
                                                                 }
                                                                 onChange={date => {
                                                                      this.setState(
                                                                           {
                                                                                hasta: date
                                                                           }
                                                                      );
                                                                      values.hasta = date;
                                                                 }}
                                                            />

                                                            {errors.hasta &&
                                                            touched.hasta ? (
                                                                 <div className="text-danger small">
                                                                      {
                                                                           errors.hasta
                                                                      }
                                                                 </div>
                                                            ) : null}
                                                       </div>
                                                  </div>
                                                  <div className="form-group">
                                                       <Field
                                                            as="textarea"
                                                            name="descripcion"
                                                            className={`form-control isValid ${
                                                                 errors.descripcion &&
                                                                 touched.descripcion
                                                                      ? "is-invalid"
                                                                      : ""
                                                            }`}
                                                            placeholder="Descripcion"
                                                       />

                                                       {errors.descripcion &&
                                                       touched.descripcion ? (
                                                            <div className="text-danger small">
                                                                 {
                                                                      errors.descripcion
                                                                 }
                                                            </div>
                                                       ) : null}
                                                  </div>

                                                  <div className="form-group">
                                                       <button
                                                            type="submit"
                                                            className="btn btn-primary w-100"
                                                       >
                                                            Guardar
                                                       </button>
                                                  </div>
                                             </Form>
                                        );
                                   }}
                              </Formik>
                         </Modal.Body>
                    </Modal>
               </>
          );
     }
}

export default ModalEstudios;
