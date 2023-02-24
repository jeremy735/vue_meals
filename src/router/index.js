import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import MealList from '../views/MealList.vue'


const routes =[
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/letter/:letter",
        name: "byLetter",
        component: MealList,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;