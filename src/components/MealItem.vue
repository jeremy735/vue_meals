<template>
    <div 
        class="bg-white shadow rounded-x1"
    >
        <router-link :to="{name: 'mealDetails', params: {id: meal.idMeal}}">
            <img 
                :src="meal.strMealThumb" 
                :alt="meal.strMeal" 
                class="rounded-t-xl w-full h-48 object-cover"
            />
        </router-link>
        <div class="p-3">
            <h3 class="font-semibold">{{ meal.strMeal }}</h3>
            <p class="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam qui accusamus aut ad facere dolore ratione enim optio,
            </p>
            <div class="flex item-center justify-between">
                <YouTubeButton :href="meal.strYoutube">
                    Youtube
                </YouTubeButton>
            </div>
        </div>
    </div>
</template>

<script setup>
import YouTubeButton from './YouTubeButton.vue'

    const { meal } = defineProps({
        meal: {
            required: true,
            type: Object
        }
    })
</script>