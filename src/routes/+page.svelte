<script lang="ts">
	import '$css/global.css';
	let count = 0;
	function handle_click() {
		count += 1;
	}
	let array = [1, 2, 3, 4, 5];
</script>

<div class="flex-center">
	<h1 class="text-4xl">Welcome to SvelteKit</h1>
	<h2 class="my-4">On est sur une base pour la nuit de l'info</h2>

	<p>
		Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation
	</p>
</div>

<div class="lien-utile flex flex-row space-x-4 p-4">
	<div class="card bg-base-100 p-4 shadow-md">
		<p>
			Pour les flex box vous avez ce <a
				href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/"
				target="_blank">lien</a
			>
		</p>
	</div>
	<div class="card bg-base-100 p-4 shadow-md">
		<p>Pour <a href="https://daisyui.com/" target="_blank">DaysiUI voici le lien</a></p>
	</div>
	<div class="card bg-base-100 p-4 shadow-md">
		<p>Voici un exemple pour les conditions dans la page</p>
		<p class="center">
			Nombre de click : {count}
		</p>
		<button on:click={handle_click}>Click me</button>
	</div>
	<div class="card bg-base-100 p-4 shadow-md">
		<p>Voici un exemple pour les boucles dans la page</p>
		<ul class="center">
			{#each array as item}
				<li>{item}</li>
			{/each}
		</ul>
	</div>
	<div class="card bg-base-100 p-4 shadow-md">
		<p>
			Pour le reste voici <a
				href="https://svelte.dev/tutorial/svelte/welcome-to-svelte"
				target="_blank">un lien vers la doc svelte/sveltekit</a
			>
		</p>
	</div>
</div>
