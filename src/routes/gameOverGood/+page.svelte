<script lang="ts">
    function toGame() {
        window.location.href = '/credit';
    }
</script>

<style>
    .full-screen {
        background-image: url("https://c4.wallpaperflare.com/wallpaper/982/93/307/sci-fi-steampunk-blimp-ocean-wallpaper-preview.jpg");
        background-size: cover;
        cursor: pointer;
        height: 100vh;
        margin: 0; /* Supprime la marge par défaut */
        display: flex; /* Utilisé pour centrer le contenu */
        justify-content: center; /* Centrage horizontal */
        align-items: center; /* Centrage vertical */
    }

    .text-container {
        background-color: rgba(255, 255, 255, 0.8); /* Fond semi-transparent blanc */
        padding: 20px 40px; /* Espace autour du texte */
        border-radius: 10px; /* Coins arrondis */
        border: 2px solid black; /* Bordure noire */
        text-align: center; /* Centrer le texte */
    }

    .text-container h1 {
        color: black;
        font-size: 30px;
        font-weight: bold; /* Texte en gras */
        margin: 0; /* Supprime la marge par défaut */
    }
</style>

<div class="full-screen" on:click={toGame}>
    <div class="text-container">
        <h1>Vous avez perdu, vous êtes ruiné... MAIS... L'océan est sauvé !!!! Bravo !!! Cliquez pour accéder au crédit puis recommencer si vous l'osez.</h1>
    </div>
</div>
