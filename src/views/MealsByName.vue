<template>
    <div class="p-8 pb-0">
        <input 
            type="text" 
            v-model="keyword"
            class="rounded border-2 border-gray-200 w-full"
            placeholder="Search for Meals"
            @change="searchMeals"
        />
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
       <div 
            v-for="meal of meals" 
            :key="meal.idMeal" 
            class="bg-white shadow rounded-x1"
        >
            <router-link :to="{name: 'mealDetails', params: {id: meal.idMeal}}">
                <img 
                    :src="meal.strMealThumb" 
                    :alt="strMeal" 
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
    </div>
</template>

<script setup>
import { computed } from "@vue/reactivity";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import YouTubeButton from "../components/YouTubeButton.vue"

const route = useRoute();
const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);

function searchMeals(){
   store.dispatch("searchMeals",keyword.value);
}

onMounted(() => {
    keyword.value = route.params.name
    if(keyword.value){
        searchMeals()
    }
})


</script>