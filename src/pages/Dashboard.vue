<template>
  <div>
    <!--Drop para escoger tipo de Organización-->
    <p>Filtrar por:</p>
    <div class="dropdown">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >Tipo de Organización</button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" href="#">Gubernamental</a>
        <a class="dropdown-item" href="#">No Gubernamental</a>
        <a class="dropdown-item" href="#">Ambos</a>
      </div>
    </div>
    <!--Stats cards-->
    <br />
    <div class="row">
      <div class="col-md-6 col-xl-3" v-for="stats in statsCards" :key="stats.title">
        <stats-card>
          <div class="icon-big text-center" :class="`icon-${stats.type}`" slot="header">
            <i :class="stats.icon"></i>
          </div>
          <div class="numbers" slot="content">
            <p>{{stats.title}}</p>
            {{stats.value}}
          </div>
          <div class="stats" slot="footer">
            <i :class="stats.footerIcon"></i>
            {{stats.footerText}}
          </div>
        </stats-card>
      </div>
    </div>
  </div>
</template>
<script>
import { StatsCard, ChartCard } from "@/components/index";
import Chartist from "chartist";
import { firebase, firestore } from "../firebase";

export default {
  components: {
    StatsCard,
    ChartCard
  },
  /**
   * Chart data used to render stats, charts. Should be replaced with server data
   */
  data: () => ({
    filtro: "",
    actores: [],
    statsCards: []
  }),
  mounted: function() {
    this.getOrganizaciones();
  },
  methods: {
    filtrarOrganizaciones: () => {
      console.log(this.filtro);
    },
    getOrganizaciones: function() {
      firebase
        .firestore()
        .collection("Actor")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            console.log(doc.id, " => ", doc.data());
            this.actores.push({ id: doc.id, data: doc.data() });
            var n = Math.floor(Math.random() * 4);
            var color = "";
            if (n === 0) {
              color = "success";
            } else if (n === 2) {
              color = "warning";
            } else if (n === 3) {
              color = "info";
            } else {
              color = "danger";
            }
            this.statsCards.push({
              type: "danger",
              icon: "ti-home",
              title: doc.data().ubicacion,
              value: doc.data().nombre,
              footerText: doc.data().descripcion,
              footerIcon: "ti-eye"
            });
          });
        })
        .catch(function(error) {
          console.log("Error getting Actores: ", error);
        });
    }
  }
};
</script>
<style>
</style>
