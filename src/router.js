import vueRouter from 'vue-router'
import App from "./App"
import VerReservas from "./components/VerReservas"
import CrearReserva from "./components/CrearReserva"
import Inicio from "./components/Inicio";

const router=new vueRouter({
      routes:[
        
        {

            path:'/reservas/inicio',
            name:"Inicio",
            component:Inicio
        },
        {
            
            path:'/reservas/ver-reservas',
            name:"VerReservas",
            component:VerReservas

        },

        {
            path:'/reservas/crear',
            name:"CrearReserva",
            component:CrearReserva
        },

     

    ],
})

export default router