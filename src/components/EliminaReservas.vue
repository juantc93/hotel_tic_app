<template>
  <div id="eliminaReservas">
    <h2>Eliminar Reserva</h2>
    <label for="">Número de habitación</label>
    <input type="number" v-model="habitacion_id" />
    <label for="">Nombre completo</label>
    <input type="text" v-model="nombre" />
        <h4>¿Estás Seguro?</h4>
    <button v-on:click="EliminaReservas">Confirmar</button>
  </div>
</template>


<script>
import axios from 'axios';
export default {
    name: "EliminaReservas",
    data:function(){
        return{
          habitacion_id: "",
          usuario_id: "",
          fecha_inicio: "",
          fecha_fin: "",
            
        };
    },
    methods: {
      EliminaReservas: function() {
        var datosJson = {
            "habitacion_id": 1,
            "usuario_id": "prueba",
            "fecha_inicio": "2020-01-01",
            "fecha_fin": "2020-01-01"
            };
        axios
            .delete("https://backed-sprintiii-misiontic2022.herokuapp.com/reservas/eliminar", datosJson)
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

#eliminaReservas {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
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
