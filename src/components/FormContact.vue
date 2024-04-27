<template>
<div v-if="show" class="output">
    <p>Message envoyé</p>
</div>
<div  v-if="!showError" class="output">    
    <p>Veuillez remplir tous les champs</p>
</div >
  <form action="" method="get" class="form-ex">
  <div class="form-ex">
    <label for="name">Nom et prénom: </label>
    <input class="input" v-model="nom" type="text" name="name" id="name" autocomplete="off" required />
  </div>
  <div class="form-ex">
    <label for="objet">Objet: </label>
    <input class="input" v-model="objet" type="text" name="objet" id="objet" autocomplete="off" required />
  </div>
  <div class="form-ex">
    <label for="message">Message: </label>
    <textarea rows="7" class="input" v-model="messageEnvoyer" id="message"></textarea>
  </div>

  
  <div class="form-ex">
    <input class="btn" @click="submitForm" type="submit"/>
  </div>
</form>

</template>

<script setup>
import {ref} from 'vue'
let show = ref(false)
let showError = ref(true)

  const email = process.env.VUE_APP_EMAIL

  let messageEnvoyer = ''
  let objet = ''
  let nom = ''

  const submitForm = (e) => {
    if(messageEnvoyer=='' || objet ==''|| nom == ''){
      showError.value=false
    }else{
      show.value=true
    }
e.preventDefault();
}


</script>

<style scoped>
label {
  display: block;
  margin: 0.7em;
  padding: 0.7em;
}

.input{
  width: 40%;
  padding: 0.7em;
  border-radius: 0.7em;
}

form{
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  text-align: center;
  
}

.btn{
  padding: 0.7em;
  margin: 0.7em;
  color: antiquewhite;
  background-color : grey;
  border-radius: 0.7em;
}

.btn:hover{
  background-color: #f2f2f2;
  color: black;
}

.output{
  background-color: #f2f2f2;
  color: red;
  text-align: center;
  padding: 0.7em;
}
</style>