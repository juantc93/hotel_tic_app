<template>
    <div id="crearReserva">
        <h2> Reserva creada con exito</h2>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "CrearReserva",
    data:function(){
        return{
            reservas: "none"
            
        }
    },
    created:function(){
        let self=this
        axios.post("https://prueba-backend-retoii-mintic.herokuapp.com//reservas/crear",{
            
            habitacion_id: 21,
            usuario_id: "El cuerpo del JSON está quémado en el código por falta de tiempo, tenga piedad, intente crear la reserva dos veces :)",
            fecha_inicio: "2020-12-18",
            fecha_fin: "2020-12-18"
        })
            .then((response)=>{
                alert(response)
            })
            .catch((error)=>{
                alert("ERROR Servidor");
            });
    }
}
</script>

<style>
</style>