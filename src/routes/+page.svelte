<script lang="ts">
	import '$css/global.css';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	// Définir un tableau pour les logos
	const logos = [
		{ id: 'lol', src: '/src/images/lol.png' },
		{ id: 'discord', src: '/src/images/discord.png' },
		{ id: 'VSC', src: '/src/images/VSC.png' },
		{ id: 'dockerwhale', src: '/src/images/dockerwhale.png' }
	];

	let positions: {
		x: number;
		y: number;
		speedX: number;
		speedY: number;
	}[] = [];

	let randomLogo = logos[Math.floor(Math.random() * logos.length)];

	if (browser) {
		// États pour la position et la vitesse des logos
		positions = logos.map(() => ({
			x: Math.random() * (window.innerWidth - 100), // Position initiale aléatoire
			y: Math.random() * (window.innerHeight - 100),
			speedX: Math.random() * 10 + 2, // Vitesse aléatoire
			speedY: Math.random() * 10 + 2
		}));

		let animationFrame: number;

		// Fonction pour déplacer tous les logos
		function moveLogos() {
			positions = positions.map((pos) => {
				let { x, y, speedX, speedY } = pos;

				// Met à jour la position
				x += speedX;
				y += speedY;

				// Inverse la direction si un bord est atteint
				if (x > window.innerWidth - 100 || x < 0) {
					speedX = -speedX;
					x = Math.max(0, Math.min(x, window.innerWidth - 100));
				}
				if (y > window.innerHeight - 100 || y < 0) {
					speedY = -speedY;
					y = Math.max(0, Math.min(y, window.innerHeight - 100));
				}

				return { x, y, speedX, speedY };
			});

			animationFrame = requestAnimationFrame(moveLogos);
		}

		// Initialisation de l'animation
		onMount(() => {
			animationFrame = requestAnimationFrame(moveLogos);

			// Empêche le scroll de la page
			document.body.style.overflow = 'hidden';

			// Nettoie l'animation et restaure le scroll lors du démontage
			return () => {
				cancelAnimationFrame(animationFrame);
				document.body.style.overflow = '';
			};
		});
	}

	function backhome(clickedLogoId: string) {
		console.log(clickedLogoId);
		console.log(randomLogo.id);
		if (clickedLogoId === randomLogo.id) {
			window.location.href = '/game';
		}
	}
</script>

<div class="txt place-content-center rounded-md border-2">
	<p>prouve que tu n'es pas un robot, clique sur {randomLogo.id}</p>
</div>

<!-- Affichage des logos -->
{#if positions.length != 0}
	{#each logos as logo, i}
		<div
			class="logo m-10"
			style="transform: translate({positions[i].x}px, {positions[i].y}px);"
			on:click={() => backhome(logo.id)}>
			<img src={logo.src} alt={logo.id} draggable="false" />
		</div>
	{/each}
{/if}

<style>
	.logo {
		width: 160px;
		position: absolute;
		height: 160px;
	}
	body {
		margin: 0;
		overflow: hidden; /* Empêche le scroll */
	}
	.txt {
		position: absolute;
		top: 20px;
		left: 50%;
		transform: translateX(-50%);
		z-index: 10;
		background: white;
		padding: 10px;
		border-radius: 5px;
		text-align: center;
	}
</style>
