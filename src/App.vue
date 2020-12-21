<template>
 <div id="app" class="app">

    <div class="header">
    </div>

    <div class="main-component">
    <router-view> </router-view>
    </div>
    
    <div class="footer">
       <h1>Hotel TIC</h1>
      <!--<h3>Tu mejor Hotel</h3>  -->
      <nav>
        <button v-on:click="Inicio"> Inicio </button>
        <button v-on:click="VerReservas"> Ver Reservas </button>
        <button v-on:click="CrearReserva"> Crear Reserva </button>
      </nav>
    </div>


  </div>
 </template>

<script>
import VerReservas from "./components/VerReservas";
import CrearReserva from "./components/CrearReserva";
import Inicio from "./components/Inicio";


export default{
  name:"App",
  methods:{
    Inicio: function() {
      this.$router.push({ name: "Inicio"});
    },

    VerReservas: function() {
      this.$router.push({ name: "VerReservas"});
      },
      CrearReserva: function() {
      this.$router.push({ name: "CrearReserva"});
    },
  },
   components:{
    Inicio,  
    VerReservas, 
    CrearReserva,   
  },
  created: function() {
    this.$router.push({ name: "Inicio"});
  },
} 
</script>

<style>

  body{
    margin: 0 0 0 0;
  }

 .header{
    margin: 0%;
    padding: 10;
    width: 100%;
    height: 1vh; 
    min-height: 30px;

    background-color:#eb1e1ea2 ;
    color:#E5E7E9  ;

    }

  .footer{
    clear: both;
    position: relatuvem;
    height: 100px;
    margin-top: -125px;

    background-color: #eb1e1ea2 ;
    color:#E5E7E9  ;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .footer h1{
    width: 70%;
    text-align: center;
    
  }



  .footer nav {
    height: 10%;
    width: 35%;
    margin: 3%;

    display: flex;
    justify-content: space-around;
    align-items: center;

    font-size: 90px;
  }

  .footer nav button{
    color: #ffffff;
    background: #eb1e1ea2;
    border: 0px solid #fdfeff;

    border-radius: 10px;
    padding: 20px 15px;
  }

  .footer nav button:hover{
    color: #eb1e1ea2;
    background: #E5E7E9;
    border: 1px solid #E5E7E9;
  }

  
  .main-component{
    height: 100vh;
    margin: 0%;
    padding: 0%;

    background: #FDFEFE ;
  }

 
 

</style>
