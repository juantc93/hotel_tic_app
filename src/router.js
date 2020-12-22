import vueRouter from 'vue-router'
import App from "./App"
import VerReservas from "./components/VerReservas"
import CrearReserva from "./components/CrearReserva"
import EliminaReservas from "./components/EliminaReservas"
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

        {
            path:'/reservas/eliminar',
            name:"EliminaReservas",
            component:EliminaReservas
        },

     

    ],
})

export default router