<template>
  <div id="app">
    <div class ="componentes">
    <h1>Hotel TIC (No es mucho pero es trabajo honesto ( ͡° ͜ʖ ͡°) ) </h1>
    <h2>App de un solo uso, cumple con lo requerido en el sprint (Botón con método PUT y Botón con método GET)</h2>
    <button v-on:click="getOcupacion">Ocupación</button>
    <button v-on:click="CrearReserva">Crear Reserva</button>
    </div>
    <div class="main-component">
      <router-view></router-view>
    </div>
  </div>
 </template>

<script>
export default{
  name:"App",
  components:{},
  methods:{
    getOcupacion:function(){
      this.$router.push({name:"ocupacion"})
      },
      CrearReserva:function(){
        this.$router.push({name:"crear-reserva"})
      }
  },
  
} 
</script>

<style>
</style>
