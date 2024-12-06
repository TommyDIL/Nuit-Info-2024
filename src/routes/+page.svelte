<script lang="ts">
	import '$css/global.css';
	import {popUp} from '$lib/popUp';
	let count = 0;
	function handle_click() {
		count += 1;
	}
	let array = [1, 2, 3, 4, 5];


	// Rappel : Offre, option1 puis :
	//	- Nombre pécheur
	//	- Prix du choix
	//	- Gain par minute
	//	- indice_ecologique

	const popUp1 = JSON.stringify(popUp("Hohoho jeune directeur ! Deux offres nous ont été faites. L'entreprise allemande 'EnerJ' nous propose de nous fournir en charbon tandis que l'Etat souhaite nous voir passer aux énergies éoliennes et solaires. Le charbon multiplierais nos gains par 150%. Les énergies renouvelables les diminuerons de 10%.", "Choisir le charbon.", 0, 150, 100, 60, "Faire le choix des énergies renouvelables.", 0, 150, 80, -10), null, 2);
	const popUp1Text1 = "Les scientifiques s'inquiète des causes du réchauffement climatique, l! Le Dr. Natasha Phil déclare 'les phytoplanctons disparaissent peu à peu. Or, ils sont la base de la chaine alimentaire marine. Si cette tendance ne s'inverse pas, les conséquences risque d'être gravissimes et irréversibles..."
	const popUp1Text2 = "A écrire"
	const popUp2 = JSON.stringify(popUp("Hi ! si je viens à vous aujourd'hui c'est parce que vous êtes l'élu ! Le gouvernement USMB que je représente à développé récemment une technologie de pointe !! Investissez en nous et je vous garanti que votre production sera multipliée par 50 !", "Accepter", 0, 1500, 5000, 90, "Refuser", 0, 0, 0, 0), null, 2);
	const popUp2Text1 = "Une immense explosion à eu lieu au centre de l'océan pacifique !! La flotte de la première entreprise de pêche de France à sombré dans les eaux profondes, laissant dérière elle une monstrueuse marrée noire de 300 million de litres de pétroles. Des millions d'espèces disparaissent à l'heure où nous écrivons cet articles, l'océan tout entier est condamné déclarent les excperts du GIEC. Les causes : les moteurs des navires auraient utilisés une technologie inconnue mais instable."
	const popUp2Text2 = "A écrire"
	const popUp3 = JSON.stringify(popUp("Vous vous débrouillez bien monsieurs le directeur ! Enfin je crois... Il est temps de choisir le type de pêches sur lequel nous allons concentrer notre production, Je vous demande de choisir entre la peche des fond marins à l'aide de grands filets. Le gorafi à même promis de financer nos filets, ce qui nous coutera peu ! Ou une pêche certes plus responsable, mais moins rentable...", "Fond marins", 0, 200, 1000, 30, "Pêche responsable", 0, 500, 150, -20), null, 2);
	const popUp3Text1 = "A ecrire"
	const popUp3Text2 = "A écrire"
	const popUp4 = JSON.stringify(popUp("Le GIEC vous contacte et vous implore de réduire votre production plastiques. Il vous explique que cela contribue au réchauffement climatique. Cependant, cela réduirait vos revenue de 20%, que faites vous ?","Minimiser l'utilisation du plastique", 0, 300, 80, -20,  "Vous ne pouveez pas vous permettre de changer de matériaux. Cela vous couterais trop cher", 0, 0, 100, 20), null, 2);
	const popUp4Text1 = "Un article scientifique publié par Le Monde fait écho de l'AMOC (circulation méridienne de renversement de l'Atlantique) qui représente les eaux chaudes qui partent des tropiques et se refroidissent jusqu'au poles. En raison du réchauffement climatique, elles ralentissent et réchauffent l'eau"
	const popUp4Text2 = "A écrire"
	//const popUp5 = JSON.stringify(popUp("Hohoho jeune directeur ! Deux offres nous ont été faites. L'entreprise allemande 'EnerJ' nous propose de nous fournir en charbon tandis que l'Etat souhaite nous voir passer aux énergies éoliennes et solaires. Le charbon multiplierais nos gains par 150%. Les énergies renouvelables les diminuerons de 10%.", "Choisir le charbon.", 0, 150, 100,  "Faire le choix des énergies renouvelables.", 0, 150, 20), null, 2);
</script>

<div>
	{popUp1}
</div>

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
