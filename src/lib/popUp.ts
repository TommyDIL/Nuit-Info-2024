interface PopUp {
    offer: string;
    choices : Array<{
        title: string;
        nb_fishermen: number;
        nb_price: number;
    }>;
    title: string;
    nb_fishermen: number;
    nb_price: number;
}

function popUp(offre:string, titleChoice1:string, nbFishermenChoice1:number, nbPriceChoice1:number, titleChoice2:string, nbFishermenChoice2:number, nbPriceChoice2:number) {
	let offer_table = {
        offer: offre,
        choice: [{
            title : titleChoice1,
            nb_fishermen: nbFishermenChoice1,
            nb_price: nbPriceChoice1
        },{
            title : titleChoice2,
            nb_fishermen: nbFishermenChoice2,
            nb_price: nbPriceChoice2
        }]
    }
    return offer_table;
}

var popUp1 = popUp("Test", "Accept", 2, 30, "Deny", 0, 0);
let popUp1Json = JSON.stringify(popUp1, null, 2);
console.log(popUp1Json);