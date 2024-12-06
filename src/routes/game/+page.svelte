<script lang="ts">
    import '$css/game.css';
    import { initPopUp } from '$lib/popUp';
    var mailBox : String[] = []; 
    var nbFish = 0;

    var money = 0;
    var moneyPerFish = 0.9;
    
    var nbFisherman = 0;
    var fishPerFisherman = 30;

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

    setInterval(() => {
        money += nbFish * moneyPerFish;
        nbFish = 0;


    }, 5000);

    setInterval(() => {
        nbFish += fishPerFisherman * nbFisherman;
    }, 1000);


    function displayLetter(name:string){
        name = 'j'+name;
        mailBox.push(name);        
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
                    
                    <p>Argent : {money}€</p>
                    
                    <p>Prix du poisson : {Math.round(moneyPerFish * 100) / 100}€</p>
                    <p>Nombre de pêcheurs : {nbFisherman}</p>
                    <button on:click={buyFisherman}>Achat d'un pêcheur ({fishermanPrice}€)</button>
                </div>
            </div>
                
            <img class="z-20 pointer-events-none" src="/src/images/tv.png" alt="AVENGERSSS">
        </div>


    </div>
    
    <div class=" w-1/6">
        <div class="h-1/2">
            <img class="z-20 pointer-events-none" src="/src/images/postit.png" alt="AVENGERS">
        </div>
        <div class="h-1/2">
            {#if mailBox.length > 0}
                <img class="z-20 pointer-events-none" src="/src/img/{mailBox[mailBox.length-1]}.png" alt="AVENGERS">
            {/if}
        </div>
        
    </div>
</div>
<!-- 
top-0 bottom-15 left-0 right-0 p-20 -->
<!-- top-15 bottom-0 left-0 right-0 p-20 -->
