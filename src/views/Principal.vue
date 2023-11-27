

<template>
    <div>
        <component :is="navbarComponent"></component>
        <hr />
        <component :is="homeComponent" :vuelos="vuelos"></component>
    </div>
</template>

<script>

import Navbar from './Navbar.vue';
import Home from './Home.vue';

export default{
    name: 'prueba-intento',
    components:{
        Navbar,
        Home
    },
    data (){
        return{
            navbarComponent: null,
            homeComponent:  'Home',
            vuelos :[{
                        title: 'Avianca',
                        description: 'Vuelo en Airbuz 320',
                        date: '2021-08-16',
                    },
                    {
                        title: 'Wingo',
                        description: 'Vuelo en Airbuz 540',
                        date: '2021-08-17',
                    },
                    {
                        title: 'Latam',
                        description: 'Vuelo en Avioneta',
                        date: '2021-08-18',
                    }
]
        }
    },
    created(){
        this.navbarComponent = 'Navbar'
    }
}
</script>


