import vueRouter from 'vue-router'
import App from './App'
import Ocupacion from './components/Ocupacion'
import CrearReserva from'./components/CrearReserva'

const router=new vueRouter({
    mode:'history',
    base:__dirname,
    routes:[
        
        {
            path:'/reservas/ocupacion',
            name:"ocupacion",
            component:Ocupacion

        },

        {
            path:'/reservas/crear',
            name:"crear-reserva",
            component:CrearReserva
        },

    ],
})

export default router