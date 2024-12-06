<script lang="ts">

    import '$css/game.css';
    import {verificationDefaite, verificationLED} from "./../../lib/popUp";

    var nbFish = 0;

    var money = 0;
    var moneyPerFish = 0.9;
    
    var nbFisherman = 0;
    var fishPerFisherman = 30;

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

    setInterval(() => {
        money += nbFish * moneyPerFish;
        nbFish = 0;


    }, 5000);

    setInterval(() => {
        nbFish += fishPerFisherman * nbFisherman;
    }, 1000);


    var qrCodesList = ["/src/images/teva.jpg", "/src/images/tommy.jpg", "/src/images/martin.jpg"];


    function postItClicked() {
        let section_qr = document.createElement("section");
        var body = document.body;
        body.appendChild(section_qr);

        section_qr.id = "#postItQrCode";

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

</script>


<div class="flex flex-row-reverse h-screen space-between justify-center ">
    <div class=" w-5/6 flex flex-col"> 
        
        <div class=" absolute bottom-0">

            <div class="absolute inset-0 ">
                <div class="absolute bg-back_cath -z-10 inset-0 mx-20" >
                    
                </div>
                
                <div class=" absolute text-hack vt323-regular text-xl inset-0 " id="text-container">

                    
                    
                    <button on:click={addFish} class="z-40">Pêcher</button>
                    
                    
                    <p>Nombre de poissons : {nbFish}</p>
                    
                    <p>Argent : {Math.round(money * 100) / 100}€</p>
                    
                    <p>Prix du poisson : {Math.round(moneyPerFish * 100) / 100}€</p>
                    <p>Nombre de pêcheurs : {Math.round(nbFisherman * 100) / 100}</p>
                    <button on:click={buyFisherman}>Achat d'un pêcheur ({Math.round(fishermanPrice * 100) / 100}€)</button>
                </div>
            </div>
                
            <img class="z-20 pointer-events-none" src={currentImage} alt="AVENGERSSS">
        </div>


    </div>
    
    <div class=" w-1/6">
            <button on:click={postItClicked}>
                <img class="z-20 pointer-events-none" src="/src/images/postit.png" alt="Post-it contenant les QR codes">
            </button>
    </div>
</div>
<!-- 
top-0 bottom-15 left-0 right-0 p-20 -->
<!-- top-15 bottom-0 left-0 right-0 p-20 -->
