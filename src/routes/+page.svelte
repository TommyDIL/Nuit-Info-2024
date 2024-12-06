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
</script>

{#if is_orientation_portrait}
	<div class="absolute flex h-screen w-screen flex-col items-center justify-center space-y-8">
		<h1 class="text-center font-bold">Mettez votre téléphone à l'horizontal.</h1>
		<img src="src/img/rotate_phone.png" alt="Icône tourner le téléphone." />
	</div>
{:else}{/if}
