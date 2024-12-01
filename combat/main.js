

class Barbare {
    constructor(attack, pv) {
        this.attack = attack;
        this.pv = pv;    }


}

let Germane = new Barbare(20,5);
let Rouge = new Barbare(20,3);

console.log("les stats de Rouge :")
console.log(Rouge)
console.log("les stats de Germane :")
console.log(Germane)

function tourGermane(pv, attack) {
    Rouge.pv -= Germane.attack;
       }  console.log ("Rouge est à " + Rouge.pv + " PV, elle a reçu une attaque de " + Germane.attack + " dégâts !");
tourGermane(11,15)
console.log("les stats de Rouge :")
console.log(Rouge)

if (Rouge.pv <= 0){
    console.log ("Rouge est K.O !")}
    else{
        console.log("Rouge a encore "+ Rouge.pv +" pv !")
    }


    function tourRouge(pv, attack) {
        Germane.pv -= Rouge.attack;
           }  console.log ("Germane est à " + Germane.pv + " PV, elle a reçu une attaque de " + Rouge.attack + " dégâts !");
    tourRouge(5,20,5)
    console.log("les stats de Germane :")
    console.log(Germane)
    

        if (Rouge.pv <= 0) {
            console.log("Rouge est KO, Germane Gagne");
      
        } else if (Germane.pv <= 0) {
            console.log("Germane est KO, Rouge Gagne");
     
        }


        function tourGermane(pv, attack) {
    Rouge.pv -= Germane.attack;
       }  console.log ("Rouge est à " + Rouge.pv + " PV, elle a reçu une attaque de " + Germane.attack + " dégâts !");
tourGermane(11,15)
console.log("les stats de Rouge :")
console.log(Rouge)

if (Rouge.pv <= 0){
    console.log ("Rouge est K.O !")}
    else{
        console.log("Rouge a encore "+ Rouge.pv +" pv !")
    }

    if (Germane.pv <= 0){
        console.log ("Germane est K.O !")}
        else{
            console.log("Germane a encore "+ Germane.pv +" pv !")
        }