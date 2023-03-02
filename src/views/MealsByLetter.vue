<template>
    <div>
        <div class="flex  justify-center gap-2 mt-2">
            <router-link 
                :to="{name: 'byLetter', params: { letter }} " 
                v-for="letter of letters" 
                :key="letter" 
            >
                {{ letter }}
            </router-link>
        </div>

        <Meals :meals="meals" />
    </div>
</template>

<script setup>
import { computed } from '@vue/reactivity';
import { onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import store from '../store';
import Meals from '../components/Meals.vue'

const route = useRoute();
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");
const meals = computed(() => store.state.mealsByLetter)

//增加watch 監測按字母分頁點擊變動更新
watch(route, () => {
    store.dispatch('searchMealsByLetter', route.params.letter)
})

onMounted(() => {
    store.dispatch('searchMealsByLetter', route.params.letter)
})

</script>