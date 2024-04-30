<template>
  <nav id="navbar">
    <ul>
      <li><a href="#social">Social Media</a></li>
      <li><a href="#formContact">Contact</a></li>
      <li><a href="#projets">Projets</a></li>
      <li><a href="#introduction">Introduction</a></li>
    </ul>
  </nav>
</template>


<script setup>

</script>


<style scoped>
 nav {
  display: flex;
  height: 2em;
  justify-content: space-evenly;
  align-items: center;
  background-color: #57a7b4;
  padding: 1em;
  position: sticky;
  top: 0;
}

nav li {
  float: right;
  padding: 1em;
  list-style-type: none;
}

nav a {
  text-decoration: none;
  color: white;
}

nav a:hover {
  border-bottom: 0.10em solid whitesmoke;
}
</style>