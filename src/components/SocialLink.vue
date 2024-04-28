<template>
    <footer id="social">
        <div>
        <a href="https://www.linkedin.com/feed/" target="_blank"><img src="src/assets/images/linkedin.png" alt="Logo LinkedIn"></a>
        <a href="https://github.com/" target="_blank"><img src="src/assets/images/github.png" alt="Logo GitHub"></a>
        <a href="https://twitter.com/?lang=fr" target="_blank"><img src="src/assets/images/twitter.png" alt="Logo Twitter"></a>
        </div>
        <div>
        <p><I>Dernière mise-à-jour le 25/04/2024</I></p>
        </div>
    </footer>
</template>

<script setup>

</script>

<style scoped>
#social{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #90aaad;
}

#social img{
    width: 2.4em;
    height: 2.4em;
    padding: 2em;
}


#social a{
    list-style-type: none;
    padding: 0.8em;
}

#social a:hover{
    opacity: 0.5;
}
</style>