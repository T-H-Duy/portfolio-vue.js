<template>
    
    <NavBar/>
    
    <bio/>
    
    <h3 id="projets">Mes projets</h3>
    
    <div class="projets">
        <ProjetCard v-for="(card, i) in dataProjet" :key="i" 
        :info_projet="card"/>
    </div>
    
    <h3 id="formContact">Contactez-moi</h3>
        
    <FormContactVue/>

    <socialApp/>

</template>

<script setup>
    
    import { onMounted, ref } from 'vue'    
    import ProjetCard from '../components/ProjetCard.vue'
    import NavBar from '../components/NavBar.vue';
    import socialApp from '../components/socialApp.vue';
    import FormContactVue from '../components/FormContact.vue';
    import bio from '../components/bio.vue';

const info = [
    {
        titre: 'Mon CV',
        url: '/src/assets/mon_cv.png',
        tech: 'HTML et CSS',
        liens: 'https://github.com/T-H-Duy/Devoir-CV',
        dateCreation: '23 mars 2024'
    },
    {
        titre: 'Cahier des charges',
        url: '/src/assets/cahierdescharges.png',
        tech: 'PDFgear, LibreOffice(7.6) et GIMP(2.10.36)',
        liens: 'https://www.fichier-pdf.fr/2024/04/28/cahierdeschargessiteecommercelasocketterie-copy/',
        dateCreation: '04 avril 2024'
    },
    {
        titre: 'Espace commentaire dynamique',
        url: '/src/assets/com_dynamique.png',
        tech: 'HTML, CSS et JavaScript',
        liens: 'https://github.com/T-H-Duy/Dynamiser-coms',
        dateCreation: '20 avril 2024'
    }
]
    
    class Projet {
        constructor(titre, url, tech, dateCreation, liens){
            this.titre = titre
            this.url = url
            this.tech = tech
            this.dateCreation = dateCreation
            this.liens = liens
        }
    }
        let dataProjet = ref([]);

        const makeDataProjet = ()=> {
        for (const projet of info){
        const newProjet = new Projet(projet.titre, projet.url, projet.tech, projet.dateCreation, projet.liens)
        dataProjet.value.push(newProjet)
        }
    }
    
onMounted(makeDataProjet)

</script>

<style scoped>
   h3 {
        font-size: 2em;
        text-align: center;
        padding: 1em;
    }
    
    .projets{
        display: flex;
        justify-content: space-evenly;
        padding: 1em;
    }
</style>