<template>
    <div id="Inicio">
        <h1>Hola  <span>{{username}}, </span>  ¡Bienvenido!</h1>
    </div>
</template>



<script>
    export default {
        name: "Inicio",
        data:function(){
            return {
                username: "Usuario Default"
            }
        },
        
    }
</script>

    


<style>
    #Inicio{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;    
        align-items: center;
    }
    #Inicio h1{
        font-size: 50px;
        color: #283747;
    }
    #Inicio span{
        color: crimson;
        font-weight: bold;
    }
</style>
