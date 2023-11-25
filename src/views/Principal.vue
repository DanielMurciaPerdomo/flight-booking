<template>
    <div>
        <component :is="navbarComponent"></component>
        <hr />
        <component :is="homeComponent" :items="items"></component>
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
            items :[{
                        title: 'Item 1',
                        description: 'Description of Item 1',
                        date: '2021-08-16'
                    },
                    {
                        title: 'Item 2',
                        description: 'Description of Item 2',
                        date: '2021-08-17'
                    },
                    {
                        title: 'Item 3',
                        description: 'Description of Item 3',
                        date: '2021-08-18'
                    }
]
        }
    },
    created(){
        this.navbarComponent = 'Navbar'
    }
}
</script>