<template>
  <div>
    <h4>Modificar Organizaciones</h4>
    <div class="dropdown">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >Organizaciones</button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <div v-for="actor in actores" :key="actor.id">
          <a class="dropdown-item" href="#" @click="seleccionar(actor.id)">{{actor.nombre}}</a>
        </div>
      </div>
    </div>

    <br />
    <form v-if="valid">
      <div class="form-group">
        <label>Nombre de la Organización</label>
        <input
          type="text"
          class="form-control"
          v-model="nombre"
          aria-describedby="emailHelp"
          placeholder="Nombre de la Organización"
        />
      </div>

      <div class="form-group">
        <label>Ubicación de la Organización</label>
        <input type="text" v-model="ubicacion" class="form-control" placeholder="Ubicación" />
      </div>

      <!--
      <div class="form-group">
        <label>Contraseña de la Organización</label>
        <input type="password" v-model="contrasena" class="form-control" placeholder="Contraseña" />
      </div>
      -->
      <div class="form-group">
        <label>Correo electrónico de la Organización</label>
        <input
          type="email"
          v-model="email_institucion"
          class="form-control"
          placeholder="name@example.com"
        />
      </div>

      <div class="form-group">
        <label>Teléfono de la Organización</label>
        <input type="number" v-model="telefono" class="form-control" />
      </div>

      <div class="form-group">
        <label>Nombre del Gerente/Representante</label>
        <input type="text" v-model="representante" class="form-control" />
      </div>

      <div class="form-group">
        <label>Correo electrónico del Encargado</label>
        <input
          type="text"
          v-model="email_encargado"
          class="form-control"
          placeholder="name@example.com"
        />
      </div>

      <div class="form-group">
        <label>Teléfono del Encargado</label>
        <input type="number" v-model="telefono_representante" class="form-control" />
      </div>

      <label>Tipo de Organización</label>
      <br />
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" v-model="Tipo1" />
        <label class="form-check-label">Gobierno central (secretaria de estado)</label>
      </div>
      <div class="form-check form-check-inline col-md-12 col-xl-6">
        <input class="form-check-input" type="checkbox" v-model="Tipo2" />
        <label class="form-check-label">Gobierno Local (Municipalidad)</label>
      </div>
      <div class="form-check form-check-inline col-md-12 col-xl-6">
        <input class="form-check-input" type="checkbox" v-model="Tipo3" />
        <label class="form-check-label">Micro y pequeña empresa</label>
      </div>
      <div class="form-check form-check-inline col-md-12 col-xl-6">
        <input class="form-check-input" type="checkbox" v-model="Tipo4" />
        <label class="form-check-label">Cooperativa</label>
      </div>
      <div class="form-check form-check-inline col-md-12 col-xl-6">
        <input class="form-check-input" type="checkbox" v-model="Tipo5" />
        <label class="form-check-label">Centro Educativo Público</label>
      </div>
      <div class="form-check form-check-inline col-md-12 col-xl-6">
        <input class="form-check-input" type="checkbox" v-model="Tipo6" />
        <label class="form-check-label">Centro Educativo Privado</label>
      </div>
      <div class="form-check form-check-inline col-md-12 col-xl-6">
        <input class="form-check-input" type="checkbox" v-model="Tipo7" />
        <label
          class="form-check-label"
        >Asociación de productores/empresarios/pobladores (cámaras de comercio, cámaras de turismo, patronatos</label>
      </div>

      <br />
      <br />
      <label>Área de Trabajo</label>
      <br />
      <div class="form-check form-check-inline col-md-12 col-xl-6">
        <input class="form-check-input" type="checkbox" v-model="Area1" />
        <label class="form-check-label">Económica</label>
      </div>
      <div class="form-check form-check-inline col-md-12 col-xl-6">
        <input class="form-check-input" type="checkbox" v-model="Area2" />
        <label class="form-check-label">Social/Cultural</label>
      </div>
      <div class="form-check form-check-inline col-md-12 col-xl-6">
        <input class="form-check-input" type="checkbox" v-model="Area3" />
        <label class="form-check-label">Educativa</label>
      </div>
      <div class="form-check form-check-inline col-md-12 col-xl-6">
        <input class="form-check-input" type="checkbox" v-model="Area4" />
        <label class="form-check-label">Salud</label>
      </div>
      <div class="form-check form-check-inline col-md-12 col-xl-6">
        <input class="form-check-input" type="checkbox" v-model="Area5" />
        <label class="form-check-label">Ambiental</label>
      </div>
      <div class="form-check form-check-inline col-md-12 col-xl-6">
        <input class="form-check-input" type="checkbox" v-model="Area6" />
        <label class="form-check-label">Otra</label>
      </div>

      <br />
      <br />
      <div class="form-group">
        <label>Descripción de la Organización</label>
        <textarea class="form-control" v-model="descripcion" rows="3"></textarea>
      </div>

      <div class="form-group">
        <label>Funciones en el Municipio (Escribirlas separadas por coma ",")</label>
        <input
          type="text"
          v-model="funciones"
          class="form-control"
          placeholder="Función 1, función 2, etc."
        />
      </div>

      <div class="form-group">
        <label>Logros importantes de la Organización (Escribirlos separadas por coma ",")</label>
        <input
          type="text"
          v-model="logros"
          class="form-control"
          placeholder="Logro 1, logro 2, etc."
        />
      </div>

      <div class="form-group">
        <label>Socios estratégicos (Escribirlos separadas por coma ",")</label>
        <input
          type="text"
          v-model="socios"
          class="form-control"
          placeholder="Socio 1, Socio 2, etc."
        />
      </div>

      <button @click="update()" class="btn btn-success btn-block">Editar Organización</button>
    </form>
  </div>
</template>

<script>
import { firebase, firestore } from "../firebase";

export default {
  data: () => ({
    valid: false,
    contrasena: "",
    nombreOrg: "",
    idSeleccionado: "",
    actores: [],
    email_encargado: "",
    representante: "",
    telefono: 0,
    email_institucion: "",
    ubicacion: "",
    nombre: "",
    descripcion: "",
    telefono_representante: 0,
    Tipo1: false,
    Tipo2: false,
    Tipo3: false,
    Tipo4: false,
    Tipo5: false,
    Tipo6: false,
    Tipo7: false,
    Area1: false,
    Area2: false,
    Area3: false,
    Area4: false,
    Area5: false,
    Area6: false,
    socios: "",
    logros: "",
    funciones: ""
  }),
  mounted: function() {
    this.getOrganizaciones();
  },
  methods: {
    getOrganizaciones: function() {
      firebase
        .firestore()
        .collection("Actor")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.actores.push({ id: doc.id, nombre: doc.data().nombre });
          });
        })
        .catch(function(error) {
          console.log("Error getting Actores: ", error);
        });
    },

    reset() {
      this.email_encargado = "";
      this.representante = "";
      this.telefono = 0;
      this.email_institucion = "";
      this.ubicacion = "";
      this.nombre = "";
      this.descripcion = "";
      this.telefono_representante = 0;
      this.Tipo1 = false;
      this.Tipo2 = false;
      this.Tipo3 = false;
      this.Tipo4 = false;
      this.Tipo5 = false;
      this.Tipo6 = false;
      this.Tipo7 = false;
      this.Area1 = false;
      this.Area2 = false;
      this.Area3 = false;
      this.Area4 = false;
      this.Area5 = false;
      this.Area6 = false;
      this.socios = "";
      this.logros = "";
      this.funciones = "";
    },

    seleccionar(key) {
      console.log("Cambio Key: ", key);
      this.idSeleccionado = key;
      this.valid = true;
      this.reset();

      firestore
        .collection("Actor")
        .doc(this.idSeleccionado)
        .get()
        .then(snap => {
          this.nombre = snap.data().nombre;
          this.ubicacion = snap.data().ubicacion;
          this.descripcion = snap.data().descripcion;
          this.email_encargado = snap.data().email_encargado;
          this.email_institucion = snap.data().email_institucion;
          this.telefono = snap.data().telefono;
          this.telefono_representante = snap.data().telefono_representante;
          this.representante = snap.data().representante;
          //this.contrasena = snap.data().contrasena;

          snap.data().tipo_organizacion.forEach(tipoOrg => {
            if (tipoOrg == "Gobierno central (secretaria de estado)") {
              this.Tipo1 = true;
            } else if (tipoOrg == "Gobierno Local (Municipalidad)") {
              this.Tipo2 = true;
            } else if (tipoOrg == "Micro y pequeña empresa") {
              this.Tipo3 = true;
            } else if (tipoOrg == "Cooperativa") {
              this.Tipo4 = true;
            } else if (tipoOrg == "Centro Educativo Público") {
              this.Tipo5 = true;
            } else if (tipoOrg == "Centro Educativo Privado") {
              this.Tipo6 = true;
            } else if (
              tipoOrg ==
              "Asociación de productores/empresarios/pobladores (cámaras de comercio, cámaras de turismo, patronatos)"
            ) {
              this.Tipo7 = true;
            }
          });

          snap.data().area_trabajo.forEach(areaT => {
            if (areaT == "Económica") {
              this.Area1 = true;
            } else if (areaT == "Social/Cultural") {
              this.Area2 = true;
            } else if (areaT == "Educativa") {
              this.Area3 = true;
            } else if (areaT == "Salud") {
              this.Area4 = true;
            } else if (areaT == "Ambiental") {
              this.Area5 = true;
            } else if (areaT == "Otra") {
              this.Area6 = true;
            }
          });

          //logros
          this.logros = "";
          snap.data().logros.forEach(element => {
            this.logros = this.logros + element + ",";
          });

          //socios
          this.socios = "";
          snap.data().socios.forEach(element => {
            this.socios = this.socios + element + ",";
          });

          //funciones
          this.funciones = "";
          snap.data().funciones_en_municipio.forEach(element => {
            this.funciones = this.funciones + element + ",";
          });
          console.log("logros! ", this.logros);
        })
        .catch(function(error) {
          console.log("Error getting documents: ", error);
        });
    },
    update() {
      var tipos = [];
      if (this.Tipo1 === true) {
        tipos.push("Gobierno central (secretaria de estado)");
      }
      if (this.Tipo2 === true) {
        tipos.push("Gobierno Local (Municipalidad)");
      }
      if (this.Tipo3 === true) {
        tipos.push("Micro y pequeña empresa");
      }
      if (this.Tipo4 === true) {
        tipos.push("Cooperativa");
      }
      if (this.Tipo5 === true) {
        tipos.push("Centro Educativo Público");
      }
      if (this.Tipo6 === true) {
        tipos.push("Centro Educativo Privado");
      }
      if (this.Tipo7 === true) {
        tipos.push(
          "Asociación de productores/empresarios/pobladores (cámaras de comercio, cámaras de turismo, patronatos)"
        );
      }
      var areas = [];
      if (this.Area1 === true) {
        areas.push("Económica");
      }
      if (this.Area2 === true) {
        areas.push("Social/Cultural");
      }
      if (this.Area3 === true) {
        areas.push("Educativa");
      }
      if (this.Area4 === true) {
        areas.push("Salud");
      }
      if (this.Area5 === true) {
        areas.push("Ambiental");
      }
      if (this.Area6 === true) {
        areas.push("Otra");
      }


      var logros2 = [];
      logros2 = this.logros.split(",");
      var indice = logros2.indexOf('');
      if (indice != -1){
        logros2.splice(indice, 1);
      }
        
      var funcion2 = [];
      funcion2 = this.funciones.split(",");
      var indice = funcion2.indexOf('');
      if (indice != -1){
        funcion2.splice(indice, 1);
      }

      var socios2 = [];
      socios2 = this.socios.split(",");
      var indice = socios2.indexOf('');
      if (indice != -1){
        socios2.splice(indice, 1);
      }
      firestore
        .collection("Actor")
        .doc(this.idSeleccionado)
        .update({
          area_trabajo: areas,
          //contrasena: this.contrasena,
          descripcion: this.descripcion,
          email_encargado: this.email_encargado,
          email_institucion: this.email_institucion,
          funciones_en_municipio: funcion2,
          logros: logros2,
          nombre: this.nombre,
          representante: this.representante,
          socios: socios2,
          telefono: this.telefono,
          telefono_representante: this.telefono_representante,
          tipo_organizacion: tipos,
          ubicacion: this.ubicacion
        })
        .then(docRef => {
          console.log("Document updated with ID: ", this.idSeleccionado);
          this.reset();
          this.idSeleccionado = "";
          //this.valid = false;
          alert("Organización actualizada correctamente! :)");
        })
        .catch(error => {
          console.error("Error updating document: ", error);
        });
    }
  }
};
</script>