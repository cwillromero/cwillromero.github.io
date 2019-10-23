<template>
  <card class="card-user">
    <div slot="image">
      <img src="@/assets/img/background.jpg" alt="...">
    </div>
    <div>
      <div class="author">
        <img class="avatar border-white" src="@/assets/img/ut.jpg" alt="...">
        <h4 class="title">UNITEC
          <br>
          <a href="#">
            <small>@UNITEC</small>
          </a>
        </h4>
      </div>
      <p class="description text-center">
        <br> <b> <h5> Version1.0.0 </h5></b>
       <br> Este es un perfil de prueba de la vista de un usuario administrador
        <br> Aun no sehabilitan todas las opciones
        
      </p>
    </div>
    <hr>
    <div class="text-center">
      <div class="row">
        <div v-for="(info, index) in details" :key="index" :class="getClasses(index)">
          <h5>{{info.title}}
            <br>
            <small>{{info.subTitle}}</small>
          </h5>
        </div>
      </div>
    </div>
  </card>
</template>
<script>
export default {
  data() {
    return {
      details: [
        {
          title: "12",
          subTitle: "Proyectos"
        },
        {
          title: "3",
          subTitle: "Socios"
        },
        {
          title: "24",
          subTitle: "Logros"
        }
      ]
    };
  },
  methods: {
    getClasses(index) {
      var remainder = index % 3;
      if (remainder === 0) {
        return "col-lg-3 offset-lg-1";
      } else if (remainder === 2) {
        return "col-lg-4";
      } else {
        return "col-lg-3";
      }
    }
  }
};
</script>
<style>
</style>
