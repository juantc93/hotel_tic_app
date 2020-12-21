<template>
  <div id="verReservas">
    <h2 v-if="varibaleBooleana"></h2>
    <table>
      <tr>
        <th>Número habitación</th>
        <th>Nombre Completo</th>
        <th>Fecha Inicio</th>
        <th>Fecha Fin</th>
      </tr>

      <tr v-for="reserva in lista_reservas_resumida">
        <td>{{ reserva.habitacion_id }}</td>
        <td>{{ reserva.nombre }}</td>
        <td>{{ reserva.fecha_inicio }}</td>
        <td>{{ reserva.fecha_fin }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "VerReservas",
  data: function() {
    return {
      varibaleBooleana: true,
      lista_reservas_resumida: []
    };
  },
  beforeCreate: function() {
    axios
      .get("https://prueba-backend-retoii-mintic.herokuapp.com/reservas/ver-reservas/")
      .then(response => {
        this.lista_reservas_resumida = response.data;
      })
      .catch(error => {
        console.log(error);
        alert("Error del servidor");
      });
  }
};
</script>
<style >
table,
th,
td {
  border: 1px solid black;
}

table {
  margin: auto;
}
</style>