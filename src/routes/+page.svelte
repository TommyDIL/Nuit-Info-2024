<script lang="ts">
	import '$css/global.css';
	let count = 0;
	function handle_click() {
		count += 1;
	}
	let connexion_database = false;
	let array = [1, 2, 3, 4, 5];
	async function test_connexion_base(){
		let res = await fetch("/api/mongo", {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		}
		});
		if(res.status == 200){
			connexion_database = true;
		}else{
			let res_json = await res.json();
			console.log(res_json);
			connexion_database = false;
		}
	}
</script>

<div class="flex-center">
	<h1 class="text-4xl">Welcome to SvelteKit</h1>
	<h2 class="my-4">On est sur une base pour la nuit de l'info</h2>

	{#await test_connexion_base()}
		<p>Connexion en cours</p>
	{:then}
		{#if connexion_database}
			<p>Connexion réussi</p>
		{:else}
			<p>Connexion échoué</p>
		{/if}
	{:catch error}
		<p>Erreur de connexion</p>		
	{/await}

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
