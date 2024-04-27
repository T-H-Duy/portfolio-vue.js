<template>
    <div class="projet_card" @click="showModal = true">
        <h3>{{ info_projet.titre }} </h3>
        <div class="project_img">
            <img class="imageProjet" :src="info_projet.url">
        </div>
    </div> 
   <ModaleProjet :show="showModal" :info_projet_modal="info_projet" @close="showModal = false" />
</template>

<script setup>
import { ref } from 'vue'
import ModaleProjet from './ModaleProjet.vue';
    const props = defineProps(['info_projet'])

    const showModal = ref(false)    
</script>

<style scoped>
    .projet_card{
        width: 30%;
        padding: 3em;
    }

    .projet_card:hover{
        box-shadow: 0.7em 0.7em 1em rgb(80, 84, 118);
    }

    .imageProjet{
        width: 100%;
        text-align: center;
    } 
</style>