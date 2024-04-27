<template>
  <NavBar/>
    <div id="not-found">
      <h1>Page not found</h1>
      <router-link id="retourAccueil" to="/">Accueil</router-link>
      <img src="/src/assets/404page.png" alt="erreur 404">
    </div>
    <socialApp/>
  </template>
  
  <script setup>
    import NavBar from '../components/NavBar.vue';
    import socialApp from '../components/socialApp.vue';

  </script>
  
  <style scoped>
    #not-found {
      display: flex;
      flex-direction: column;
      margin-top: 3.5em;
      justify-content: center;
      align-items: center;
    }

    h1 {
      font-size: 4em;
      color: blue;
    }
    
    #retourAccueil {
      text-align: center;
      width: 3.5em;
      padding: 0.5em;
      margin: 0.5em;
      color: white;
      background-color : yellowgreen;
    }

    #retourAccueil:hover {
      opacity: 0.5;
    }
  </style>
  