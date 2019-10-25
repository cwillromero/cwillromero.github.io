<template>
  <div>
    <form>
      <div class="form-group">
        <label>Nombre de la Organización</label>
        <input
          type="email"
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

      <div class="form-group">
        <label>Si está recibiendo cooperación externa, indique en qué proyectos (Escribirlos separadas por coma ",")</label>
        <input
          type="text"
          v-model="proyectos"
          class="form-control"
          placeholder="Proyecto 1, Proyecto 2, etc."
        />
      </div>

      <button @click="addOrganizacion()" class="btn btn-success btn-block">Agregar Organización</button>
    </form>
  </div>
</template>
<script>
import { firebase, firestore } from "../firebase";

export default {
  name: "add-organizacion",
  data: () => ({
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
    proyectos: "",
    logros: "",
    funciones: ""
  }),
  methods: {
    addOrganizacion: function() {
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
      if (this.area1 === true) {
        areas.push("Económica");
      }
      if (this.area2 === true) {
        areas.push("Social/Cultural");
      }
      if (this.area3 === true) {
        areas.push("Educativa");
      }
      if (this.area4 === true) {
        areas.push("Salud");
      }
      if (this.area5 === true) {
        areas.push("Ambiental");
      }
      if (this.area6 === true) {
        areas.push("Otra");
      }
      firestore
        .collection("Actor")
        .add({
          area_trabajo: areas,
          contrasena: "",
          descripcion: this.descripcion,
          email_encargado: this.email_encargado,
          email_institucion: this.email_institucion,
          funciones_en_municipio: this.funciones.split(","),
          logros: this.logros.split(","),
          nombre: this.nombre,
          proyectos: this.proyectos.split(","),
          representante: this.representante,
          socios: this.socios.split(","),
          telefono: this.telefono,
          telefono_representante: this.telefono_representante,
          tipo_organizacion: tipos,
          ubicacion: this.ubicacion
        })
        .then(docRef => {
          console.log("Document written with ID: ", docRef.id);
          alert("Organización creada correctamente! :)");
          this.email_encargado= "";
          this.representante= "";
          this.telefono= 0;
          this.email_institucion ="";
          this.ubicacion= "";
          this.nombre= "";
          this.descripcion= "";
          this.telefono_representante= 0;
          this.Tipo1= false;
          this.Tipo2= false;
          this.Tipo3= false;
          this.Tipo4= false;
          this.Tipo5= false;
          this.Tipo6= false;
          this.Tipo7= false;
          this.Area1= false;
          this.Area2= false;
          this.Area3= false;
          this.Area4= false;
          this.Area5= false;
          this.Area6= false;
          this.socios= "";
          this.proyectos= "";
          this.logros= "";
          this.funciones= "";
        })
        .catch(error => {
          console.error("Error adding document: ", error);
          alert("Error creando Organización. :(");
        });
    }
  }
};
</script>