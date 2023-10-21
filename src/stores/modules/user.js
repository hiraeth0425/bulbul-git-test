import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore(
    'interViewQuestion', () => {
        const cityList = ref('')



        return {
            cityList
        }
    }
    ,
    {
        persist: true
    }
)