<script lang="ts">
    function toGame() {
        window.location.href = '/game';
    }
</script>

<style>
    .full-screen {
        background-image: url('https://wallup.net/wp-content/uploads/2018/10/04/62285-steampunk-mechanical-ship-fantasy-ocean-sea-flight-clouds.jpg');
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
        <h1>Cliquez sur l'écran pour commencer à jouer</h1>
    </div>
</div>
