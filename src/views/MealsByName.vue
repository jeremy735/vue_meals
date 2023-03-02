<template>
    <div class="p-8 pb-0">
        <input 
            type="text" 
            v-model="keyword"
            class="rounded border-2 bg-wihte border-gray-200 w-full"
            placeholder="Search for Meals"
            @change="searchMeals"
        />
    </div>

   <Meals :meals="meals" />
</template>

<script setup>
import { computed } from "@vue/reactivity";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import Meals from '../components/Meals.vue'


const route = useRoute();
const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);

// 如果搜尋欄位有資料去api呼叫資料
// keyword是空的狀態的話去mutations呼叫setSearchedMeals變為空陣列
function searchMeals(){
    if(keyword.value){ 
        store.dispatch("searchMeals", keyword.value);
    }else{
        store.commit("setSearchedMeals", []);
    }
}

onMounted(() => {
    keyword.value = route.params.name
    if(keyword.value){
        searchMeals()
    }
})


</script>