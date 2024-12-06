interface PopUp {
    offer: string;
    choices : Array<{
        title: string;
        nb_fishermen: number;
        price: number;
        gain_par_minutes: number;
        indice_ecologique: number;
    }>;
}

export function popUp(offre:string, titleChoice1:string, nbFishermenChoice1:number, PriceChoice1:number, GainParMinutes1: number, IndiceEcologique1: number, titleChoice2:string, nbFishermenChoice2:number, PriceChoice2:number, GainParMinutes2: number, IndiceEcologique2: number): PopUp {
    
    let offer_table = {
        offer: offre,
        choices: [{
            title : titleChoice1,
            nb_fishermen: nbFishermenChoice1,
            price: PriceChoice1,
            gain_par_minutes: GainParMinutes1,
            indice_ecologique: IndiceEcologique1
        },{
            title : titleChoice2,
            nb_fishermen: nbFishermenChoice2,
            price: PriceChoice2,
            gain_par_minutes:GainParMinutes2,
            indice_ecologique: IndiceEcologique2
        }]
    }
    return offer_table;
}

export function initPopUp(){
    
    const popUp1 = JSON.stringify(popUp("Hohoho jeune directeur ! Deux offres nous ont été faites. L'entreprise allemande 'EnerJ' nous propose de nous fournir en charbon tandis que l'Etat souhaite nous voir passer aux énergies éoliennes et solaires. Le charbon multiplierais nos gains par 150%. Les énergies renouvelables les diminuerons de 10%.", "Choisir le charbon.", 0, 150, 100, 60, "Faire le choix des énergies renouvelables.", 0, 150, 80, -10), null, 2);
	const popUp1Text1 = "Les scientifiques s'inquiète des causes du réchauffement climatique, l! Le Dr. Natasha Phil déclare 'les phytoplanctons disparaissent peu à peu. Or, ils sont la base de la chaine alimentaire marine. Si cette tendance ne s'inverse pas, les conséquences risque d'être gravissimes et irréversibles...";
	const popUp1Text2 = "Des dauphins ont été aperçus en grand nombre près des côtes bretonnes, un signe encourageant pour la faune marine locale.";
	const popUp2 = JSON.stringify(popUp("Hi ! si je viens à vous aujourd'hui c'est parce que vous êtes l'élu ! Le gouvernement USMB que je représente à développé récemment une technologie de pointe !! Investissez en nous et je vous garanti que votre production sera multipliée par 50 !", "Accepter", 0, 1500, 5000, 90, "Refuser", 0, 0, 0, 0), null, 2);
	const popUp2Text1 = "Une immense explosion à eu lieu au centre de l'océan pacifique !! La flotte de la première entreprise de pêche de France à sombré dans les eaux profondes, laissant dérière elle une monstrueuse marrée noire de 300 million de litres de pétroles. Des millions d'espèces disparaissent à l'heure où nous écrivons cet articles, l'océan tout entier est condamné déclarent les excperts du GIEC. Les causes : les moteurs des navires auraient utilisés une technologie inconnue mais instable.";
	const popUp2Text2 = "Les plages méditerranéennes enregistrent une hausse de l'activité des hippocampes, témoignant d'une eau plus propre.";
	const popUp3 = JSON.stringify(popUp("Vous vous débrouillez bien monsieurs le directeur ! Enfin je crois... Il est temps de choisir le type de pêches sur lequel nous allons concentrer notre production, Je vous demande de choisir entre la peche des fond marins à l'aide de grands filets. Le gorafi à même promis de financer nos filets, ce qui nous coutera peu ! Ou une pêche certes plus responsable, mais moins rentable...", "Fond marins", 0, 200, 1000, 30, "Pêche responsable", 0, 500, 150, -20), null, 2);
	const popUp3Text1 = "Des espèces menacées marines disparaissent selon le directeur de la fédération française de pêche. Il faut limiter les pêches abusives...";
	const popUp3Text2 = "Un sanctuaire marin récemment établi dans l'océan Indien a vu un retour notable des tortues de mer en seulement quelques mois.";
	const popUp4 = JSON.stringify(popUp("Le GIEC vous contacte et vous implore de réduire votre production plastiques. Il vous explique que cela contribue au réchauffement climatique. Cependant, cela réduirait vos revenue de 20%, que faites vous ?","Minimiser l'utilisation du plastique", 0, 300, 80, -20,  "Vous ne pouvez pas vous permettre de changer de matériaux. Cela vous couterais trop cher", 0, 0, 100, 20), null, 2);
	const popUp4Text1 = "Les efforts de nettoyage des plages ont permis de récupérer plusieurs tonnes de déchets, améliorant la santé des écosystèmes côtiers.";
	const popUp4Text2 = "Un article scientifique publié par Le Monde fait écho de l'AMOC (circulation méridienne de renversement de l'Atlantique) qui représente les eaux chaudes qui partent des tropiques et se refroidissent jusqu'au poles. En raison du réchauffement climatique, elles ralentissent et réchauffent l'eau";
	let table = [[popUp1, [popUp1Text1, 5], [popUp1Text2, 5], 600], [popUp2, [popUp1Text1, 15], [popUp1Text2, 15], 12000], [popUp3, [popUp1Text1, 4], [popUp1Text2, 4], 24000], [popUp4, [popUp1Text1, 10], [popUp1Text2, 10]], 60000];
    return table;
}
