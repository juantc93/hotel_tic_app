<template>
  <div id="creaReserva">
    <h2>Agregar Reserva</h2>
    <label for="">Número de habitación</label>
    <input type="number" v-model="habitacion_id" />
    <label for="">Nombre completo</label>
    <input type="text" v-model="nombre" />
    <label for="start">Fecha de inicio:</label>
    <input type="date" id="start" v-model="fecha_inicio"
       value="2020-12-24"
       min="2020-12-24" max="2021-12-31">
    <label for="end">Fecha fin:</label>
    <input type="date" id="end" v-model="fecha_fin"
       value="2020-12-24"
       min="2020-12-24" max="2021-12-31">
    <h4>¡Gracias!</h4>
    <button v-on:click="agregarReserva">Confirmar</button>
  </div>
</template>


<script>
import axios from 'axios';
export default {
    name: "agregarReserva",
    data:function(){
        return{
          habitacion_id: "",
          nombre: "",
          fecha_inicio: "",
          fecha_fin: "",
            
        };
    },
    methods: {
      agregarReserva: function() {
        var datosJson = {
          "habitacion_id": this.habitacion_id,
          "usuario_id": this.nombre,
          "fecha_inicio": this.fecha_inicio,
          "fecha_fin": this.fecha_fin
          };
        axios
            .post("https://prueba-backend-retoii-mintic.herokuapp.com/reservas/crear", datosJson)
            .then(response => {
            alert(response.data.mensaje);
            })
            .catch(err => {
            console.log(err);
            alert("error en el servidor");
            });
    }
  }
};
</script>

<style>

#creaReserva {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}

label {
    display: block;
    font: 1rem 'Fira Sans', sans-serif;
}

input,
label {
    margin: 0.5rem 0;
}


</style>

   