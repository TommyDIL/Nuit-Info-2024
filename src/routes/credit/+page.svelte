<script>
   const colors = [['bg-p11', 'text-p12', 'border-p13'],
                  ['bg-p21', 'text-p22', 'border-p23'],
                  ['bg-p31', 'text-p32', 'border-p33'],
                  ['bg-p41', 'text-p42', 'border-p43'],
                  ['bg-p51', 'text-p52', 'border-p53'],
                  ['bg-back_cath', 'text-black', 'border-red-500']];

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function changeColor() {
  const nbColor = getRandomColor(); 

  const backgrounds = document.querySelectorAll('.background-random');
  backgrounds.forEach(function (background) {
    // Supprime toute classe de la liste des couleurs présente dans la classList de l'élément
    colors.forEach(color => {
      if (background.classList.contains(color[0])) {
        background.classList.remove(color[0]);
      }
    });
    
    // Ajoute une nouvelle couleur aléatoire
    background.classList.add(nbColor[0]);
  });

  const h1 = document.querySelectorAll('h1');

  h1.forEach(function (text) {
    // Supprime toute classe de la liste des couleurs présente dans la classList de l'élément
    colors.forEach(color => {
      if (text.classList.contains(color[1])) {
        text.classList.remove(color[1]);
      }
    });

    // Ajoute une nouvelle couleur aléatoire
    text.classList.add(nbColor[1]);
  });


  const p = document.querySelectorAll('p'); 

  p.forEach(function (text) {
    // Supprime toute classe de la liste des couleurs présente dans la classList de l'élément
    colors.forEach(color => {
      if (text.classList.contains(color[1])) {
        text.classList.remove(color[1]);
      }
    });

    // Ajoute une nouvelle couleur aléatoire
    text.classList.add(nbColor[1]);
  });

  const borders = document.querySelectorAll('img'); 

  borders.forEach(function (border) {
    // Supprime toute classe de la liste des couleurs présente dans la classList de l'élément
    colors.forEach(color => {
      if (border.classList.contains(color[2])) {
        border.classList.remove(color[2]);
      }
    });

    // Ajoute une nouvelle couleur aléatoire
    border.classList.add(nbColor[2]);
  });
}

</script>

<button on:click={changeColor} type="button" class="absolute m-3
text-white focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium 
rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-400 dark:hover:bg-gray-500">
  <img src="/src/images/changeColor.png" alt="Change Color" class="h-8 ">
</button>

<div class="background-random overflow-hidden flex items-center justify-center h-screen bg-back_cath">
    <div class="animate-upcredits max-w-[800px] text-center text-2xl space-y-[1.6rem]">
        <div class="flex flex-row items-center justify-between">
            <img class ="max-w-[300px] p-10" src="/src/images/info.png">
            <img class ="max-w-[400px] p-10" src="/src/images/asso.png">
        </div>
        <div>
            <h1 class="vt323-regular">NOTRE EQUIPE : </h1>
            <div class="flex flex-row p-5 items-center justify-center">
                <div class="m-5">
                    <p class="vt323-regular">Elliott MOIROUD</p>
                    <img src="/src/images/elliott.jpg" class="w-40 h-40 border-dashed border-red-500 border-2">
                </div>
                <div class="m-5">
                    <p class="vt323-regular">Julie TROGON</p>
                    <img src="/src/images/julie.jpg" class="w-40 h-40 border-dashed border-red-500 border-2">
                </div>
                <div class="m-5">
                    <p class="vt323-regular">Tommy Di LUNA</p>
                    <img src="/src/images/tommy.jpg" class="w-40 h-40 border-dashed border-red-500 border-2">
                </div>
            </div>
            <div class="flex flex-row p-5 items-center justify-center">
                <div class="m-5">
                    <p class="vt323-regular">Hugo FERUCCI</p>
                    <img src="/src/images/hugo.jpg" class="w-40 h-40 border-dashed border-red-500 border-2">
                </div>
                <div class="m-5">
                    <p class="vt323-regular">Chloé FAUCON</p>
                    <img src="/src/images/chloe.jpg" class="w-40 h-40 border-dashed border-red-500 border-2">
                </div>
                <div class="m-5">
                    <p class="vt323-regular">Martin ARNOUX</p>
                    <img src="/src/images/martin.jpg" class="w-40 h-40 border-dashed border-red-500 border-2">
                </div>
            </div>
            <div class="flex flex-row p-5 items-center justify-center">
                <div class="m-5">
                    <p class="vt323-regular">Natal FEVRE-BURDY</p>
                    <img src="/src/images/natal.jpg" class="w-40 h-40 border-dashed border-red-500 border-2">
                </div>
                <div class="m-5">
                    <p class="vt323-regular">Teva PHILIPPE</p>
                    <img src="/src/images/teva.jpg" class="w-40 h-40 border-dashed border-red-500 border-2">
                </div>
                <div class="m-5">
                    <p class="vt323-regular">Etienne MALABRE</p>
                    <img src="/src/images/etienne.jpg" class="w-40 h-40 border-dashed border-red-500 border-2">
                </div>
            </div>
        </div>

        <div>
          <h1>Remerciements spéciaux :</h1>
          <div class="flex flex-row p-5 items-center justify-center">
            <div class="flex flex-col p-5 items-center justify-center">
                <p class="vt323-regular">Luca Policastro</p>
                <img src="/src/images/luca.jpg" class="w-40 h-40 border-dashed border-red-500 border-2">
            </div>
            <div class="flex flex-col p-5 items-center justify-center">
                <p class="vt323-regular">Eispri Stic</p>
                <img src="/src/images/eispri.png" class="w-40 h-40 border-dashed border-red-500 border-2">
            </div>
            <div class="flex flex-col p-5 items-center justify-center">
                <p class="vt323-regular">Eispri Pizza</p>
                <img src="/src/images/pizza.jpg" class="w-40 h-40 border-dashed border-red-500 border-2">
            </div>
          </div>
          <div class="flex flex-row p-5 items-center justify-center">
            <div class="m-5">
                <p class="vt323-regular strong text-4xl">L'équipe enseignante</p>
            </div>
            <div class="m-5">
                <p class="vt323-regular strong text-4xl">Race for water</p>
            </div>
          </div>
        </div>
        <div class="m-10">

        </div>

        <div class="flex flex-col p-5 items-center justify-center m-30">
          <p class="vt323-regular text-6xl">Nuit de l'info 2024</p>
          <p class="vt323-regular text-5xl">05/12/2024 -&gt; 06/12/2024</p>
        </div>
      </div>
</div>