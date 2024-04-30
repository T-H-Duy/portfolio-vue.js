<template>
    <div id="introduction">
        <div class="img">
            <img src="src/assets/images/cat_relax.jpg" alt="Ma photo">
        </div>
        <div class="presentation">
            <h1>NGUYEN T.H.Duy</h1>
            <h2>Développeur Web en formation</h2>
            <p>Technicien réparateur de smartphones, après une expérience enrichissante dans le secteur, je souhaite désormais débuter une nouvelle aventure. De nature créative et intéressé par le processus de fabrication, le métier de développeur web semble être la suite logique de ma carrière professionnelle. Indépendant sans négliger le relationnel, cette flexibilité me permets de m'adapter à différents cadre de travail.</p>
        </div>
    </div>
</template>


<script setup>

</script>


<style scoped>
#introduction{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 5em;
    background-color: rgb(179, 193, 202);
    color: white;
}

.presentation{
    width: 40%;
    font-size: 1.3em;
}

.presentation p {
    text-align: justify;
    text-indent: 3em;
    
}

img{
    width: 18em;
    height: 18em;
    border-radius: 50%;
    box-shadow: 1em 0.5em rgb(105, 133, 169);
}
</style>