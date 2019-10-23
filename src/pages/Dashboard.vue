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
      <div class="col-md-6 col-xl-3" v-for="(stats,index) in statsCards" :key="stats.title">
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
            <br />
            <button
              type="button"
              class="btn btn-success btn-sm btn-block"
              @click="temp(index)"
              data-target="#modalinfo"
            >Ver más</button>
          </div>
        </stats-card>
      </div>
    </div>

    <!--INICIO DEL MODAL-->

    <div class="modal fade" id="modalinfo" data-backdrop="false">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header bg-dark text-white">
            <h3 class="modal-title" id="exampleModalLongTitle">
              <center>
                <i class="material-icons">assignment_ind</i>
                {{actor_temp.nombre}}
              </center>
            </h3>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body bg-dark">
            <ul class="nav nav-tabs">
              <li class="nav-item">
                <a class="nav-link bg-primary text-white" @click="tbandera(1)">
                  <h4>Informacion</h4>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link bg-success text-white" @click="tbandera(2)">
                  <h4>Contactos</h4>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link bg-danger text-white" @click="tbandera(3)">
                  <h4>Actividades</h4>
                </a>
              </li>
            </ul>

            <div v-show="bandera==1">
              <div class="card" style="width: 100%">
                <!-- para cuando se pongan la simagenes segun cada perfil v-bind:src="actor_temp.url_img"-->
                <img src="@/assets/img/4.png" class="card-img-top" />
                <div class="card-body">
                  <h5>
                    <h4>
                      <i class="material-icons">assignment</i>Descripción:
                    </h4>
                    {{actor_temp.descripcion}}
                    <h4>
                      <i class="material-icons">assignment_ind</i>Tipo de organización:
                    </h4>

                    <h4>
                      <span
                        v-for="(tipo,index) in actor_temp.tipo_organizacion"
                        :key="index"
                        class="badge badge-pill badge-primary"
                      >{{tipo}}</span>
                    </h4>

                    <h4>
                      <i class="material-icons">explore</i>Ubicación:
                    </h4>
                    {{actor_temp.ubicacion}}
                  </h5>
                </div>
              </div>
            </div>
            <div v-show="bandera==2">
              <div class="card" style="width: 100%">
                <h5>
                  <h4>
                    <i class="material-icons">email</i>Email de la organización:
                  </h4>
                  {{actor_temp.email_institucion}}
                  <h4>
                    <i class="material-icons">settings_phone</i>Telefono de la organización:
                  </h4>
                  {{actor_temp.telefono}}
                  <h4>
                    <i class="material-icons">emoji_emotions</i>Nombre del representante:
                  </h4>
                  {{actor_temp.representante}}
                  <h4>
                    <i class="material-icons">drafts</i>Email del representante:
                  </h4>
                  {{actor_temp.email_encargado}}
                  <h4>
                    <i class="material-icons">perm_phone_msg</i>Telefono del representante:
                  </h4>
                  {{actor_temp.telefono_representante}}
                </h5>
              </div>
            </div>

            <div v-show="bandera==3">
              <div class="card" style="width: 100%">
                <h3>
                  <i class="material-icons">call_split</i>Areas de trabajo:
                </h3>

                <h4>
                  <span
                    v-for="(tipo,index) in actor_temp.area_trabajo"
                    :key="index"
                    class="badge badge-pill badge-primary"
                  >{{tipo}}</span>
                </h4>

                <h3>
                  <i class="material-icons">stars</i>Logros:
                </h3>

                <h4>
                  <span
                    v-for="(tipo,index) in actor_temp.logros"
                    :key="index"
                    class="badge badge-pill badge-success"
                  >{{tipo}}</span>
                </h4>

                <h3>
                  <i class="material-icons">face</i>Socios:
                </h3>

                <h4>
                  <span
                    v-for="(tipo,index) in actor_temp.socios"
                    :key="index"
                    class="badge badge-pill badge-warning"
                  >{{tipo}}</span>
                </h4>
              </div>
            </div>
          </div>
          <div class="modal-footer bg-primary text-white" data-dismiss="modal">
            <center>
              <h5>SALIR</h5>
            </center>
          </div>
        </div>
      </div>
    </div>
    <!-- FIN DEL MODAL-->
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
    statsCards: [],
    actor_temp: "xxxxxx",
    bandera: 1
  }),
  mounted: function() {
    this.getOrganizaciones();
  },
  methods: {
    tbandera(index) {
      this.bandera = index;
      console.log("LA BANDERA", this.bandera);
    },
    temp(index) {
      this.actor_temp = this.actores[index].data;
      console.log("EL VALOR TEMP", this.actor_temp);
      $("#modalinfo").modal("show");
    },
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
              type: color,
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
