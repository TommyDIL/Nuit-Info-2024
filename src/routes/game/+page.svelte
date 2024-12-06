<script lang="ts">

    import '$css/game.css';
    import { initPopUp } from '$lib/popUp';
    var mailBox : String = ""; 
    import {verificationDefaite, verificationLED} from "./../../lib/popUp";

    var nbFish = 0;

    var money = 0;
    var moneyPerFish = 0.9;
    
    var nbFisherman = 0;
    var fishPerFisherman = 1;

    var fishermanPrice = 30;

    var score : number =0 ;
    var texte_led = (score)

    var currentImage = "/src/images/projet_g.png";

    var img_led = verificationLED(score)
    if (img_led == "Red"){
        currentImage = "/src/images/projet_r.png"
    }
    else if (img_led == "Orange"){
        currentImage = "/src/images/projet_y.png"
    }
    else {
        currentImage = "/src/images/projet_g.png"
    }

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

    var next_event = 30;
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
                    displayLetter("1_1.png")
                }, 1000);
            });

            o2.addEventListener("click", () => {
                karma-=10;
                money-=30;
                close_popup();
                setTimeout(() => {
                    displayLetter("1_2.png")
                }, 1000);
            });
        } else {
            console.error("Les éléments .option1 et/ou .option2 n'ont pas été trouvés !");
        }
    }


    function event2(){
        show_popup();

        // Définir les textes des options et l'énoncé du dilemme
        actual_dilem = "tester nouveau moteur innovant ?";
        option1 = "Accepter\nProduction pecheur x10";
        option2 = "Refuser";

        // Sélectionner les boutons des options
        const o1 = document.querySelector(".option1");
        const o2 = document.querySelector(".option2");

        // Vérifier si les boutons existent avant d'ajouter les écouteurs
        if (o1 && o2) {
            // Ajouter des listeners pour les options
            o1.addEventListener("click", () => {
                close_popup();
                setTimeout(() => {
                    displayLetter("2_1.png")
                    karma+=80
                }, 30000);
            });

            o2.addEventListener("click", () => {
                close_popup();
            });
        } else {
            console.error("Les éléments .option1 et/ou .option2 n'ont pas été trouvés !");
        }
    }

    function event3(){
        show_popup();

        // Définir les textes des options et l'énoncé du dilemme
        actual_dilem = "Comment voulez vous gerer vos employer.";
        option1 = "Les payer plus\ncoût : 100";
        option2 = "Embaucher plus\ncoût: 50 (+10 pecheurs)";

        // Sélectionner les boutons des options
        const o1 = document.querySelector(".option1");
        const o2 = document.querySelector(".option2");

        // Vérifier si les boutons existent avant d'ajouter les écouteurs
        if (o1 && o2) {
            // Ajouter des listeners pour les options
            o1.addEventListener("click", () => {
                if(money>=100){
                    karma+=20;
                    money-=100;
                    close_popup();
                    fishPerFisherman = fishPerFisherman * 2;
                    setTimeout(() => {
                        displayLetter("3_1.png");
                    }, 1000);
                }
            });

            o2.addEventListener("click", () => {
                if(money>=50){
                    karma-=10;
                    money-=50;
                    close_popup();
                    nbFisherman += 10;
                    setTimeout(() => {
                        displayLetter("3_2.png")
                    }, 1000);
                }
            });
        } else {
            console.error("Les éléments .option1 et/ou .option2 n'ont pas été trouvés !");
        }
    }

    function event4(){
        show_popup();

        // Définir les textes des options et l'énoncé du dilemme
        actual_dilem = "Le GIEC vous imlore de réduire vos productions plastiques.";
        option1 = "Accepter\nRéduit les revenus de 20%";
        option2 = "Refuser\n";

        // Sélectionner les boutons des options
        const o1 = document.querySelector(".option1");
        const o2 = document.querySelector(".option2");

        // Vérifier si les boutons existent avant d'ajouter les écouteurs
        if (o1 && o2) {
            // Ajouter des listeners pour les options
            o1.addEventListener("click", () => {
                karma-=60;
                moneyPerFish = moneyPerFish * 0.8;
                close_popup();
                setTimeout(() => {
                    displayLetter("4_1.png");
                }, 1000);
            });

            o2.addEventListener("click", () => {
    
                karma+=20;
                close_popup();
                setTimeout(() => {
                    displayLetter("4_2.png")
                }, 1000);
            });
        } else {
            console.error("Les éléments .option1 et/ou .option2 n'ont pas été trouvés !");
        }
    }
    function event5(){
        show_popup();

        // Définir les textes des options et l'énoncé du dilemme
        actual_dilem = "Comment voulez vous pecher ?";
        option1 = "Filets\n";
        option2 = "Traditionnel\n";

        // Sélectionner les boutons des options
        const o1 = document.querySelector(".option1");
        const o2 = document.querySelector(".option2");

        // Vérifier si les boutons existent avant d'ajouter les écouteurs
        if (o1 && o2) {
            // Ajouter des listeners pour les options
            o1.addEventListener("click", () => {
                karma-=30;
                fishPerFisherman = fishPerFisherman + 2;
                close_popup();
                setTimeout(() => {
                    displayLetter("5_1.png");
                }, 1000);
            });

            o2.addEventListener("click", () => {

                karma+=40;
                close_popup();
                setTimeout(() => {
                    displayLetter("5_2.png")
                }, 1000);
            });
        } else {
            console.error("Les éléments .option1 et/ou .option2 n'ont pas été trouvés !");
        }
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
            next_event = next_event + 50 * indiceEvent;
            if(karma>100){
                window.location.href = '/gameOverBad'
            }else{
                if(karma<-100){
                    window.location.href = '/gameOverGood'
                }
            }
        
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

    function displayLetter(name:string){
        name = 'j'+name;
        mailBox = name;        
    }


    var qrCodesList = ["/src/images/qr_image.png", "/src/images/qr_image1.png", "/src/images/qr_image2.png"];


    function postItClicked() {
        let section_qr = document.createElement("section");
        var body = document.body;
        body.appendChild(section_qr);

        section_qr.id = "postItQrCode";

        qrCodesList.forEach(qrCode => {
            let qrArticle = document.createElement("article");
            section_qr.appendChild(qrArticle);

            let qrBouton = document.createElement("button");
            qrArticle.appendChild(qrBouton);

            let qrImage = document.createElement("img");
            qrImage.src = qrCode;

            qrBouton.appendChild(qrImage);
        });

        let exitButton = document.createElement("button");
        exitButton.id = "exitQR"
        exitButton.innerHTML = "X"
        exitButton.addEventListener("click", () => {
            body.removeChild(section_qr);
        });
        section_qr.appendChild(exitButton);
    }

	// Rappel : Offre, option1 puis :
	//	- Nombre pécheur
	//	- Prix du choix
	//	- Gain par minute
	//	- indice_ecologique



    

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
                    <button on:click={buyFisherman} class="border-hack option2 border-solid border-2 p-1 m-1 cursor-pointer hover:bg-green-900">Achat d'un pêcheur ({fishermanPrice.toFixed(1)}€)</button>
                </div>
            </div>
                
            <img class="z-20 pointer-events-none" src={currentImage} alt="AVENGERSSS">
        </div>


    </div>
    
    <div class=" w-1/6">
        <div class="h-1/2">
            <button on:click={postItClicked}>
                <img class="z-20 pointer-events-none" src="/src/images/postit.png" alt="Post-it contenant les QR codes">
            </button>
        </div>
        <div class="h-1/2">
            {#if mailBox != ""}
                
                <img class="z-20 pointer-events-none" src="/src/images/letters/{mailBox}" alt="Lettre">
            {/if}
        </div>  
    </div>
</div>
<!-- 
top-0 bottom-15 left-0 right-0 p-20 -->
<!-- top-15 bottom-0 left-0 right-0 p-20 -->
