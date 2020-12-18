<template>
    <div id="Ocupacion">
        <h2> {{reservas}}</h2>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "Ocupacion",
    data:function(){
        return{
            reservas: "none"
            
        }
    },
    created:function(){
        let self=this
        axios.get("https://prueba-backend-retoii-mintic.herokuapp.com/reservas/ocupacion")
            .then((result)=>{
                self.reservas=result.data
            })
            .catch((error)=>{
                alert("ERROR Servidor");
            });
    }
}
</script>

<style>
</style>