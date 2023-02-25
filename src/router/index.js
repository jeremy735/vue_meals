import { createRouter, createWebHashHistory } from 'vue-router';
import DefaultLayout from '../components/DefaultLayout.vue';
import GuestLayout from '../components/GuestLayout.vue';
import Home from '../views/Home.vue'
import MealsByIngredient from '../views/MealsByIngredient.vue'
import MealsByLetter from '../views/MealsByLetter.vue'
import MealsByName from '../views/MealsByName.vue'

const routes =[
    {
        path: '/',
        component: DefaultLayout,
        children:[
            {
                path: "/",
                name: "home",
                component: Home,
            },
            {
                path: "/By-name/:name?",
                name: "byName",
                component: MealsByName,
            },
            {
                path: "/By-lettet/:letter?",
                name: "byLetter",
                component: MealsByLetter,
            },
            {
                path: "/By-ingredient/:ingredient?",
                name: "byIngredient",
                component: MealsByIngredient,
            },
        ]
    },   
    {
        path: '/guest',
        component: GuestLayout,
    } 
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;