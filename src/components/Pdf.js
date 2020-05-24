import React from "react";
import moment from "moment";
import {
  Page,
  Text,
  View,
  Image,
  Document,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

const HeaderNav = () => (
  <View style={styles.cabecera}>
    <Text style={styles.textoCabecera}>Portfolio / Curriculum</Text>
  </View>
);

const SeccionContacto = ({ contacto }) => (
  <View style={styles.seccion}>
    <View style={styles.sccionIconoTitulo}>
      <Image style={[styles.icono]} src={`assets/img/contact.png`} />
      <Text style={styles.tituloSeccion}>Contacto</Text>
    </View>
    <Text style={styles.subtituloSeccion}>{contacto.correo}</Text>
    <Text style={styles.subtituloSeccion}>{contacto.telefono}</Text>
    <Text style={[styles.subtituloSeccion, { textTransform: "capitalize" }]}>
      {`${contacto.direccion}, ${contacto.comuna}, ${contacto.ciudad}`}
    </Text>
  </View>
);

const SeccionDescripcionPersonal = ({ descripcion }) => (
  <View style={styles.seccion}>
    <View style={styles.sccionIconoTitulo}>
      <Image style={[styles.icono]} src={`assets/img/avatar.png`} />
      <Text style={styles.tituloSeccion}>Quien soy</Text>
    </View>

    <Text style={styles.subtituloSeccion}>{descripcion}</Text>
  </View>
);

const SeccionItems = ({ items }) => {
  return (
    <View style={styles.seccionDescripcion}>
      {items ? (
        items.map((item, i) => (
          <Text key={i} style={styles.subtituloSeccion}>
            {item} {i !== items.length - 1 ? " - " : ""}
          </Text>
        ))
      ) : (
        <Text style={styles.subtituloSeccion}>item</Text>
      )}
    </View>
  );
};

const Nombre = ({ personal }) => (
  <View style={styles.card}>
    <Text
      style={styles.nombre}
    >{`${personal.nombre} ${personal.apellido}`}</Text>
    <Text style={styles.ocupacion}>{`${personal.ocupacion}`}</Text>
  </View>
);
const CardTitulo = ({ titulo, imagen }) => (
  <View style={[styles.cardSeccion]}>
    <Image style={[styles.icono]} src={`assets/img/${imagen}`} />
    <Text style={[styles.cardLabel]}>{titulo}</Text>
  </View>
);

const Card = ({ items }) =>
  items.map((item, i) => {
    return (
      <View key={i} style={[styles.card]}>
        <View style={{ paddingLeft: 18 }}>
          <Text style={styles.cardTitulo}>{`${item.titulo}`}</Text>
          <Text style={styles.cardSubtitulo}>
            {moment(item.desde).format("MM/YYYY")}
            {" al "}
            {moment(item.hasta).format("MM/YYYY")}
          </Text>
          <Text style={styles.cardDescripcion}>{`${item.descripcion}`}</Text>
        </View>
      </View>
    );
  });

const DocumentoPDF = ({ data }) => {
  console.log(data);
  return (
    <Document>
      <Page>
        <View style={styles.body}>
          <HeaderNav />
          <View style={styles.container}>
            <View style={[styles.colum, styles.lateral]}>
              <SeccionContacto contacto={data.contacto} />

              <SeccionDescripcionPersonal descripcion={data.descripcion} />
              <View style={styles.seccion}>
                <View style={styles.sccionIconoTitulo}>
                  <Image
                    style={[styles.icono]}
                    src={`assets/img/language.png`}
                  />
                  <Text style={styles.tituloSeccion}>Idiomas</Text>
                </View>
                <SeccionItems items={data.idiomas} />
              </View>
              <View style={styles.seccion}>
                <View style={styles.sccionIconoTitulo}>
                  <Image style={[styles.icono]} src={`assets/img/skill.png`} />
                  <Text style={styles.tituloSeccion}>Habilidades</Text>
                </View>

                <SeccionItems items={data.habilidades} />
              </View>
              <View style={styles.seccion}>
                <View style={styles.sccionIconoTitulo}>
                  <Image style={[styles.icono]} src={`assets/img/tec.png`} />
                  <Text style={styles.tituloSeccion}>Tecnologias</Text>
                </View>

                <SeccionItems items={data.tecnologias} />
              </View>
            </View>

            <View style={[styles.colum, { width: "70%" }]}>
              <Nombre personal={data.personal} />
              <CardTitulo
                titulo="Experiencia Profesional"
                imagen="maletin.png"
              />
              <Card items={data.experiencias} />
              <CardTitulo titulo="Formacion Academica" imagen="academico.png" />
              <Card items={data.estudios} />
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

Font.register({
  family: "Manrope",
  src: "fonts/Manrope-VariableFont_wght.ttf",
});

const styles = StyleSheet.create({
  body: {
    padding: "0 0",
    margin: "0 0",
    fontFamily: "Manrope",
    backgroundColor: "#ECE9E6",
    height: "99.9vh",
  },
  container: {
    // paddingTop: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    padding: "0 0",
    margin: "0 0",
    // border:3,
    // borderColor:"red"
  },
  icono: {
    width: 18,
    height: 18,
  },
  cabecera: {
    backgroundColor: "#343a40",
    height: "50",
    marginBottom: 5,
    display: "flex",
    paddingLeft: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  textoCabecera: {
    fontSize: "14",
    color: "#FFF",
  },

  colum: {
    padding: "0 15",
    borderRadius: 3,
    height: "99.9vh",
  },

  lateral: {
    width: "30%",
    backgroundColor: "#2b4654",
    color: "#FFF",
    // position:"absolute",
    // top:0,
    // bottom:0
  },
  seccion: { padding: "20 0", textAlign: "center" },

  sccionIconoTitulo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  seccionDescripcion: {
    textAlign: "left",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  tituloSeccion: {
    fontSize: 12,
    fontWeight: "bold",
    letterSpacing: 0.8,
    paddingBottom: 7,
    textAlign: "left",
  },
  subtituloSeccion: {
    fontSize: 10,
  },

  cardSeccion: {
    padding: "7 15",
    marginBottom: "5",
    backgroundColor: "#FFF",
    borderRadius: 3,
    borderBottomColor: "#CCC",
    borderBottomWidth: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  card: {
    padding: "15 15",
    backgroundColor: "#FFF",
    marginBottom: "5",
    borderRadius: 3,
  },
  cardLabel: {
    fontSize: 13,
    marginBottom: 0,
  },
  cardTitulo: {
    fontSize: 12,
    marginBottom: 5,
    textTransform: "capitalize",
  },
  cardSubtitulo: {
    fontSize: 11,
    color: "#6c757d",
    marginBottom: 5,
  },
  cardDescripcion: {
    fontSize: 12,
    fontWeight: "light",
  },
  nombre: {
    textTransform: "uppercase",
    fontSize: 22.5,
    letterSpacing: 0.5,
  },
  ocupacion: {
    textTransform: "uppercase",
    color: "#6c757d",
    letterSpacing: 0.9,
    fontSize: 12,
  },
});

export default DocumentoPDF;
