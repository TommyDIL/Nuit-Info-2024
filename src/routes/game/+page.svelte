<script lang="ts">
    import '$css/game.css';
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



</script>


<div class="flex flex-row-reverse h-screen space-between justify-center ">
    <div class=" w-5/6 flex flex-col"> 
        
        <div class=" absolute bottom-0">

            <div class="absolute inset-0 my-20 mx-80">
                <div class="absolute bg-back_cath -z-10 inset-0 mx-20" >
                    
                </div>
                
<<<<<<< HEAD
                <div class=" absolute text-hack vt323-regular text-xl inset-0 ml-60 mt-60 text-7xl ">
=======
                <div class=" absolute text-hack vt323-regular text-xl inset-0 " id="text-container">
>>>>>>> edf9bee (css!)
                    
                    
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
    
    <div class="bg-red-300 w-1/6">
        <img class="z-20 pointer-events-none" src="/src/images/postit.png" alt="AVENGERS">
    </div>
</div>
<!-- 
top-0 bottom-15 left-0 right-0 p-20 -->
<!-- top-15 bottom-0 left-0 right-0 p-20 -->
