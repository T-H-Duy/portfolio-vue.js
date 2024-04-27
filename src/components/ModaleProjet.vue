<template>
    <div class="bloc_modal" v-if="show">
        <div class="overlay" @click="$emit('close')"></div>    
        <div class="modal_card">
            <button class="btn" @click="$emit('close')">X</button>
            <h4>{{ info_projet_modal.titre }}</h4>
            <p>Technologies utilisées: {{ info_projet_modal.tech }}</p>
            <p>Liens: <a :href="info_projet_modal.liens" target="_blank">{{ info_projet_modal.liens }}</a></p>
            <p>Date de création: <a :href="info_projet_modal.dateCreation" target="_blank">{{ info_projet_modal.dateCreation }}</a></p>
        </div>  
    </div>
</template>

<script setup>
    const props = defineProps(['show','info_projet_modal'])
</script>

<style scoped>
.bloc_modal{
    position: fixed;
    top:0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.overlay{
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
} 

.modal_card{
    background-color: aliceblue;
    padding: 50px;
    position: fixed;
    top: 30%;
    width: 50%;
}

.modal_card p{
    padding: 1em;
}

.modal_card a{
    color: blueviolet;
}

.modal_card a:hover{
    text-decoration: underline;
}

.btn{
    position: absolute;
    top: 0.7em;
    right: 0.7em;
    background-color: red;
    color: white;
}

.btn:hover{
    opacity: 0.7;
}
</style>