<script lang="ts">
	import { browser } from '$app/environment';

	import '$css/global.css';

	let is_orientation_portrait = false;

	if (browser) {
		is_orientation_portrait = window.matchMedia('(orientation: portrait)').matches;

		window.matchMedia('(orientation: portrait)').addEventListener('change', (e) => {
			is_orientation_portrait = e.matches;
		});
	}


	import { onMount } from 'svelte';

	// Définir un tableau pour les logos
	const logos = [
		{ id: '$lib/images/456.png', src: '$lib/images/lol.png' },
		{ id: '$lib/images/741.png', src: '$lib/images/discord.png' },
		{ id: '$lib/images/789.png', src: '$lib/images/VSC.png' },
		{ id: '/public/images/123.png', src: '/public/images/dockerwhale.png' }
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
			speedX:  2, // Vitesse aléatoire
			speedY:  2
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
			window.location.href = '/start';
		}
	}

</script>


{#if is_orientation_portrait}
	<div class="absolute flex h-screen w-screen flex-col items-center justify-center space-y-8">
		<h1 class="text-center font-bold">Mettez votre téléphone à l'horizontal.</h1>
		<img src="src/img/rotate_phone.png" alt="Icône tourner le téléphone." />
	</div>
{:else}

	<div class="txt place-content-center rounded-md border-2">
		<p>prouve que tu n'es pas un robot, clique sur <img class="h-5 inline" src="{randomLogo.id}"></p>
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
