<script lang="ts">
    import '$css/game.css';
    import {popUp} from '$lib/popUp';
    var nbFish = 0;

    var money = 0;
    var moneyPerFish = 0.9;
    
    var nbFisherman = 0;
    var fishPerFisherman = 1;

    var fishermanPrice = 30;

    function addFish() {
        nbFish += 1;
    }

    function buyFisherman(){
        if (money >= fishermanPrice){
            nbFisherman += 1;
            money -= fishermanPrice;

            fishermanPrice *= 1.6;
        }
    }

    var next_event = 50;
    var indiceEvent = 0;
    var EventList = [event1, event2, event3, event4, event5];
    var actual_dilem = "";
    var option1 = "";
    var option2 = "";
    var karma = 0;

    function show_popup(){
        var popup = document.querySelector(".popup");
        popup?.classList.remove("hidden");
    }

    function close_popup(){
        var popup = document.querySelector(".popup");
        popup?.classList.add("hidden");
    }


    function event1() {
    show_popup();

    // Définir les textes des options et l'énoncé du dilemme
    actual_dilem = "Choisissez votre offre d'énergie.";
    option1 = "charbon\ncoût : 10";
    option2 = "renouvelable\ncoût: 50";

    // Sélectionner les boutons des options
    const o1 = document.querySelector(".option1");
    const o2 = document.querySelector(".option2");

    // Vérifier si les boutons existent avant d'ajouter les écouteurs
    if (o1 && o2) {
        // Ajouter des listeners pour les options
        o1.addEventListener("click", () => {
            karma+=60;
            money-=10;
            close_popup();
            setTimeout(() => {
                displayLetters("1_1.png")
            }, 30000);
        });

        o2.addEventListener("click", () => {
            karma-=10;
            money-=50;
            close_popup();
            setTimeout(() => {
                displayLetters("1_2.png")
            }, 30000);
        });
    } else {
        console.error("Les éléments .option1 et/ou .option2 n'ont pas été trouvés !");
    }
}


    function event2(){
        console.log(2);
    }

    function event3(){
        console.log(3);
    }

    function event4(){
        console.log(4);
    }
    function event5(){
        console.log(5);
    }

    setInterval(() => {
        if(nbFish>5){
            money += 5 * moneyPerFish;
            nbFish -= 5;
        }else{
            money += nbFish * moneyPerFish;
            nbFish = 0;
        }
        if(money>next_event){
            EventList[indiceEvent]();
            indiceEvent++;
            next_event = next_event + 100 * indiceEvent;
        
        }
    }, 2000);

    setInterval(() => {
        nbFish += fishPerFisherman * nbFisherman;
    }, 1000);

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
    console.log(popUp1);
	
    const popUp2 = JSON.stringify(popUp("Hi ! si je viens à vous aujourd'hui c'est parce que vous êtes l'élu ! Le gouvernement USMB que je représente à développé récemment une technologie de pointe !! Investissez en nous et je vous garanti que votre production sera multipliée par 50 !", "Accepter", 0, 1500, 5000, 90, "Refuser", 0, 0, 0, 0), null, 2);
	const popUp2Text1 = "Une immense explosion à eu lieu au centre de l'océan pacifique !! La flotte de la première entreprise de pêche de France à sombré dans les eaux profondes, laissant dérière elle une monstrueuse marrée noire de 300 million de litres de pétroles. Des millions d'espèces disparaissent à l'heure où nous écrivons cet articles, l'océan tout entier est condamné déclarent les excperts du GIEC. Les causes : les moteurs des navires auraient utilisés une technologie inconnue mais instable."
	const popUp2Text2 = "A écrire"
	const popUp3 = JSON.stringify(popUp("Vous vous débrouillez bien monsieurs le directeur ! Enfin je crois... Il est temps de choisir le type de pêches sur lequel nous allons concentrer notre production, Je vous demande de choisir entre la peche des fond marins à l'aide de grands filets. Le gorafi à même promis de financer nos filets, ce qui nous coutera peu ! Ou une pêche certes plus responsable, mais moins rentable...", "Fond marins", 0, 200, 1000, 30, "Pêche responsable", 0, 500, 150, -20), null, 2);
	const popUp3Text1 = "A ecrire"
	const popUp3Text2 = "A écrire"
	const popUp4 = JSON.stringify(popUp("Le GIEC vous contacte et vous implore de réduire votre production plastiques. Il vous explique que cela contribue au réchauffement climatique. Cependant, cela réduirait vos revenue de 20%, que faites vous ?","Minimiser l'utilisation du plastique", 0, 300, 80, -20,  "Vous ne pouveez pas vous permettre de changer de matériaux. Cela vous couterais trop cher", 0, 0, 100, 20), null, 2);
	const popUp4Text1 = "Un article scientifique publié par Le Monde fait écho de l'AMOC (circulation méridienne de renversement de l'Atlantique) qui représente les eaux chaudes qui partent des tropiques et se refroidissent jusqu'au poles. En raison du réchauffement climatique, elles ralentissent et réchauffent l'eau"
	const popUp4Text2 = "A écrire"

    

</script>


<div class="flex flex-row-reverse h-screen space-between justify-center ">
    <div class=" w-5/6 flex flex-col"> 
        
        <div class=" absolute bottom-0">

            <div class="absolute inset-0 ">
                <div class="absolute bg-back_cath -z-10 inset-0 mx-20" >
                    
                </div>

                
                <div class=" absolute text-hack vt323-regular text-xl inset-0 " id="text-container">

                    <div class="popup hidden bg-back_cath w-30 h-30 absolute top-50 p-5 border-hack border-solid border-2">
                        {actual_dilem}
                        <div class="flex flex-row">
                            <div class="border-hack option1 border-solid border-2 p-2 m-1 cursor-pointer hover:bg-green-900"><p class="underline-offset-2">{option1}</p></div>
                            <div class="border-hack option2 border-solid border-2 p-2 m-1 cursor-pointer hover:bg-green-900"><p class="underline-offset-2">{option2}</p></div>
                        </div> 
                    </div>

                    
                    
                    <button on:click={addFish} class="border-hack option2 border-solid border-2 p-1 m-1 cursor-pointer hover:bg-green-900">Pêcher</button>
                    
                    
                    <p>Nombre de poissons : {nbFish}</p>
                    
                    <p>Argent : {money.toFixed(1)}€</p>
                    
                    <p>Prix du poisson : {((moneyPerFish * 100) / 100).toFixed(1)}€</p>
                    <p>Nombre de pêcheurs : {nbFisherman}</p>
                    <button on:click={buyFisherman} class="border-hack option2 border-solid border-2 p-1 m-1 cursor-pointer hover:bg-green-900">Achat d'un pêcheur ({fishermanPrice}€)</button>
                </div>
            </div>
                
            <img class="z-20 pointer-events-none" src="/src/images/tv.png" alt="AVENGERSSS">
        </div>


    </div>
    
    <div class=" w-1/6">
        <img class="z-20 pointer-events-none" src="/src/images/postit.png" alt="AVENGERS">
    </div>
</div>
<!-- 
top-0 bottom-15 left-0 right-0 p-20 -->
<!-- top-15 bottom-0 left-0 right-0 p-20 -->
