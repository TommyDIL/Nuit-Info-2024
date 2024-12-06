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
	const popUp1Text1 = "j1_1.png";
	const popUp1Text2 = "j1_2.png";
	const popUp2 = JSON.stringify(popUp("Hi ! si je viens à vous aujourd'hui c'est parce que vous êtes l'élu ! Le gouvernement USMB que je représente à développé récemment une technologie de pointe !! Investissez en nous et je vous garanti que votre production sera multipliée par 50 !", "Accepter", 0, 1500, 5000, 90, "Refuser", 0, 0, 0, 0), null, 2);
	const popUp2Text1 = "j2_1.png";
	const popUp2Text2 = "j2_2.png";
	const popUp3 = JSON.stringify(popUp("Vous vous débrouillez bien monsieurs le directeur ! Enfin je crois... Il est temps de choisir le type de pêches sur lequel nous allons concentrer notre production, Je vous demande de choisir entre la peche des fond marins à l'aide de grands filets. Le gorafi à même promis de financer nos filets, ce qui nous coutera peu ! Ou une pêche certes plus responsable, mais moins rentable...", "Fond marins", 0, 200, 1000, 30, "Pêche responsable", 0, 500, 150, -20), null, 2);
	const popUp3Text1 = "j3_1.png";
	const popUp3Text2 = "j3_2.png";
	const popUp4 = JSON.stringify(popUp("Le GIEC vous contacte et vous implore de réduire votre production plastiques. Il vous explique que cela contribue au réchauffement climatique. Cependant, cela réduirait vos revenue de 20%, que faites vous ?","Minimiser l'utilisation du plastique", 0, 300, 80, -20,  "Vous ne pouvez pas vous permettre de changer de matériaux. Cela vous couterais trop cher", 0, 0, 100, 20), null, 2);
	const popUp4Text1 = "j4_1.png";
	const popUp4Text2 = "j4_2.png";
    const popUp5 = JSON.stringify(popUp("Un groupe d'entrepreneurs locaux souhaite développer une grande ferme aquatique dans une région proche de votre zone de pêche. Cette initiative pourrait booster l'économie locale et fournir un nouvel écosystème pour certaines espèces marines, mais elle risque aussi d'entrer en concurrence avec vos activités. Que décidez-vous ?", "Collaborer avec les fermes aquatiques.", 110, 0, 85, -10, "Refuser pour protéger votre monopole.", 70, 0, 100, 30), null, 2);
	const popUp5Text1 = "j5_1.png";
	const popUp5Text2 = "j5_2.png";
    const popUp6 = JSON.stringify(popUp("Une initiative de nettoyage des plages a été lancée dans votre région, attirant l'attention des médias et des ONG. Cependant, cette opération nécessite que vous allouiez une partie de vos employés à la collecte de déchets marins. Cela pourrait affecter vos ressources disponibles pour la production.", "Allouer des employés à la collecte", 70, 0, 70, -50, "Refuser de consacrer des employés au nettoyage", 100, 0, 100, 50), null, 2);
	const popUp6Text1 = "j6_1.png";
	const popUp6Text2 = "j6_2.png";
	let table = [[popUp1, [popUp1Text1, 5], [popUp1Text2, 5], 600], [popUp2, [popUp2Text1, 15], [popUp2Text2, 15], 5000], [popUp3, [popUp3Text1, 4], [popUp3Text2, 4], 14000], [popUp4, [popUp4Text1, 10], [popUp4Text2, 10], 22000], [popUp5, [popUp5Text1, 5], [popUp5Text2, 5], 37000], [popUp6, [popUp6Text1, 5], [popUp6Text2, 5], 60000]];
    return table;
}

export function verificationDefaite(score:number){
    let defaite: boolean = false;
    let texte: string = "";
    if (score >= 100){
        texte = "Loser";
    } 
    else if (score <= 0){
        texte = "Good_loser";
    }
    return [texte, defaite];
}

export function verificationLED(score:number){
    let text: string = "";
    if (score >= 60){
        text = "Red";
    } 
    else if (score >= -20){
        text = "Orange";
    }
    else {
        text = "Green";
    }
    return text;
}