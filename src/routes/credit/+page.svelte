<script lang='ts'>
  	import { browser } from '$app/environment';
    import changeColor_path from '/src/images/changeColor.png';
    import info from '/src/images/info.png';
    import asso from '/src/images/asso.png';
    import elliott from '/src/images/elliott.jpg';
    import julie from '/src/images/julie.jpg';
    import tommy from '/src/images/tommy.jpg';
    import hugo from '/src/images/hugo.jpg';
    import chloe from '/src/images/chloe.jpg';
    import martin from '/src/images/martin.jpg';
    import natal from '/src/images/natal.jpg';
    import teva from '/src/images/teva.jpg';
    import etienne from '/src/images/etienne.jpg';
    import luca from '/src/images/luca.jpg';
    import eispri from '/src/images/eispri.png';
    import pizza from '/src/images/pizza.jpg';
    
   const colors = [['bg-p11', 'text-p12', 'border-p13'],
                  ['bg-p21', 'text-p22', 'border-p23'],
                  ['bg-p31', 'text-p32', 'border-p33'],
                  ['bg-p41', 'text-p42', 'border-p43'],
                  ['bg-p51', 'text-p52', 'border-p53'],
                  ['bg-back_cath', 'text-black', 'border-red-500']];

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function changeColor(name: string, index: number, randomColor: string[]) {
  const elements = document.querySelectorAll(name);
  elements.forEach(function (element) {
    // Supprime toute classe de la liste des couleurs présente dans la classList de l'élément
    colors.forEach(color => {
      if (element.classList.contains(color[index])) {
        element.classList.remove(color[index]);
      }
    });
    
    // Ajoute une nouvelle couleur aléatoire
    element.classList.add(randomColor[index]);
  });
}

function changeAllColor() {
  const randomColor = getRandomColor(); 

  changeColor('.background-random', 0, randomColor);
  changeColor('h1', 1, randomColor);
  changeColor('p', 1, randomColor);
  changeColor('img', 2, randomColor);
}

setTimeout(() => {
  if (browser) {
    window.location.href = '/start';
  }
}, 21000);

</script>

<button on:click={changeAllColor} type="button" class="absolute m-3
text-white focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium 
rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-400 dark:hover:bg-gray-500">
  <img src="{changeColor_path}" alt="Change Color" class="h-8 ">
</button>

<div class="background-random overflow-hidden flex items-center justify-center h-screen bg-back_cath">
    <div class="animate-upcredits max-w-[800px] text-center text-2xl space-y-[1.6rem]">
        <div class="flex flex-row items-center justify-between">
            <img class ="max-w-[300px] p-10" src="{info}">
            <img class ="max-w-[400px] p-10" src="{asso}">
        </div>
        <div>
            <h1 class="vt323-regular">NOTRE EQUIPE : </h1>
            <div class="flex flex-row p-5 items-center justify-center">
                <div class="m-5">
                    <p class="vt323-regular">Elliott MOIROUD</p>
                    <img src="{elliott}" class="w-40 h-40 border-dashed border-red-500 border-2">
                </div>
                <div class="m-5">
                    <p class="vt323-regular">Julie TROGON</p>
                    <img src="{julie}" class="w-40 h-40 border-dashed border-red-500 border-2">
                </div>
                <div class="m-5">
                    <p class="vt323-regular">Tommy Di LUNA</p>
                    <img src="{tommy}" class="w-40 h-40 border-dashed border-red-500 border-2">
                </div>
            </div>
            <div class="flex flex-row p-5 items-center justify-center">
                <div class="m-5">
                    <p class="vt323-regular">Hugo FERRUCCI</p>
                    <img src="{hugo}" class="w-40 h-40 border-dashed border-red-500 border-2">
                </div>
                <div class="m-5">
                    <p class="vt323-regular">Chloé FAUCON</p>
                    <img src="{chloe}" class="w-40 h-40 border-dashed border-red-500 border-2">
                </div>
                <div class="m-5">
                    <p class="vt323-regular">Martin ARNOUX</p>
                    <img src="{martin}" class="w-40 h-40 border-dashed border-red-500 border-2">
                </div>
            </div>
            <div class="flex flex-row p-5 items-center justify-center">
                <div class="m-5">
                    <p class="vt323-regular">Natal FEVRE-BURDY</p>
                    <img src="{natal}" class="w-40 h-40 border-dashed border-red-500 border-2">
                </div>
                <div class="m-5">
                    <p class="vt323-regular">Teva PHILIPPE</p>
                    <img src="{teva}" class="w-40 h-40 border-dashed border-red-500 border-2">
                </div>
                <div class="m-5">
                    <p class="vt323-regular">Etienne MALABRE</p>
                    <img src="{etienne}" class="w-40 h-40 border-dashed border-red-500 border-2">
                </div>
            </div>
        </div>

        <div>
          <h1>Remerciements spéciaux :</h1>
          <div class="flex flex-row p-5 items-center justify-center">
            <div class="flex flex-col p-5 items-center justify-center">
                <p class="vt323-regular">Luca Policastro</p>
                <img src="{luca}" class="w-40 h-40 border-dashed border-red-500 border-2">
            </div>
            <div class="flex flex-col p-5 items-center justify-center">
                <p class="vt323-regular">Eispri Stic</p>
                <img src="{eispri}" class="w-40 h-40 border-dashed border-red-500 border-2">
            </div>
            <div class="flex flex-col p-5 items-center justify-center">
                <p class="vt323-regular">Eispri Pizza</p>
                <img src="{pizza}" class="w-40 h-40 border-dashed border-red-500 border-2">
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